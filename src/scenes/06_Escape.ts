import * as THREE from 'three';
import type { GameContext, GameScene } from '../core/types';
import { Player } from '../characters/Player';
import { MODELS } from '../assets/models';
import { Raptor } from '../characters/Raptor';
import { CREW_STYLES } from '../user/styleFromUser';
import { ParticleField, rng } from '../core/fx';
import { canvasTexture, fitModel, loadFont, loadModel } from '../core/Assets';
import { disposeObject, disposeScene } from '../core/dispose';
import { el, type RadioLine } from '../ui/UI';

const TRACK_LENGTH = 2000; // metres to the main gate
const RIVER = { start: 1150, end: 1186 }; // Gaji River ford
const MAX_HITS = 3;
const MAX_FAILS = 3; // caught this many times in a row → back to the Cold Open
const STEER_SPEED = 13;
const ROAD_HALF = 7.2;
const JEEP_HALF_W = 1.0;
const JEEP_HALF_L = 1.9;
const TILE = 10;
const GRASS_TILE = 40;
const WARN_DISTANCE = 90; // obstacles closer than this get a pulsing ground marker
const BOOST_MULT = 1.45; // speed while boosting
const BRAKE_MULT = 0.45; // speed while braking
const BOOST_DRAIN = 0.4; // meter per second while boosting
const BOOST_RECHARGE = 0.05; // meter per second, passively
const DRIFT_CHARGE = 0.3; // meter per second while drifting hard
const DRIFT_STEER = 1.6; // lateral speed multiplier while drifting
const JINK_SPEED = 26; // sidestep impulse
const JINK_TIME = 0.22;
const JINK_COOLDOWN = 1.2;
const KICK_COOLDOWN = 4;
const KICK_RANGE = 26; // raptor must be this close to be hit by debris
const BITE_GAP = 3.5; // brake too long and the raptor bites
const SUN_DIR = new THREE.Vector3(-0.55, 0.2, -1).normalize();

const DRIVE_CONTROLS = [
  { keys: ['◀', '▶'], label: 'steer (or A / D)', id: 'steer' },
  { keys: ['▲'], label: 'hold to boost (or W) · uses the meter', id: 'boost' },
  { keys: ['▼'], label: 'hold to brake (or S) · the raptor gains', id: 'brake' },
  { keys: ['SHIFT'], label: '+ steer to drift · refills boost', id: 'drift' },
  { keys: ['◀◀', '▶▶'], label: 'double-tap to jink sideways', id: 'jink' },
  { keys: ['SPACE'], label: 'kick debris at the raptor', id: 'kick' },
  { keys: ['C'], label: 'switch camera', id: 'camera' },
];

type Kind = 'rock' | 'mound' | 'log' | 'elephant' | 'baboon' | 'antelope' | 'hippo';
type State = 'intro' | 'drive' | 'caught' | 'won';
type CamMode = 'chase' | 'hood';

interface Obstacle {
  kind: Kind;
  obj: THREE.Object3D;
  r: number; // collision radius
  hw: number; // half-length along x (logs); 0 for round obstacles
  vx: number;
  hop: number;
  hit: boolean;
  fly: THREE.Vector3 | null;
  warn: THREE.Mesh;
}

const SKY_VERTEX = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const SKY_FRAGMENT = /* glsl */ `
uniform vec3 top;
uniform vec3 horizon;
uniform vec3 bottom;
uniform vec3 sunColor;
uniform vec3 sunDir;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  vec3 c = mix(horizon, top, smoothstep(0.0, 0.55, d.y));
  c = mix(c, bottom, smoothstep(0.0, -0.25, d.y));
  float s = max(dot(d, sunDir), 0.0);
  c += sunColor * (pow(s, 900.0) * 2.5 + pow(s, 18.0) * 0.25);
  gl_FragColor = vec4(c, 1.0);
}`;

/** Dawn chase across Yankari: dodge wildlife and terrain, ford the Gaji River, reach the main gate. */
export class Escape implements GameScene {
  readonly scene = new THREE.Scene();
  private ctx!: GameContext;
  private jeep!: THREE.Group;
  private readonly wheels: THREE.Object3D[] = [];
  private driver!: Player;
  private passenger!: Player;
  private raptor!: Raptor;
  private ground!: THREE.Mesh;
  private road!: THREE.Mesh;
  private grass!: THREE.InstancedMesh;
  private sky!: THREE.Mesh;
  private hills!: THREE.Group;
  private sun!: THREE.DirectionalLight;
  private templates!: Record<Kind, THREE.Object3D>;
  private warnGeo!: THREE.RingGeometry;
  private warnMat!: THREE.MeshBasicMaterial;
  private readonly decor: THREE.Object3D[] = [];
  private obstacles: Obstacle[] = [];
  private dust!: ParticleField;
  private spray!: ParticleField;
  private motes!: ParticleField;
  private readonly rearCam = new THREE.PerspectiveCamera(55, 3.2, 0.1, 600);
  private hud!: {
    pips: HTMLElement[];
    fill: HTMLElement;
    me: HTMLElement;
    threat: HTMLElement;
    rear: HTMLElement;
    tries: HTMLElement;
    boostFill: HTMLElement;
    kick: HTMLElement;
  };

  private state: State = 'intro';
  private camMode: CamMode = 'chase';
  private stateT = 0;
  private t = 0;
  private dist = 0;
  private x = 0;
  private vx = 0;
  private speed = 10;
  private hits = 0;
  private fails = 0;
  private invuln = 0;
  private slow = 1;
  private gap = 42;
  private nextSpawn = 150;
  private roarIn = 4;
  private jumping = 0;
  private leaving = false;
  private caughtAt = 0;
  private boost = 1;
  private boosting = false;
  private braking = false;
  private drifting = false;
  private yawExtra = 0;
  private jinkT = 0;
  private jinkDir = 0;
  private jinkCd = 0;
  private kickCd = 0;
  private skidIn = 0;
  private stumble = 0;
  private brakeMat!: THREE.MeshStandardMaterial;
  private debris!: ParticleField;
  private briefing = true;
  private keys = new Map<string, HTMLElement>();
  private readonly tipAt = new Map<string, number>();
  private lastThreat = -1;
  private readonly said = new Set<string>();
  private readonly camOffset = new THREE.Vector3();
  private readonly lookOffset = new THREE.Vector3();
  private readonly camGoal = new THREE.Vector3();
  private readonly lookGoal = new THREE.Vector3();
  private readonly tmp = new THREE.Vector3();

  async enter(ctx: GameContext): Promise<void> {
    this.ctx = ctx;
    await loadFont("130px 'Bebas Neue'");
    this.scene.fog = new THREE.Fog('#e9b58e', 110, 420);
    ctx.bloom.strength = 0.45;
    ctx.bloom.threshold = 0.9;
    this.scene.environment = ctx.envMap;
    this.scene.environmentIntensity = 0.2;
    ctx.grade.set({ tint: '#fff4e6', saturation: 1.15, contrast: 1.14, vignette: 0.32 });

    this.buildWorld();
    this.buildRiver();
    await this.buildTemplates();
    this.buildDecor();
    await this.buildJeep();
    this.buildGate();
    this.raptor = await Raptor.create(5.2);
    this.raptor.root.rotation.y = Math.PI;
    this.raptor.play('Run', 0);
    this.scene.add(this.raptor.root);
    this.buildParticles();
    this.buildHud();

    ctx.audio.startLoop('engine');
    ctx.audio.startLoop('action');
    this.reset(true);
    ctx.ui.briefing(
      'THE ESCAPE',
      'Outrun the raptor to the Yankari main gate, 2 km away. The jeep drives itself: you steer and dodge. 3 hits and you’re caught. Caught 3 times in a row and you start the whole game again.',
      DRIVE_CONTROLS,
      'Press [SPACE] to start the engine',
    );
    this.keys = ctx.ui.legend('DRIVING', DRIVE_CONTROLS);
  }

  private startChase(): void {
    this.briefing = false;
    this.ctx.ui.closeBriefing();
    this.ctx.ui.routeMap(2);
    this.announce();
  }

  /** Caption, reminder and roar at the start of each run. */
  private announce(): void {
    const { ui } = this.ctx;
    ui.caption('Dawn · 2 km to the main gate · past the Gaji River and Kalban Hill', 3.5);
    ui.hint('Hold [↑] to boost · [SPACE] kicks debris at the raptor');
    this.ctx.audio.play('roar', 0.8);
  }

  /** Situational tip, at most once every `every` seconds per kind. */
  private tip(kind: string, text: string, every = 9): void {
    const now = performance.now() / 1000;
    if (now - (this.tipAt.get(kind) ?? -1e9) < every) return;
    this.tipAt.set(kind, now);
    this.ctx.ui.prompt(text);
  }

  private updateTips(): void {
    if (this.state !== 'drive') return;
    const jz = -this.dist;
    const blocked = this.obstacles.some((o) => {
      const ahead = jz - o.obj.position.z;
      return !o.hit && ahead > 12 && ahead < 45 && Math.abs(o.obj.position.x - this.x) < o.r + o.hw + 1.3;
    });
    if (this.gap < 11 && this.kickCd <= 0) this.tip('kick', 'Raptor close! Press [SPACE] to kick debris in its face');
    else if (this.gap < 11 && this.boost > 0.3) this.tip('boost', 'Raptor close! Hold [↑] to boost away');
    else if (this.braking && this.gap < 9) this.tip('brake', 'Careful! Braking with [↓] lets the raptor catch you', 5);
    else if (blocked) this.tip('dodge', 'Obstacle ahead! [◀] [▶] steer · double-tap to jink', 7);
    else if (this.boost < 0.12) this.tip('drift', 'Boost empty · hold [SHIFT] while steering to drift and recharge', 14);
    else if (this.dist > RIVER.start - 160 && this.dist < RIVER.start - 60) this.tip('river', 'Gaji River ahead · water slows you down · weave past the hippos', 30);
  }

  private updateLegend(): void {
    const k = this.keys;
    const axis = this.ctx.input.axis();
    k.get('steer')?.classList.toggle('active', axis.x !== 0);
    k.get('boost')?.classList.toggle('active', this.boosting);
    k.get('brake')?.classList.toggle('active', this.braking);
    k.get('drift')?.classList.toggle('active', this.drifting);
    k.get('jink')?.classList.toggle('active', this.jinkT > 0);
    k.get('jink')?.classList.toggle('cool', this.jinkCd > 0 && this.jinkT <= 0);
    k.get('kick')?.classList.toggle('cool', this.kickCd > 0);
    k.get('kick')?.classList.toggle('active', this.kickCd <= 0 && this.gap < KICK_RANGE);
  }

  update(dt: number): void {
    const { input } = this.ctx;
    if (this.briefing) {
      if (input.pressed('action') || input.pressed('skip')) this.startChase();
      this.raptor.update(dt);
      return;
    }
    this.t += dt;
    this.stateT += dt;
    this.invuln = Math.max(0, this.invuln - dt);
    this.slow = Math.min(1, this.slow + dt * 0.35);
    const progress = Math.min(this.dist / TRACK_LENGTH, 1);
    if (input.pressed('camera')) this.camMode = this.camMode === 'chase' ? 'hood' : 'chase';

    // Driving moves: boost (W), brake (S), drift (Shift), jink (double-tap), debris kick (Space).
    const canDrive = this.state === 'intro' || this.state === 'drive';
    const axis = input.axis();
    const steerDir = canDrive ? Math.sign(axis.x) : 0;
    this.jinkCd = Math.max(0, this.jinkCd - dt);
    this.kickCd = Math.max(0, this.kickCd - dt);
    this.jinkT = Math.max(0, this.jinkT - dt);
    this.stumble = Math.max(0, this.stumble - dt);
    const wasBoosting = this.boosting;
    this.boosting = canDrive && axis.y > 0 && this.boost > 0.02;
    this.braking = canDrive && axis.y < 0;
    this.drifting = canDrive && input.isDown('drift') && steerDir !== 0;
    if (this.boosting && !wasBoosting) {
      this.ctx.audio.play('boost');
      this.ctx.cinema.shake(0.08, 0.3);
    }
    this.boost = THREE.MathUtils.clamp(
      this.boost + dt * (this.boosting ? -BOOST_DRAIN : BOOST_RECHARGE) + (this.drifting && Math.abs(this.vx) > 6 ? dt * DRIFT_CHARGE : 0),
      0,
      1,
    );
    if (canDrive && this.jinkCd <= 0 && (input.pressed('jinkLeft') || input.pressed('jinkRight'))) {
      this.jinkDir = input.pressed('jinkLeft') ? -1 : 1;
      this.jinkT = JINK_TIME;
      this.jinkCd = JINK_COOLDOWN;
      this.ctx.audio.play('whoosh', 0.7);
    }
    if (this.state === 'drive' && this.kickCd <= 0 && input.pressed('action')) this.kickDebris();

    // Speed ramps up over the run; the river ford drags you down.
    const inRiver = this.dist > RIVER.start && this.dist < RIVER.end;
    let target = THREE.MathUtils.lerp(24, 34, THREE.MathUtils.smoothstep(progress, 0, 1)) * this.slow * (inRiver ? 0.6 : 1);
    if (this.boosting) target *= BOOST_MULT;
    if (this.braking) target *= BRAKE_MULT;
    if (this.state === 'caught') target = 0;
    if (this.state === 'won') target = 9;
    const accel = this.braking ? 3.5 : this.boosting ? 2.2 : 1.4;
    this.speed += (target - this.speed) * Math.min(1, dt * (this.state === 'caught' ? 3 : accel));
    this.dist += this.speed * dt;

    if (this.jinkT > 0) {
      this.vx = this.jinkDir * JINK_SPEED;
    } else {
      const steer = steerDir * STEER_SPEED * (this.drifting ? DRIFT_STEER : 1);
      this.vx += (steer - this.vx) * Math.min(1, dt * (this.drifting ? 3 : 6));
    }
    this.yawExtra += ((this.drifting ? -steerDir * 0.45 : 0) - this.yawExtra) * Math.min(1, dt * 6);
    if (this.drifting) {
      this.skidIn -= dt;
      if (this.skidIn <= 0) {
        this.skidIn = 0.32;
        this.ctx.audio.play('skid');
      }
    }
    this.x += this.vx * dt;
    if (Math.abs(this.x) > ROAD_HALF) {
      this.x = Math.sign(this.x) * ROAD_HALF;
      this.vx = 0;
    }
    this.ctx.audio.setEngine(this.speed / (34 * BOOST_MULT));

    this.updateJeep(dt);
    this.updateSpawns(progress);
    this.updateObstacles(dt);
    this.updateRaptor(dt);
    this.updateWorld();
    this.dust.emitting = this.speed > 4 && !inRiver;
    this.spray.emitting = inRiver && this.speed > 4;
    this.debris.update(dt);
    this.dust.update(dt);
    this.spray.update(dt);
    this.motes.update(dt);
    this.updateCamera(dt);
    this.updateHud(progress);
    this.updateRadio(progress);
    this.updateTips();
    this.updateLegend();

    switch (this.state) {
      case 'intro':
        if (this.stateT > 4.2) this.setState('drive');
        break;
      case 'drive':
        if (this.stateT > 7) this.ctx.ui.hint(null);
        if (this.hits >= MAX_HITS) this.caught();
        else if (this.dist >= TRACK_LENGTH) this.won();
        break;
      case 'caught':
        // Real time, not scene time: slow-motion must not swallow the retry press.
        if (performance.now() - this.caughtAt > 600 && (input.pressed('action') || input.pressed('skip'))) {
          if (this.fails >= MAX_FAILS) this.leave('coldOpen');
          else this.reset(false);
        }
        break;
      case 'won':
        if (this.stateT > 4.8) this.leave('credits');
        break;
    }
  }

  afterRender(renderer: THREE.WebGLRenderer): void {
    if (this.state !== 'intro' && this.state !== 'drive') return;
    const w = Math.min(320, window.innerWidth * 0.26);
    const h = w / 3.2;
    const x = (window.innerWidth - w) / 2;
    const y = window.innerHeight - 18 - h;
    const jp = this.jeep.position;
    this.rearCam.aspect = w / h;
    this.rearCam.updateProjectionMatrix();
    this.rearCam.position.set(jp.x, 2.1, jp.z + 2.4);
    this.rearCam.lookAt(jp.x, 1.3, jp.z + 30);
    const autoUpdate = renderer.shadowMap.autoUpdate;
    renderer.shadowMap.autoUpdate = false;
    renderer.setScissorTest(true);
    renderer.setScissor(x, y, w, h);
    renderer.setViewport(x, y, w, h);
    renderer.render(this.scene, this.rearCam);
    renderer.setScissorTest(false);
    renderer.setViewport(0, 0, window.innerWidth, window.innerHeight);
    renderer.shadowMap.autoUpdate = autoUpdate;
  }

  exit(): void {
    for (const o of this.obstacles) this.scene.remove(o.obj, o.warn);
    disposeScene(this.scene);
    for (const t of Object.values(this.templates)) disposeObject(t);
    this.warnGeo.dispose();
    this.warnMat.dispose();
  }

  // ---------------------------------------------------------------- flow

  private setState(state: State): void {
    this.state = state;
    this.stateT = 0;
  }

  private leave(id: 'coldOpen' | 'credits'): void {
    if (this.leaving) return;
    this.leaving = true;
    this.ctx.goTo(id);
  }

  private reset(first: boolean): void {
    const { ui } = this.ctx;
    for (const o of this.obstacles) this.scene.remove(o.obj, o.warn);
    this.obstacles = [];
    this.dist = 0;
    this.x = 0;
    this.vx = 0;
    this.speed = 12;
    this.hits = 0;
    this.invuln = 0;
    this.slow = 1;
    this.gap = 42;
    this.nextSpawn = 150;
    this.jeep.visible = true;
    this.said.clear();
    this.layoutDecor();
    this.placeHippos();
    this.camOffset.set(-4.6, 1.3, -5.5);
    this.lookOffset.set(0, 1.1, 1);
    this.setState('intro');
    this.hud.pips.forEach((p) => p.classList.remove('lost'));
    this.hud.tries.textContent = this.fails > 0 ? `TRY ${this.fails + 1}/${MAX_FAILS}` : '';
    if (!first) {
      ui.clearTitle();
      this.announce();
    }
    this.boost = 1;
    this.kickCd = 0;
    this.jinkCd = 0;
    this.raptor.play('Run', 0.2);
  }

  private hit(o: Obstacle): void {
    const { audio, cinema, ui } = this.ctx;
    this.hits++;
    this.invuln = 1.4;
    this.slow = 0.5;
    this.gap -= 6;
    o.hit = true;
    audio.play('impact');
    cinema.shake(0.35, 0.5);
    ui.flash('#ff7a2a', 0.35, 0.4);
    if (o.kind === 'elephant' || o.kind === 'hippo') {
      audio.play('trumpet');
      this.vx = Math.sign(this.x - o.obj.position.x || 1) * 12;
    } else if (o.kind !== 'log' && o.kind !== 'mound') {
      o.fly = new THREE.Vector3(Math.sign(o.obj.position.x - this.x || 1) * 6, 7, -this.speed * 0.4);
    }
    this.hud.pips.forEach((p, i) => p.classList.toggle('lost', i >= MAX_HITS - this.hits));
    if (this.hits === 2) this.say('hold', { who: 'Agent Ibis-5', lang: 'Igbo', text: 'Jide n’ike!', en: 'Hold on tight!' });
  }

  /** Spray gravel back at the raptor; if it's close enough it stumbles and falls behind. */
  private kickDebris(): void {
    const { audio, ui } = this.ctx;
    this.kickCd = KICK_COOLDOWN;
    this.debris.burst(140);
    audio.play('kick');
    if (this.gap < KICK_RANGE) {
      this.stumble = 1.6;
      this.gap += 8;
      this.raptor.play('Jump', 0.1, 0.6, true);
      audio.play('roar', 0.6);
      ui.flash('#c79a5a', 0.15, 0.3);
      this.say('kick', { who: 'Agent Harmattan-2', lang: 'Pidgin', text: 'E don chop sand! Go go go!', en: 'It got a face full of sand! Go, go, go!' });
    }
  }

  /** Braked too long: the raptor catches the tailgate. Counts as a hit. */
  private bite(): void {
    const { audio, cinema, ui } = this.ctx;
    this.hits++;
    this.invuln = 1.4;
    this.gap += 9;
    this.raptor.play('Attack', 0.05, 1.4, true);
    this.jumping = 0.8;
    audio.play('roar');
    audio.play('impact', 0.7);
    cinema.shake(0.4, 0.5);
    ui.flash('#ff2020', 0.35, 0.4);
    this.hud.pips.forEach((p, i) => p.classList.toggle('lost', i >= MAX_HITS - this.hits));
  }

  private caught(): void {
    const { audio, cinema, ui } = this.ctx;
    this.setState('caught');
    this.caughtAt = performance.now();
    this.fails++;
    this.raptor.play('Attack', 0.1);
    audio.play('roar');
    audio.play('impact');
    cinema.slowMo(0.25, 0.8);
    cinema.shake(0.4, 1);
    ui.flash('#ff2020', 0.5, 0.8);
    ui.hint(null);
    const left = MAX_FAILS - this.fails;
    if (left <= 0) ui.title('CAUGHT', 'Three times in a row · SPACE to start from the beginning', Infinity, 'danger');
    else ui.title('CAUGHT', `SPACE to try again · ${left} ${left === 1 ? 'try' : 'tries'} left`, Infinity, 'danger');
  }

  private won(): void {
    const { audio, cinema, ui } = this.ctx;
    this.setState('won');
    this.fails = 0;
    this.raptor.play('Walk', 0.5);
    audio.play('success');
    audio.play('roar', 0.5);
    cinema.slowMo(0.35, 1.2);
    ui.hint(null);
    ui.title('ESCAPED', 'Sunrise over Yankari', 3);
    ui.routeMap(4, 3);
  }

  private say(key: string, line: RadioLine): void {
    if (this.said.has(key)) return;
    this.said.add(key);
    this.ctx.ui.radio(line);
  }

  private updateRadio(progress: number): void {
    if (this.state !== 'drive' && this.state !== 'intro') return;
    if (this.state === 'intro' && this.stateT > 1) {
      this.say('behind', { who: 'Agent Ibis-5', lang: 'Yoruba', text: 'Ó ń bọ̀ lẹ́yìn wa!', en: 'It’s coming up behind us!' });
    }
    if (this.dist > RIVER.start - 140) {
      this.say('river', { who: 'Agent Ibis-5', lang: 'Yoruba', text: 'Odò Gaji níwájú. Ṣọ́ra fún erinmi!', en: 'Gaji River ahead. Watch out for the hippos!' });
    }
    if (progress > 0.9) this.say('gate', { who: 'Agent Harmattan-2', lang: 'Pidgin', text: 'Gate don near! No stop!', en: 'The gate is close! Don’t stop!' });
  }

  // ---------------------------------------------------------------- per-frame

  private updateJeep(dt: number): void {
    const jeep = this.jeep;
    jeep.position.set(this.x, Math.sin(this.t * 13) * 0.02 + Math.sin(this.t * 7.3) * 0.015, -this.dist);
    jeep.rotation.y = -this.vx * 0.03 + this.yawExtra;
    jeep.rotation.z = this.vx * 0.012 * (this.drifting ? 1.6 : 1);
    jeep.rotation.x = this.braking ? 0.04 : this.boosting ? -0.03 : 0;
    this.brakeMat.emissiveIntensity = this.braking ? 4 : 0.6;
    for (const w of this.wheels) w.rotation.x -= (this.speed * dt) / 0.45;
    jeep.visible = this.camMode === 'hood' || this.invuln <= 0 || Math.floor(this.invuln * 12) % 2 === 0;
    this.driver.update(dt, 0);
    this.passenger.update(dt, 0);
    this.passenger.root.rotation.y = Math.PI + Math.sin(this.t * 0.8) * 0.9;
  }

  private updateSpawns(progress: number): void {
    if (this.state !== 'drive' && this.state !== 'intro') return;
    while (this.dist + 170 > this.nextSpawn && this.nextSpawn < TRACK_LENGTH - 90) {
      const d = this.nextSpawn;
      if (d < RIVER.start - 25 || d > RIVER.end + 20) this.spawnRow(d, progress);
      this.nextSpawn += THREE.MathUtils.lerp(32, 20, progress) + Math.random() * 8;
    }
  }

  private spawnRow(d: number, progress: number): void {
    const z = -d;
    const roll = Math.random();
    const eta = (d - this.dist) / Math.max(this.speed, 20);
    if (progress > 0.1 && roll < 0.2) {
      // Elephant family crossing: Yankari is home to West Africa's largest herd.
      const dir = Math.random() < 0.5 ? 1 : -1;
      const ex = -dir * 3 * eta + (Math.random() * 4 - 2);
      const count = 2 + Math.floor(Math.random() * 2);
      for (let i = 0; i < count; i++) this.addObstacle('elephant', ex - dir * i * 5.5, z - i * 2.5, dir * 3, i > 0 ? 0.65 : 1);
      this.say('elephants', { who: 'Agent Harmattan-2', lang: 'Hausa', text: 'Giwaye! Ka kauce!', en: 'Elephants! Swerve!' });
      return;
    }
    if (progress > 0.2 && roll < 0.36) {
      // Baboon troop dashing across in a line.
      const dir = Math.random() < 0.5 ? 1 : -1;
      const bx = -dir * 6 * eta;
      for (let i = 0; i < 5; i++) this.addObstacle('baboon', bx - dir * i * 1.6, z - Math.random() * 3, dir * 6);
      this.say('baboons', { who: 'Agent Ibis-5', lang: 'Igbo', text: 'Enwe! Ọtụtụ enwe!', en: 'Monkeys! Lots of monkeys!' });
      return;
    }
    if (progress > 0.3 && roll < 0.48) {
      // Antelope bounding across, fast.
      const dir = Math.random() < 0.5 ? 1 : -1;
      this.addObstacle('antelope', -dir * 10 * eta + (Math.random() * 3 - 1.5), z, dir * 10);
      return;
    }
    if (roll < 0.64) {
      // Fallen baobab limb across part of the road: go around the open end.
      const side = Math.random() < 0.5 ? -1 : 1;
      this.addObstacle('log', side * (2 + Math.random() * 2.5), z, 0);
      return;
    }
    const x1 = (Math.random() * 2 - 1) * 6;
    this.addObstacle(Math.random() < 0.5 ? 'rock' : 'mound', x1, z, 0);
    if (Math.random() < 0.35 + progress * 0.4) {
      const shift = 4.6 + Math.random() * 2.5;
      this.addObstacle(Math.random() < 0.5 ? 'rock' : 'mound', x1 > 0 ? x1 - shift : x1 + shift, z - Math.random() * 6, 0);
    }
  }

  private addObstacle(kind: Kind, x: number, z: number, vx: number, scale = 1): void {
    const obj = this.templates[kind].clone();
    obj.position.set(x, 0, z);
    let r = 1;
    let hw = 0;
    switch (kind) {
      case 'rock': {
        const s = 0.8 + Math.random() * 0.5;
        obj.scale.setScalar(s);
        obj.rotation.y = Math.random() * Math.PI * 2;
        r = 1.1 * s;
        break;
      }
      case 'mound':
        r = 0.9;
        break;
      case 'log':
        r = 0.6;
        hw = 3.4;
        break;
      case 'elephant':
        obj.scale.multiplyScalar(scale);
        obj.rotation.y = Math.sign(vx) * (Math.PI / 2);
        r = 1.9 * scale;
        break;
      case 'baboon':
        obj.rotation.y = Math.sign(vx) * (Math.PI / 2);
        r = 0.45;
        break;
      case 'antelope':
        obj.rotation.y = Math.sign(vx) * (Math.PI / 2);
        r = 0.9;
        break;
      case 'hippo':
        obj.rotation.y = Math.random() * Math.PI * 2;
        r = 1.6;
        break;
    }
    const warn = new THREE.Mesh(this.warnGeo, this.warnMat);
    warn.rotation.x = -Math.PI / 2;
    warn.scale.set((r + hw) * 1.3, (r + 0.3) * 1.3, 1);
    warn.position.set(x, 0.12, z);
    warn.visible = false;
    this.scene.add(obj, warn);
    this.obstacles.push({ kind, obj, r, hw, vx, hop: Math.random() * 6, hit: false, fly: null, warn });
  }

  private placeHippos(): void {
    for (let i = 0; i < 4; i++) {
      const x = -6 + i * 4 + (Math.random() * 2 - 1);
      this.addObstacle('hippo', x, -(RIVER.start + 6 + Math.random() * 24), 0);
    }
  }

  private updateObstacles(dt: number): void {
    const jz = -this.dist;
    const keep: Obstacle[] = [];
    this.warnMat.opacity = 0.35 + (0.5 + Math.sin(this.t * 10) * 0.5) * 0.4;
    for (const o of this.obstacles) {
      const p = o.obj.position;
      if (o.fly) {
        p.addScaledVector(o.fly, dt);
        o.fly.y -= 20 * dt;
        o.obj.rotation.x += dt * 6;
        o.obj.rotation.z += dt * 4;
      } else if (o.vx !== 0) {
        p.x += o.vx * dt;
        o.hop += dt * (o.kind === 'antelope' ? 7 : o.kind === 'baboon' ? 14 : 5);
        if (o.kind === 'antelope') p.y = Math.abs(Math.sin(o.hop)) * 1.4;
        else if (o.kind === 'baboon') p.y = Math.abs(Math.sin(o.hop)) * 0.25;
        else o.obj.rotation.z = Math.sin(o.hop) * 0.03;
      } else if (o.kind === 'hippo') {
        o.hop += dt;
        p.y = -0.9 + Math.sin(o.hop * 1.3) * 0.12;
      }
      const ahead = jz - p.z;
      o.warn.visible = !o.hit && ahead > 4 && ahead < WARN_DISTANCE && Math.abs(p.x) < ROAD_HALF + 3;
      o.warn.position.x = p.x;
      const canHit = !o.hit && this.invuln <= 0 && this.jinkT <= 0 && (this.state === 'drive' || this.state === 'intro') && p.y < 1.2;
      if (canHit) {
        const ox = THREE.MathUtils.clamp(this.x, p.x - o.hw, p.x + o.hw);
        const dx = ox - this.x;
        const dz = p.z - jz;
        const cx = THREE.MathUtils.clamp(dx, -JEEP_HALF_W, JEEP_HALF_W);
        const cz = THREE.MathUtils.clamp(dz, -JEEP_HALF_L, JEEP_HALF_L);
        if ((dx - cx) ** 2 + (dz - cz) ** 2 < o.r * o.r) this.hit(o);
      }
      if (p.z > jz + 14 || Math.abs(p.x) > 60 || p.y < -6) this.scene.remove(o.obj, o.warn);
      else keep.push(o);
    }
    this.obstacles = keep;
  }

  private updateRaptor(dt: number): void {
    let goal = 20 - this.hits * 5 + Math.sin(this.t * 0.7) * 2;
    let rate = 0.35;
    if (this.state === 'intro') goal = 24;
    if (this.state === 'caught') {
      goal = 5.5;
      rate = 3;
    }
    if (this.state === 'won') goal = 70;
    const before = this.gap;
    this.gap += (goal - this.gap) * Math.min(1, dt * rate);
    if (this.state === 'drive') {
      // Boost pulls away; braking lets it close in. It's always a little faster than your cruising pace.
      const cruise = THREE.MathUtils.lerp(24, 34, THREE.MathUtils.smoothstep(this.dist / TRACK_LENGTH, 0, 1));
      const raptorSpeed = this.stumble > 0 ? cruise * 0.5 : cruise * 1.02;
      this.gap = THREE.MathUtils.clamp(this.gap + (this.speed - raptorSpeed) * dt * 0.7, 2, 60);
      if (this.gap <= BITE_GAP && this.invuln <= 0) this.bite();
    }
    const r = this.raptor;
    r.root.position.x += (this.x - r.root.position.x) * Math.min(1, dt * 1.5);
    r.root.position.z = -this.dist + this.gap;
    if (this.state === 'won') r.root.rotation.y += (0 - r.root.rotation.y) * Math.min(1, dt * 2);
    else r.root.rotation.y = Math.PI;
    // Leap when it closes in fast (after a hit), then back to running.
    this.jumping = Math.max(0, this.jumping - dt);
    if (this.state === 'drive' && this.stumble > 0) {
      // staggering from the debris
    } else if (this.state === 'drive' && before - this.gap > 0.04 && this.gap < 14 && this.jumping <= 0) {
      r.play('Jump', 0.1, 1.2, true);
      this.jumping = 1.1;
    } else if (this.state === 'drive' && this.jumping <= 0) {
      r.play('Run', 0.2, THREE.MathUtils.clamp(this.speed / 26, 0.8, 1.5));
    }
    r.update(dt);
    this.roarIn -= dt;
    if (this.roarIn <= 0 && this.state === 'drive') {
      this.roarIn = 6 + Math.random() * 5;
      this.ctx.audio.play('roar', THREE.MathUtils.clamp(1.4 - this.gap / 30, 0.3, 1));
    }
  }

  private updateWorld(): void {
    const jz = -this.dist;
    const snapped = Math.round(jz / TILE) * TILE;
    this.ground.position.z = snapped;
    this.road.position.z = snapped;
    this.grass.position.z = Math.floor(jz / GRASS_TILE) * GRASS_TILE;
    this.hills.position.z = jz;
    this.sky.position.copy(this.ctx.camera.position);
    this.sun.position.copy(this.jeep.position).addScaledVector(SUN_DIR, 80);
    this.sun.target.position.copy(this.jeep.position);
    for (const d of this.decor) {
      if (d.position.z > jz + 25) d.position.z -= 360;
      d.visible = !(-d.position.z > RIVER.start - 4 && -d.position.z < RIVER.end + 4);
    }
  }

  private updateCamera(dt: number): void {
    const cam = this.ctx.camera;
    const jp = this.jeep.position;
    const hood = this.camMode === 'hood';
    const driving = this.state === 'drive' || (this.state === 'intro' && this.stateT >= 2.9);
    if (driving) {
      if (hood) {
        this.camGoal.set(-0.45, 2.05, -0.2);
        this.lookGoal.set(-this.x * 0.05, 1.4, -30);
      } else {
        this.camGoal.set(-this.x * 0.25, 4.1, 9.2);
        this.lookGoal.set(-this.x * 0.15, 0.8, -24);
      }
    } else if (this.state === 'intro') {
      this.camGoal.set(-4.6, 1.3, -5.5);
      this.lookGoal.set(0, 1.1, 1);
    } else if (this.state === 'caught') {
      this.camGoal.set(3.4, 2.4, -4.5);
      this.lookGoal.set(0, 1.6, 4);
    } else {
      this.camGoal.set(5.2, 1.6, -2.5);
      this.lookGoal.set(0, 1.2, 0.5);
    }
    const f = this.state === 'drive' && hood ? 1 : 1 - Math.exp(-dt * (this.state === 'drive' ? 6 : 2.2));
    this.camOffset.lerp(this.camGoal, f);
    this.lookOffset.lerp(this.lookGoal, f);
    cam.position.copy(jp).add(this.camOffset);
    this.tmp.copy(jp).add(this.lookOffset);
    cam.lookAt(this.tmp);
    cam.rotateZ(-this.vx * (hood ? 0.01 : 0.005));
    const fov = this.state === 'drive' ? (hood ? 70 : 56) + (this.speed / 34) * 10 + (this.boosting ? 6 : 0) : 50;
    if (Math.abs(cam.fov - fov) > 0.05) {
      cam.fov += (fov - cam.fov) * Math.min(1, dt * 3);
      cam.updateProjectionMatrix();
    }
  }

  private updateHud(progress: number): void {
    const pct = `${(progress * 100).toFixed(1)}%`;
    this.hud.fill.style.width = pct;
    this.hud.me.style.left = pct;
    this.hud.rear.style.display = this.state === 'intro' || this.state === 'drive' ? 'block' : 'none';
    this.hud.boostFill.style.width = `${(this.boost * 100).toFixed(0)}%`;
    this.hud.boostFill.classList.toggle('on', this.boosting);
    this.hud.kick.textContent = this.kickCd > 0 ? `DEBRIS ${this.kickCd.toFixed(1)}s` : 'DEBRIS READY · SPACE';
    this.hud.kick.classList.toggle('ready', this.kickCd <= 0);
    const meters = Math.max(0, Math.round(this.gap));
    if (meters !== this.lastThreat) {
      this.lastThreat = meters;
      this.hud.threat.textContent = `RAPTOR ${meters} M`;
      this.hud.threat.classList.toggle('close', meters < 12);
    }
  }

  // ---------------------------------------------------------------- build

  private buildWorld(): void {
    const scene = this.scene;
    const rand = rng(606);

    this.sky = new THREE.Mesh(
      new THREE.SphereGeometry(450, 32, 16),
      new THREE.ShaderMaterial({
        vertexShader: SKY_VERTEX,
        fragmentShader: SKY_FRAGMENT,
        uniforms: {
          top: { value: new THREE.Color('#5d7fb8') },
          horizon: { value: new THREE.Color('#f3c39a') },
          bottom: { value: new THREE.Color('#c99a74') },
          sunColor: { value: new THREE.Color('#fff0c8') },
          sunDir: { value: SUN_DIR },
        },
        side: THREE.BackSide,
        depthWrite: false,
        fog: false,
      }),
    );
    this.sky.renderOrder = -1;
    scene.add(this.sky);

    scene.add(new THREE.HemisphereLight('#ffe2c4', '#6b5a3a', 1.3));
    this.sun = new THREE.DirectionalLight('#ffd3a3', 2.4);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera;
    sc.left = sc.bottom = -30;
    sc.right = sc.top = 30;
    sc.near = 1;
    sc.far = 180;
    this.sun.shadow.bias = -0.0004;
    scene.add(this.sun, this.sun.target);

    const groundTex = canvasTexture(256, 256, (g, w, h) => {
      g.fillStyle = '#a08a50';
      g.fillRect(0, 0, w, h);
      for (let i = 0; i < 2600; i++) {
        const v = rand();
        g.fillStyle = v < 0.4 ? 'rgba(120,110,50,0.6)' : v < 0.7 ? 'rgba(190,160,95,0.5)' : 'rgba(80,70,35,0.5)';
        g.fillRect(rand() * w, rand() * h, 1 + rand() * 3, 1 + rand() * 6);
      }
    }, { repeat: [70, 70] });
    this.ground = new THREE.Mesh(new THREE.PlaneGeometry(700, 700), new THREE.MeshStandardMaterial({ map: groundTex, roughness: 1 }));
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.receiveShadow = true;
    scene.add(this.ground);

    const roadTex = canvasTexture(128, 256, (g, w, h) => {
      const grad = g.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, 'rgba(155,107,68,0)');
      grad.addColorStop(0.15, 'rgba(155,107,68,1)');
      grad.addColorStop(0.85, 'rgba(155,107,68,1)');
      grad.addColorStop(1, 'rgba(155,107,68,0)');
      g.fillStyle = grad;
      g.fillRect(0, 0, w, h);
      g.fillStyle = 'rgba(95,62,38,0.55)';
      g.fillRect(w * 0.3, 0, 7, h);
      g.fillRect(w * 0.64, 0, 7, h);
      for (let i = 0; i < 500; i++) {
        g.fillStyle = rand() > 0.5 ? 'rgba(190,140,95,0.5)' : 'rgba(90,60,35,0.4)';
        g.fillRect(w * 0.12 + rand() * w * 0.76, rand() * h, 2, 2);
      }
    }, { repeat: [1, 70] });
    this.road = new THREE.Mesh(
      new THREE.PlaneGeometry(17, 700),
      new THREE.MeshStandardMaterial({ map: roadTex, roughness: 1, transparent: true, depthWrite: false }),
    );
    this.road.rotation.x = -Math.PI / 2;
    this.road.position.y = 0.03;
    this.road.receiveShadow = true;
    scene.add(this.road);

    // Instanced grass tufts on one repeating 40 m tile.
    const perTile = 110;
    const tiles = 9;
    const base: [number, number, number][] = [];
    for (let i = 0; i < perTile; i++) {
      const side = rand() < 0.5 ? -1 : 1;
      base.push([side * (9.5 + rand() * 55), -rand() * GRASS_TILE, 0.4 + rand() * 0.7]);
    }
    this.grass = new THREE.InstancedMesh(
      new THREE.ConeGeometry(0.3, 0.9, 5).translate(0, 0.45, 0),
      new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 1 }),
      perTile * tiles,
    );
    const m = new THREE.Matrix4();
    const color = new THREE.Color();
    for (let t = 0; t < tiles; t++) {
      base.forEach(([x, z, s], i) => {
        m.makeScale(s * 1.4, s, s * 1.4).setPosition(x, 0, z - (t - 1) * GRASS_TILE);
        this.grass.setMatrixAt(t * perTile + i, m);
        this.grass.setColorAt(t * perTile + i, color.set(i % 3 === 0 ? '#9c9440' : i % 3 === 1 ? '#c2a35a' : '#b19a4c'));
      });
    }
    this.grass.frustumCulled = false;
    scene.add(this.grass);

    // Horizon: rolling hills plus flat-topped Kalban Hill ahead.
    this.hills = new THREE.Group();
    const hillMat = new THREE.MeshStandardMaterial({ color: '#9a6a52', roughness: 1, flatShading: true });
    for (let i = 0; i < 12; i++) {
      const hill = new THREE.Mesh(new THREE.ConeGeometry(30 + rand() * 50, 10 + rand() * 18, 7), hillMat);
      const side = i % 2 ? 1 : -1;
      hill.position.set(side * (70 + rand() * 160), 0, -250 - rand() * 120);
      hill.scale.z = 0.6;
      this.hills.add(hill);
    }
    const kalban = new THREE.Mesh(
      new THREE.CylinderGeometry(55, 95, 38, 9),
      new THREE.MeshStandardMaterial({ color: '#8b5a45', roughness: 1, flatShading: true }),
    );
    kalban.position.set(35, 19, -360);
    kalban.scale.z = 0.5;
    this.hills.add(kalban);
    scene.add(this.hills);
  }

  private buildRiver(): void {
    const len = RIVER.end - RIVER.start;
    const waterTex = canvasTexture(128, 128, (g, w, h) => {
      g.fillStyle = '#3f8f8a';
      g.fillRect(0, 0, w, h);
      g.strokeStyle = 'rgba(220,255,250,0.35)';
      for (let i = 0; i < 26; i++) {
        g.lineWidth = 1 + Math.random() * 2;
        g.beginPath();
        const y = Math.random() * h;
        g.moveTo(0, y);
        g.bezierCurveTo(w * 0.3, y + 6, w * 0.6, y - 6, w, y);
        g.stroke();
      }
    }, { repeat: [40, 4] });
    const water = new THREE.Mesh(
      new THREE.PlaneGeometry(400, len),
      new THREE.MeshStandardMaterial({ map: waterTex, roughness: 0.15, metalness: 0.3, transparent: true, opacity: 0.92 }),
    );
    water.rotation.x = -Math.PI / 2;
    water.position.set(0, 0.08, -(RIVER.start + len / 2));
    water.receiveShadow = true;
    this.scene.add(water);
    const bankMat = new THREE.MeshStandardMaterial({ color: '#6e5233', roughness: 1 });
    for (const edge of [RIVER.start, RIVER.end]) {
      const bank = new THREE.Mesh(new THREE.PlaneGeometry(400, 4), bankMat);
      bank.rotation.x = -Math.PI / 2;
      bank.position.set(0, 0.05, -edge);
      this.scene.add(bank);
    }
    const sign = canvasTexture(512, 128, (g, w, h) => {
      g.fillStyle = '#4a3220';
      g.fillRect(0, 0, w, h);
      g.fillStyle = '#f2dfb8';
      g.font = "70px 'Bebas Neue', Impact, sans-serif";
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText('GAJI RIVER', w / 2, h / 2 + 4);
    });
    const board = new THREE.Mesh(new THREE.PlaneGeometry(4, 1), new THREE.MeshStandardMaterial({ map: sign, side: THREE.DoubleSide }));
    board.position.set(-9.5, 2.4, -(RIVER.start - 12));
    board.rotation.y = 0.3;
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 2.4, 6), new THREE.MeshStandardMaterial({ color: '#4a3220' }));
    post.position.set(-9.5, 1.2, -(RIVER.start - 12));
    this.scene.add(board, post);
  }

  private async buildTemplates(): Promise<void> {
    const rockMat = new THREE.MeshStandardMaterial({ color: '#7d6a5a', roughness: 0.95, flatShading: true });
    const clayMat = new THREE.MeshStandardMaterial({ color: '#a3593a', roughness: 1, flatShading: true });
    const barkMat = new THREE.MeshStandardMaterial({ color: '#7a6a58', roughness: 1, flatShading: true });
    const add = (geo: THREE.BufferGeometry, mat: THREE.Material, parent: THREE.Object3D, x: number, y: number, z: number) => {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      parent.add(mesh);
      return mesh;
    };

    const rock = new THREE.Group();
    add(new THREE.DodecahedronGeometry(1, 0), rockMat, rock, 0, 0.5, 0).scale.set(1, 0.75, 1.1);
    add(new THREE.DodecahedronGeometry(0.5, 0), rockMat, rock, 0.7, 0.25, 0.4);

    // Termite mound: tall clay spire, a classic Yankari savanna landmark.
    const mound = new THREE.Group();
    add(new THREE.ConeGeometry(0.9, 3.2, 7), clayMat, mound, 0, 1.6, 0);
    add(new THREE.ConeGeometry(0.45, 1.8, 6), clayMat, mound, 0.5, 0.9, 0.2);
    add(new THREE.ConeGeometry(0.35, 1.3, 6), clayMat, mound, -0.45, 0.65, -0.1);

    // Fallen baobab limb lying across part of the road.
    const log = new THREE.Group();
    add(new THREE.CylinderGeometry(0.55, 0.75, 6.8, 9), barkMat, log, 0, 0.6, 0).rotation.z = Math.PI / 2;
    add(new THREE.CylinderGeometry(0.2, 0.3, 1.6, 6), barkMat, log, 2.2, 1.2, 0.2).rotation.z = -0.5;
    add(new THREE.CylinderGeometry(0.15, 0.25, 1.2, 6), barkMat, log, -1.5, 1.1, -0.2).rotation.z = 0.6;

    const specs: [() => Promise<string>, number][] = [
      [MODELS.elephant, 5.2],
      [MODELS.baboon, 1.1],
      [MODELS.antelope, 2.2],
      [MODELS.hippo, 3.8],
    ];
    const [elephant, baboon, antelope, hippo] = await Promise.all(
      specs.map(async ([url, length]) => {
        const { scene } = await loadModel(url);
        const holder = new THREE.Group();
        holder.add(scene);
        fitModel(holder, length);
        const wrap = new THREE.Group();
        wrap.add(holder);
        return wrap;
      }),
    );
    this.templates = { rock, mound, log, elephant, baboon, antelope, hippo };

    this.warnGeo = new THREE.RingGeometry(0.82, 1, 32);
    this.warnMat = new THREE.MeshBasicMaterial({ color: '#ff3b1f', transparent: true, opacity: 0.6, depthWrite: false });
  }

  private buildDecor(): void {
    const trunkMat = new THREE.MeshStandardMaterial({ color: '#4a3826', roughness: 1 });
    const leafMat = new THREE.MeshStandardMaterial({ color: '#4f5a2a', roughness: 1, flatShading: true });
    const baobabMat = new THREE.MeshStandardMaterial({ color: '#8a7766', roughness: 1, flatShading: true });
    const mesh = (geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      m.castShadow = true;
      return m;
    };
    const acacia = new THREE.Group();
    const canopy = mesh(new THREE.SphereGeometry(1, 12, 6), leafMat, 0, 3.25, 0);
    canopy.scale.set(2.4, 0.42, 2.0);
    acacia.add(mesh(new THREE.CylinderGeometry(0.12, 0.2, 2.6, 6), trunkMat, 0, 1.3, 0), canopy);
    const baobab = new THREE.Group();
    baobab.add(mesh(new THREE.CylinderGeometry(0.9, 1.4, 4.5, 9), baobabMat, 0, 2.25, 0));
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      const b = mesh(new THREE.CylinderGeometry(0.1, 0.3, 1.8, 5), baobabMat, Math.cos(a) * 0.7, 5, Math.sin(a) * 0.7);
      b.rotation.set(Math.sin(a) * 0.6, 0, -Math.cos(a) * 0.6);
      baobab.add(b);
    }
    for (let i = 0; i < 48; i++) {
      const kind = i % 6;
      const obj = kind === 0 ? baobab.clone() : kind === 1 ? this.templates.mound.clone() : acacia.clone();
      obj.scale.setScalar(kind === 0 ? 1.4 + Math.random() * 0.8 : 1.1 + Math.random() * 1.1);
      obj.rotation.y = Math.random() * Math.PI * 2;
      this.scene.add(obj);
      this.decor.push(obj);
    }
    // Grazing wildlife well off the road, for life.
    for (let i = 0; i < 6; i++) {
      const obj = (i % 2 ? this.templates.antelope : this.templates.elephant).clone();
      obj.rotation.y = Math.random() * Math.PI * 2;
      this.scene.add(obj);
      this.decor.push(obj);
    }
  }

  private layoutDecor(): void {
    this.decor.forEach((d, i) => {
      const side = i % 2 ? 1 : -1;
      d.position.set(side * (14 + Math.random() * 60), 0, 20 - Math.random() * 360);
    });
  }

  private async buildJeep(): Promise<void> {
    const { style, user } = this.ctx;
    const jeep = new THREE.Group();
    this.jeep = jeep;
    const body = new THREE.MeshStandardMaterial({ color: '#b08d57', roughness: 0.7, metalness: 0.2 });
    const dark = new THREE.MeshStandardMaterial({ color: '#1e1e1e', roughness: 0.8 });
    const metal = new THREE.MeshStandardMaterial({ color: '#8d9299', metalness: 0.8, roughness: 0.35 });
    const accent = new THREE.MeshStandardMaterial({ color: style.accentColor, emissive: style.accentColor, emissiveIntensity: 0.4, roughness: 0.5 });
    const lamp = new THREE.MeshStandardMaterial({ color: '#fff3d0', emissive: '#fff3d0', emissiveIntensity: 3 });
    const add = (geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number, parent: THREE.Object3D = jeep) => {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      parent.add(mesh);
      return mesh;
    };

    add(new THREE.BoxGeometry(2.0, 0.55, 3.9), body, 0, 0.85, 0);
    add(new THREE.BoxGeometry(1.9, 0.35, 1.3), body, 0, 1.25, -1.25);
    add(new THREE.BoxGeometry(1.6, 0.45, 0.08), dark, 0, 1.0, -1.97);
    for (const side of [-1, 1]) {
      add(new THREE.CylinderGeometry(0.13, 0.13, 0.06, 14), lamp, side * 0.65, 1.15, -1.99).rotation.x = Math.PI / 2;
      add(new THREE.BoxGeometry(0.02, 0.1, 3.6), accent, side * 1.005, 1.02, 0);
    }
    add(new THREE.BoxGeometry(2.1, 0.18, 0.2), dark, 0, 0.62, -2.0);
    add(new THREE.BoxGeometry(2.1, 0.18, 0.2), dark, 0, 0.62, 2.0);
    this.brakeMat = new THREE.MeshStandardMaterial({ color: '#400', emissive: '#ff1a1a', emissiveIntensity: 0.6 });
    for (const side of [-1, 1]) add(new THREE.BoxGeometry(0.28, 0.14, 0.04), this.brakeMat, side * 0.78, 0.95, 1.97);
    for (const sx of [-0.45, 0.45]) add(new THREE.BoxGeometry(0.55, 0.5, 0.5), dark, sx, 1.25, 0.25);
    add(new THREE.BoxGeometry(1.7, 0.45, 0.5), dark, 0, 1.25, 1.35);
    for (const [x, z] of [[-1.0, -1.3], [1.0, -1.3], [-1.0, 1.3], [1.0, 1.3]]) {
      const wheel = new THREE.Group();
      wheel.position.set(x, 0.45, z);
      jeep.add(wheel);
      add(new THREE.CylinderGeometry(0.45, 0.45, 0.36, 18), dark, 0, 0, 0, wheel).rotation.z = Math.PI / 2;
      add(new THREE.BoxGeometry(0.38, 0.5, 0.1), metal, 0, 0, 0, wheel);
      add(new THREE.BoxGeometry(0.34, 0.1, 1.0), dark, x, 1.0, z); // fender
      this.wheels.push(wheel);
    }
    add(new THREE.TorusGeometry(0.92, 0.05, 8, 24, Math.PI), metal, 0, 1.12, 0.65).scale.y = 1.05;
    add(new THREE.BoxGeometry(1.9, 0.06, 0.06), metal, 0, 1.95, -0.55);
    for (const side of [-1, 1]) add(new THREE.BoxGeometry(0.06, 0.6, 0.06), metal, side * 0.93, 1.65, -0.55);
    const glass = new THREE.Mesh(
      new THREE.PlaneGeometry(1.8, 0.55),
      new THREE.MeshStandardMaterial({ color: '#9fc6d6', transparent: true, opacity: 0.18, roughness: 0.05, metalness: 0.5, side: THREE.DoubleSide }),
    );
    glass.position.set(0, 1.65, -0.55);
    jeep.add(glass);
    add(new THREE.TorusGeometry(0.36, 0.13, 8, 18), dark, 0, 1.58, 2.08); // spare tyre, above the tailgate decal
    add(new THREE.TorusGeometry(0.17, 0.03, 6, 16), dark, -0.45, 1.72, -0.3).rotation.x = -1.0;

    // Username decal: both sides and the tailgate.
    const decalTex = canvasTexture(1024, 200, (g, w, h) => {
      const text = `@${user.username}`.toUpperCase();
      let size = 150;
      g.font = `${size}px 'Bebas Neue', Impact, sans-serif`;
      while (g.measureText(text).width > w * 0.9 && size > 40) {
        size -= 6;
        g.font = `${size}px 'Bebas Neue', Impact, sans-serif`;
      }
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.lineJoin = 'round';
      g.lineWidth = 12;
      g.strokeStyle = 'rgba(25,18,10,0.9)';
      g.strokeText(text, w / 2, h / 2 + 8);
      g.fillStyle = style.accentColor;
      g.fillText(text, w / 2, h / 2 + 8);
    });
    const decalMat = new THREE.MeshStandardMaterial({ map: decalTex, transparent: true, roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -2 });
    for (const side of [-1, 1]) {
      const decal = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 0.5), decalMat);
      decal.position.set(side * 1.012, 0.82, 0.1);
      decal.rotation.y = side * (Math.PI / 2);
      jeep.add(decal);
    }
    const tail = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 0.35), decalMat);
    tail.position.set(0, 0.86, 1.955);
    jeep.add(tail);

    [this.driver, this.passenger] = await Promise.all([Player.create(style), Player.create(CREW_STYLES[1])]);
    this.driver.sit();
    this.driver.root.position.set(-0.45, 0.58, 0.25);
    this.driver.root.rotation.y = Math.PI;
    this.passenger.sit();
    this.passenger.root.position.set(0.45, 0.58, 0.25);
    this.passenger.root.rotation.y = Math.PI;
    jeep.add(this.driver.root, this.passenger.root);
    this.scene.add(jeep);
  }

  private buildGate(): void {
    const wood = new THREE.MeshStandardMaterial({ color: '#5a3d24', roughness: 0.9 });
    const gate = new THREE.Group();
    gate.position.z = -TRACK_LENGTH;
    for (const side of [-1, 1]) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.4, 7, 10), wood);
      post.position.set(side * 8, 3.5, 0);
      post.castShadow = true;
      gate.add(post);
    }
    const sign = canvasTexture(1024, 200, (g, w, h) => {
      g.fillStyle = '#4a3220';
      g.fillRect(0, 0, w, h);
      g.strokeStyle = '#2e1f13';
      g.lineWidth = 10;
      g.strokeRect(5, 5, w - 10, h - 10);
      g.fillStyle = '#f2dfb8';
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.font = "92px 'Bebas Neue', Impact, sans-serif";
      g.fillText('YANKARI GAME RESERVE', w / 2, h * 0.42);
      g.font = "40px 'Bebas Neue', Impact, sans-serif";
      g.fillText('MAIN GATE · BAUCHI STATE', w / 2, h * 0.8);
    });
    const board = new THREE.Mesh(new THREE.BoxGeometry(17, 2, 0.3), [wood, wood, wood, wood, new THREE.MeshStandardMaterial({ map: sign }), wood]);
    board.position.y = 6.2;
    board.castShadow = true;
    gate.add(board);
    this.scene.add(gate);
  }

  private buildParticles(): void {
    this.dust = new ParticleField({
      count: 120,
      size: 1.2,
      color: '#d9b98c',
      opacity: 0.2,
      life: [0.6, 1.3],
      grow: 2,
      drag: 1.2,
      spawn: (p, v) => {
        const jp = this.jeep.position;
        p.set(jp.x + (Math.random() < 0.5 ? -1 : 1) * 0.95, 0.25, jp.z + 1.4);
        v.set((Math.random() - 0.5) * 2, 0.6 + Math.random(), -this.speed * 0.6 + 3 + Math.random() * 3);
      },
    });
    this.spray = new ParticleField({
      count: 160,
      size: 0.35,
      color: '#e8fbff',
      opacity: 0.8,
      additive: true,
      emitting: false,
      life: [0.5, 1],
      gravity: 9,
      spawn: (p, v) => {
        const jp = this.jeep.position;
        p.set(jp.x + (Math.random() - 0.5) * 2.4, 0.3, jp.z - 1.5 + Math.random() * 3);
        v.set((Math.random() - 0.5) * 6, 2 + Math.random() * 3, -this.speed * 0.7);
      },
    });
    this.motes = new ParticleField({
      count: 90,
      size: 0.12,
      color: '#fff1d6',
      additive: true,
      opacity: 0.8,
      life: [1.5, 2.5],
      spawn: (p) => {
        const jp = this.jeep.position;
        p.set(jp.x + (Math.random() - 0.5) * 30, 0.3 + Math.random() * 4, jp.z - 15 - Math.random() * 45);
      },
    });
    this.debris = new ParticleField({
      count: 160,
      size: 0.28,
      color: '#8a6a45',
      opacity: 0.95,
      emitting: false,
      life: [0.6, 1.1],
      gravity: 14,
      spawn: (p, v) => {
        const jp = this.jeep.position;
        p.set(jp.x + (Math.random() - 0.5) * 2, 0.4, jp.z + 2);
        v.set((Math.random() - 0.5) * 8, 3 + Math.random() * 5, 14 + Math.random() * 14);
      },
    });
    this.scene.add(this.dust.points, this.spray.points, this.motes.points, this.debris.points);
  }

  private buildHud(): void {
    const hud = this.ctx.ui.hud();
    const hull = el('div', 'hull', hud);
    el('span', '', hull, 'HULL');
    const pips = [el('i', '', hull), el('i', '', hull), el('i', '', hull)];
    const tries = el('span', 'tries', hull);
    const meter = el('div', 'boost', hud);
    el('span', '', meter, 'BOOST');
    const boostFill = el('i', '', el('div', 'gauge', meter));
    const kick = el('div', 'kick', hud, 'DEBRIS READY');
    const rear = el('div', 'rear', hud);
    el('span', '', rear, 'REAR CAM');
    const threat = el('div', 'threat', hud, 'RAPTOR');
    const track = el('div', 'track', hud);
    const fill = el('div', 'fill', track);
    el('div', 'gate', track, 'GATE');
    el('div', 'river', track, 'GAJI');
    const me = el('div', 'me', track);
    this.hud = { pips, fill, me, threat, rear, tries, boostFill, kick };
  }
}
