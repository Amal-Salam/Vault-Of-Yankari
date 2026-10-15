import * as THREE from 'three';
import gsap from 'gsap';
import type { GameContext, GameScene } from '../core/types';
import { Player, maskBadge } from '../characters/Player';
import { GUARD_STYLE } from '../user/styleFromUser';
import { canvasTexture } from '../core/Assets';
import { disposeScene } from '../core/dispose';
import { el, type RadioLine } from '../ui/UI';

const TAU = Math.PI * 2;
const VIEW_RANGE = 8;
const VIEW_HALF = 0.56; // ~32° half-angle
const SUSPICION_TIME = 0.45; // seconds in view before you're spotted
const PLAYER_SPEED = 4.2;
const PLAYER_RADIUS = 0.35;
const LIFT_RANGE = 1.6; // how close you must be to lift a card
const BEHIND_ANGLE = 1.9; // must be at least this far (rad) from a guard's facing to count as "behind"
const SPAWN = new THREE.Vector2(0, 8.2);
const CONSOLE_SPOT = new THREE.Vector2(0, -4.6);
const CONSOLE_RADIUS = 1.0;
const CARDS_NEEDED = 3;
const BOUNDS = { minX: -10.6, maxX: 10.6, minZ: -8.3, maxZ: 8.8 };

const RED = new THREE.Color('#ff2a2a');
const AMBER = new THREE.Color('#ffb020');
const GREEN = new THREE.Color('#39ff88');

interface Box {
  x: number;
  z: number;
  hw: number;
  hd: number;
  occludes: boolean;
}

interface Waypoint {
  x: number;
  z: number;
  wait: number;
  look: number;
}

interface Guard {
  model: Player;
  coneMat: THREE.MeshBasicMaterial;
  card: THREE.Mesh;
  hasCard: boolean;
  route: Waypoint[];
  idx: number;
  wait: number;
  speed: number;
  facing: number;
  suspicion: number;
}

function angleDiff(a: number, b: number): number {
  return ((((a - b + Math.PI) % TAU) + TAU) % TAU) - Math.PI;
}

/** Slab test: does the segment (x0,z0)→(x1,z1) pass through the box? */
function segmentHitsBox(x0: number, z0: number, x1: number, z1: number, b: Box): boolean {
  let tmin = 0;
  let tmax = 1;
  const axes: [number, number, number, number][] = [
    [x0, x1 - x0, b.x - b.hw, b.x + b.hw],
    [z0, z1 - z0, b.z - b.hd, b.z + b.hd],
  ];
  for (const [p, d, min, max] of axes) {
    if (Math.abs(d) < 1e-6) {
      if (p < min || p > max) return false;
      continue;
    }
    let t1 = (min - p) / d;
    let t2 = (max - p) / d;
    if (t1 > t2) [t1, t2] = [t2, t1];
    tmin = Math.max(tmin, t1);
    tmax = Math.min(tmax, t2);
    if (tmin > tmax) return false;
  }
  return true;
}

/** Keycard heist: lift a card from each of 3 patrolling guards without being seen, then swipe at the door. */
export class Vault implements GameScene {
  readonly scene = new THREE.Scene();
  private ctx!: GameContext;
  private player!: Player;
  private door!: THREE.Group;
  private padMat!: THREE.MeshBasicMaterial;
  private readonly lamps: THREE.MeshStandardMaterial[] = [];
  private readonly boxes: Box[] = [];
  private readonly guards: Guard[] = [];
  private readonly taken: Guard[] = []; // cards in your pocket, most recent last
  private cardIcons: HTMLElement[] = [];
  private cardLabel!: HTMLElement;
  private state: 'play' | 'opening' = 'play';
  private spotCooldown = 0;
  private hintText = '';
  private t = 0;
  private tl: gsap.core.Timeline | null = null;
  private readonly said = new Set<string>();
  private briefing = true;
  private keys = new Map<string, HTMLElement>();
  private readonly camLook = new THREE.Vector3(0, 2.4, -8);
  private readonly camGoal = new THREE.Vector3();
  private readonly lookGoal = new THREE.Vector3();

  async enter(ctx: GameContext): Promise<void> {
    this.ctx = ctx;
    this.scene.background = new THREE.Color('#030507');
    this.scene.fog = new THREE.Fog('#030507', 20, 42);
    ctx.camera.fov = 40;
    ctx.camera.updateProjectionMatrix();
    ctx.camera.position.set(0, 7, -1);
    ctx.camera.lookAt(this.camLook);
    ctx.bloom.strength = 0.8;
    ctx.bloom.threshold = 0.7;
    this.scene.environment = ctx.envMap;
    this.scene.environmentIntensity = 0.35;
    ctx.grade.set({ tint: '#d8ecff', lift: '#020610', saturation: 0.85, contrast: 1.12, vignette: 0.5 });

    this.buildRoom();
    this.buildDoor();
    this.buildConsole();
    this.buildCover();
    await this.buildGuards();
    this.player = await Player.create(ctx.style);
    this.player.root.position.set(SPAWN.x, 0, SPAWN.y);
    this.player.root.rotation.y = Math.PI;
    this.scene.add(this.player.root);
    this.buildHud();

    ctx.ui.briefing(
      'THE HEIST',
      'Steal a keycard from each of the 3 guards without being seen, then swipe all three at the vault door console.',
      [
        { keys: ['W', 'A', 'S', 'D'], label: 'Move (or the arrow keys)' },
        { keys: [], label: 'Yellow cones are what guards can see. Crates block their view.' },
        { keys: ['SPACE'], label: 'Lift a glowing keycard: get right BEHIND a guard first' },
        { keys: ['SPACE'], label: 'Swipe the 3 cards at the console in front of the door' },
        { keys: [], label: 'Seen = you lose your last card. Hide, then try again.' },
      ],
      'Press [SPACE] to begin',
    );
    this.keys = ctx.ui.legend('CONTROLS', [
      { keys: ['W', 'A', 'S', 'D'], label: 'move', id: 'move' },
      { keys: ['SPACE'], label: 'lift card (from behind)', id: 'lift' },
      { keys: ['SPACE'], label: 'swipe cards at console', id: 'swipe' },
      { keys: ['M'], label: 'mute' },
    ]);
    ctx.audio.startLoop('tension');
  }

  update(dt: number): void {
    if (this.briefing) {
      if (this.ctx.input.pressed('action') || this.ctx.input.pressed('skip')) this.startHeist();
      this.updateCamera(dt);
      return;
    }
    this.t += dt;
    this.spotCooldown = Math.max(0, this.spotCooldown - dt);
    if (this.state === 'play') {
      this.movePlayer(dt);
      this.updateGuards(dt);
      this.updateObjective();
    } else {
      this.player.update(dt, 0);
      for (const g of this.guards) g.model.update(dt, 0);
    }
    for (const g of this.guards) {
      g.card.visible = g.hasCard;
      (g.card.material as THREE.MeshStandardMaterial).emissiveIntensity = 1.5 + Math.sin(this.t * 6) * 0.6;
    }
    this.updateCamera(dt);
    this.padMat.opacity = 0.45 + Math.sin(this.t * 4) * 0.25;
  }

  private startHeist(): void {
    this.briefing = false;
    this.ctx.ui.closeBriefing();
    this.ctx.ui.caption('The vault · 40 m beneath Wikki Warm Spring', 3.5);
    this.ctx.ui.routeMap(1);
    window.setTimeout(() => this.say('brief', { who: 'Agent Harmattan-2', lang: 'Pidgin', text: 'Na three card we need. Make you no wake dem.', en: 'We need three keycards. Don’t alert them.' }), 1500);
  }

  exit(): void {
    this.tl?.kill();
    gsap.killTweensOf(this.door.position);
    disposeScene(this.scene);
  }

  // ---------------------------------------------------------------- gameplay

  private movePlayer(dt: number): void {
    const { x, y } = this.ctx.input.axis();
    const pos = this.player.root.position;
    const moving = Math.hypot(x, y);
    if (moving > 0) {
      const vx = x * PLAYER_SPEED;
      const vz = -y * PLAYER_SPEED;
      pos.x += vx * dt;
      pos.z += vz * dt;
      this.player.root.rotation.y += angleDiff(Math.atan2(vx, vz), this.player.root.rotation.y) * Math.min(1, dt * 12);
    }
    for (const b of this.boxes) {
      const cx = THREE.MathUtils.clamp(pos.x, b.x - b.hw, b.x + b.hw);
      const cz = THREE.MathUtils.clamp(pos.z, b.z - b.hd, b.z + b.hd);
      const dx = pos.x - cx;
      const dz = pos.z - cz;
      const d = Math.hypot(dx, dz);
      if (d < PLAYER_RADIUS && d > 1e-5) {
        pos.x = cx + (dx / d) * PLAYER_RADIUS;
        pos.z = cz + (dz / d) * PLAYER_RADIUS;
      }
    }
    pos.x = THREE.MathUtils.clamp(pos.x, BOUNDS.minX, BOUNDS.maxX);
    pos.z = THREE.MathUtils.clamp(pos.z, BOUNDS.minZ, BOUNDS.maxZ);
    this.player.update(dt, moving);
  }

  private updateGuards(dt: number): void {
    const p = this.player.root.position;
    for (const g of this.guards) {
      const pos = g.model.root.position;
      const wp = g.route[g.idx];
      let targetFacing = g.facing;
      let moving = 0;
      if (g.wait > 0) {
        g.wait -= dt;
        targetFacing = wp.look + Math.sin(this.t * 1.6) * 0.35;
        if (g.wait <= 0) g.idx = (g.idx + 1) % g.route.length;
      } else {
        const dx = wp.x - pos.x;
        const dz = wp.z - pos.z;
        const d = Math.hypot(dx, dz);
        if (d < 0.05) {
          g.wait = wp.wait;
        } else {
          const step = Math.min(d, g.speed * dt);
          pos.x += (dx / d) * step;
          pos.z += (dz / d) * step;
          targetFacing = Math.atan2(dx, dz);
          moving = 0.8;
        }
      }
      g.facing += angleDiff(targetFacing, g.facing) * Math.min(1, dt * 5);
      g.model.root.rotation.y = g.facing;
      g.model.update(dt, moving);

      const seen = this.spotCooldown <= 0 && this.canSee(g, p.x, p.z);
      const before = g.suspicion;
      g.suspicion = THREE.MathUtils.clamp(g.suspicion + (seen ? dt / SUSPICION_TIME : -dt * 0.8), 0, 1);
      if (before < 0.35 && g.suspicion >= 0.35) this.ctx.audio.play('beep');
      g.coneMat.color.setRGB(1, 0.82 * (1 - g.suspicion), 0.25 * (1 - g.suspicion));
      g.coneMat.opacity = 0.16 + g.suspicion * 0.25;
      if (g.suspicion >= 1) this.spotted();
    }
  }

  private canSee(g: Guard, px: number, pz: number): boolean {
    const gp = g.model.root.position;
    const dx = px - gp.x;
    const dz = pz - gp.z;
    if (Math.hypot(dx, dz) > VIEW_RANGE) return false;
    if (Math.abs(angleDiff(Math.atan2(dx, dz), g.facing)) > VIEW_HALF) return false;
    for (const b of this.boxes) {
      if (b.occludes && segmentHitsBox(gp.x, gp.z, px, pz, b)) return false;
    }
    return true;
  }

  /** The guard you could lift a card from right now, plus whether you're properly behind them. */
  private nearestMark(): { guard: Guard; behind: boolean } | null {
    const p = this.player.root.position;
    let best: { guard: Guard; behind: boolean } | null = null;
    let bestD = LIFT_RANGE;
    for (const g of this.guards) {
      if (!g.hasCard) continue;
      const gp = g.model.root.position;
      const d = Math.hypot(p.x - gp.x, p.z - gp.z);
      if (d >= bestD) continue;
      bestD = d;
      const behind = Math.abs(angleDiff(Math.atan2(p.x - gp.x, p.z - gp.z), g.facing)) > BEHIND_ANGLE;
      best = { guard: g, behind };
    }
    return best;
  }

  private updateObjective(): void {
    const { input, audio, ui } = this.ctx;
    const p = this.player.root.position;
    const cards = this.taken.length;
    const atConsole = Math.hypot(p.x - CONSOLE_SPOT.x, p.z - CONSOLE_SPOT.y) < CONSOLE_RADIUS;
    const mark = this.nearestMark();
    const axis = input.axis();
    this.keys.get('move')?.classList.toggle('active', axis.x !== 0 || axis.y !== 0);
    this.keys.get('lift')?.classList.toggle('active', !!mark?.behind);
    this.keys.get('swipe')?.classList.toggle('active', atConsole && cards >= CARDS_NEEDED);

    if (mark) {
      this.setHint(mark.behind ? 'Press [SPACE] to lift the keycard' : 'Get behind them… they must not be facing you');
      if (mark.behind && input.pressed('action')) {
        mark.guard.hasCard = false;
        this.taken.push(mark.guard);
        this.player.gesture('Interact');
        audio.play('click');
        audio.play('success', 0.5);
        ui.flash(this.ctx.style.accentColor, 0.18, 0.4);
        this.refreshCards();
        if (this.taken.length === 1) this.say('first', { who: 'Agent Ibis-5', lang: 'Igbo', text: 'Ọ dị mma! Abụọ fọdụrụ.', en: 'Good! Two left.' });
        if (this.taken.length === CARDS_NEEDED) this.say('all', { who: 'Agent Harmattan-2', lang: 'Hausa', text: 'Madalla! Zuwa ƙofa.', en: 'Excellent! To the door.' });
      }
    } else if (atConsole) {
      if (cards >= CARDS_NEEDED) {
        this.setHint('Press [SPACE] to swipe the keycards');
        if (input.pressed('action')) this.openVault();
      } else {
        this.setHint(`The door needs ${CARDS_NEEDED} keycards · you have ${cards}`);
      }
    } else if (cards >= CARDS_NEEDED) {
      this.setHint('All keycards · swipe them at the door console');
    } else {
      this.setHint('Sneak up behind a guard · lift their glowing keycard');
    }
  }

  private spotted(): void {
    const { audio, ui, cinema } = this.ctx;
    audio.play('spotted');
    ui.flash('#ff2020', 0.45, 0.6);
    cinema.shake(0.15, 0.35);
    const lost = this.taken.pop();
    if (lost) {
      lost.hasCard = true;
      this.refreshCards();
      ui.caption('Spotted · a keycard was taken back · get out of the light', 2.8);
    } else {
      ui.caption('Spotted · wait for their backs to turn, then move', 3);
      this.player.root.position.set(SPAWN.x, 0, SPAWN.y);
    }
    this.say('spotted', { who: 'Agent Ibis-5', lang: 'Yoruba', text: 'Wọ́n ti rí ẹ! Sá pamọ́!', en: 'They’ve seen you! Hide!' });
    for (const g of this.guards) g.suspicion = 0;
    this.spotCooldown = 2;
  }

  private openVault(): void {
    const { ui, audio, cinema, bloom } = this.ctx;
    this.state = 'opening';
    this.setHint('');
    audio.stopLoop('tension');
    for (const g of this.guards) g.coneMat.opacity = 0;
    const tl = gsap.timeline();
    this.tl = tl;
    this.lamps.forEach((lamp, i) => {
      tl.call(() => {
        lamp.emissive.copy(GREEN);
        audio.play('lock');
      }, [], 0.2 + i * 0.35);
    });
    tl.call(() => {
      audio.play('success');
      audio.play('boom');
      cinema.shake(0.12, 1.4);
    }, [], 1.3)
      .to(this.door.position, { x: 4.9, duration: 2.6, ease: 'power2.inOut' }, 1.4)
      .to(bloom, { strength: 1.1, duration: 2 }, 1.6)
      .call(() => ui.caption('Containment wing open', 2), [], 2.2)
      .call(() => this.ctx.goTo('twist'), [], 4.4);
  }

  private updateCamera(dt: number): void {
    const cam = this.ctx.camera;
    const p = this.player.root.position;
    if (this.state === 'opening') {
      this.camGoal.set(0, 3.4, -1.2);
      this.lookGoal.set(0, 2.5, -9);
    } else {
      this.camGoal.set(p.x * 0.85, 15, p.z + 10.5);
      this.lookGoal.set(p.x * 0.9, 0.8, p.z - 1.5);
    }
    const f = 1 - Math.exp(-dt * 3.5);
    cam.position.lerp(this.camGoal, f);
    this.camLook.lerp(this.lookGoal, f);
    cam.lookAt(this.camLook);
  }

  private setHint(text: string): void {
    if (text === this.hintText) return;
    this.hintText = text;
    this.ctx.ui.hint(text || null);
  }

  private say(key: string, line: RadioLine): void {
    if (this.said.has(key) || this.state !== 'play') return;
    this.said.add(key);
    this.ctx.ui.radio(line);
  }

  private refreshCards(): void {
    const n = this.taken.length;
    this.cardIcons.forEach((icon, i) => icon.classList.toggle('have', i < n));
    this.cardLabel.textContent = `KEYCARDS ${n}/${CARDS_NEEDED}`;
    this.lamps.forEach((lamp, i) => lamp.emissive.copy(i < n ? AMBER : RED));
  }

  // ---------------------------------------------------------------- build

  private buildRoom(): void {
    const scene = this.scene;
    const floorTex = canvasTexture(256, 256, (g, w, h) => {
      g.fillStyle = '#121519';
      g.fillRect(0, 0, w, h);
      g.fillStyle = '#191d23';
      g.fillRect(10, 10, w - 20, h - 20);
      g.strokeStyle = '#262c35';
      g.lineWidth = 3;
      g.strokeRect(10, 10, w - 20, h - 20);
      g.fillStyle = '#2b313a';
      for (const [x, y] of [[22, 22], [w - 22, 22], [22, h - 22], [w - 22, h - 22]]) {
        g.beginPath();
        g.arc(x, y, 5, 0, TAU);
        g.fill();
      }
    }, { repeat: [11, 9] });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(22, 18), new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.55, metalness: 0.5 }));
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const wallMat = new THREE.MeshStandardMaterial({ color: '#171a20', roughness: 0.9 });
    const stripMat = new THREE.MeshStandardMaterial({ color: '#000000', emissive: '#16c6d8', emissiveIntensity: 1.4 });
    const walls: [number, number, number, number, number, number][] = [
      [22.6, 5, 0.6, 0, 2.5, -9.3],
      [22.6, 0.8, 0.6, 0, 0.4, 9.3], // low south wall keeps the camera's view clear
      [0.6, 5, 18.6, -11.3, 2.5, 0],
      [0.6, 5, 18.6, 11.3, 2.5, 0],
    ];
    for (const [w, h, d, x, y, z] of walls) {
      const wall = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallMat);
      wall.position.set(x, y, z);
      wall.receiveShadow = true;
      scene.add(wall);
    }
    for (const [w, d, x, z] of [[22, 0.08, 0, -8.98], [0.08, 18, -10.98, 0], [0.08, 18, 10.98, 0]]) {
      const strip = new THREE.Mesh(new THREE.BoxGeometry(w, 0.08, d), stripMat);
      strip.position.set(x, 3.8, z);
      scene.add(strip);
    }

    // Vault stencil on the back wall
    const stencil = canvasTexture(1024, 128, (g, w, h) => {
      g.clearRect(0, 0, w, h);
      g.fillStyle = 'rgba(200,210,220,0.55)';
      g.font = "86px 'Bebas Neue', Impact, sans-serif";
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText('YANKARI BIO-VAULT · SUBLEVEL 2', w / 2, h / 2);
    });
    const label = new THREE.Mesh(new THREE.PlaneGeometry(9, 1.1), new THREE.MeshBasicMaterial({ map: stencil, transparent: true }));
    label.position.set(0, 4.45, -8.98);
    scene.add(label);

    const hazard = canvasTexture(256, 64, (g, w, h) => {
      g.fillStyle = '#111';
      g.fillRect(0, 0, w, h);
      g.fillStyle = '#c9a227';
      for (let x = -h; x < w + h; x += 32) {
        g.beginPath();
        g.moveTo(x, h);
        g.lineTo(x + 16, h);
        g.lineTo(x + 16 + h, 0);
        g.lineTo(x + h, 0);
        g.fill();
      }
    });
    const hazardMesh = new THREE.Mesh(new THREE.PlaneGeometry(6, 0.8), new THREE.MeshStandardMaterial({ map: hazard, roughness: 0.8 }));
    hazardMesh.rotation.x = -Math.PI / 2;
    hazardMesh.position.set(0, 0.01, -7.9);
    hazardMesh.receiveShadow = true;
    scene.add(hazardMesh);

    scene.add(new THREE.HemisphereLight('#41506b', '#0a0a0c', 0.6));
    const key = new THREE.SpotLight('#cfe6ff', 260, 32, 0.8, 0.6, 1.6);
    key.position.set(0, 12, 3);
    key.target.position.set(0, 0, -2);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.bias = -0.0005;
    scene.add(key, key.target);
    const doorLight = new THREE.SpotLight('#5fe3ff', 90, 16, 0.5, 0.5, 1.5);
    doorLight.position.set(0, 6, -3.5);
    doorLight.target.position.set(0, 2.6, -8.8);
    scene.add(doorLight, doorLight.target);
    for (const x of [-10, 10]) {
      const red = new THREE.PointLight('#ff2a2a', 8, 9, 2);
      red.position.set(x, 3.5, -8);
      scene.add(red);
    }
  }

  private buildDoor(): void {
    const metal = new THREE.MeshStandardMaterial({ color: '#59606b', metalness: 0.85, roughness: 0.35 });
    const dark = new THREE.MeshStandardMaterial({ color: '#23272e', metalness: 0.7, roughness: 0.5 });
    const center = new THREE.Vector3(0, 2.6, -8.95);

    const frame = new THREE.Mesh(new THREE.TorusGeometry(2.45, 0.25, 12, 48), metal);
    frame.position.copy(center).setZ(-8.85);
    this.scene.add(frame);

    // Three lock lamps on the frame: red → amber (card held) → green (swiped).
    for (let i = 0; i < CARDS_NEEDED; i++) {
      const mat = new THREE.MeshStandardMaterial({ color: '#111', emissive: RED, emissiveIntensity: 2.2 });
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 12), mat);
      const a = Math.PI / 2 + (i - 1) * 0.42;
      lamp.position.set(Math.cos(a) * 2.45, center.y + Math.sin(a) * 2.45, -8.55);
      this.scene.add(lamp);
      this.lamps.push(mat);
    }

    const glow = new THREE.Mesh(new THREE.CircleGeometry(2.3, 48), new THREE.MeshBasicMaterial({ color: '#2f9c6c' }));
    glow.position.copy(center).setZ(-8.98);
    this.scene.add(glow);

    const door = new THREE.Group();
    door.position.copy(center);
    this.door = door;
    this.scene.add(door);
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(2.3, 2.3, 0.4, 48), metal);
    disc.rotation.x = Math.PI / 2;
    disc.castShadow = disc.receiveShadow = true;
    door.add(disc);
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * TAU;
      const bolt = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.12, 8), dark);
      bolt.rotation.x = Math.PI / 2;
      bolt.position.set(Math.cos(a) * 2.18, Math.sin(a) * 2.18, 0.22);
      door.add(bolt);
    }
    for (const r of [1.7, 1.15]) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.05, 8, 48), dark);
      ring.position.z = 0.21;
      door.add(ring);
    }
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.2, 24), dark);
    hub.rotation.x = Math.PI / 2;
    hub.position.z = 0.3;
    door.add(hub);
    for (let i = 0; i < 3; i++) {
      const spoke = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.12, 0.1), metal);
      spoke.rotation.z = (i / 3) * Math.PI;
      spoke.position.z = 0.36;
      door.add(spoke);
    }
  }

  private buildConsole(): void {
    const accent = this.ctx.style.accentColor;
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 1.0, 0.7),
      new THREE.MeshStandardMaterial({ color: '#22262d', metalness: 0.7, roughness: 0.45 }),
    );
    body.position.set(0, 0.5, -5.6);
    body.castShadow = body.receiveShadow = true;
    this.scene.add(body);
    const screenTex = canvasTexture(256, 96, (g, w, h) => {
      g.fillStyle = '#05080b';
      g.fillRect(0, 0, w, h);
      g.fillStyle = accent;
      g.font = "40px 'Bebas Neue', Impact, sans-serif";
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText('SWIPE 3 KEYCARDS', w / 2, h / 2);
    });
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.45), new THREE.MeshBasicMaterial({ map: screenTex }));
    screen.position.set(0, 1.03, -5.5);
    screen.rotation.x = -Math.PI / 2 + 0.5;
    this.scene.add(screen);
    this.padMat = new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.6, depthWrite: false });
    const pad = new THREE.Mesh(new THREE.RingGeometry(0.72, 0.86, 40), this.padMat);
    pad.rotation.x = -Math.PI / 2;
    pad.position.set(CONSOLE_SPOT.x, 0.02, CONSOLE_SPOT.y);
    this.scene.add(pad);
    this.boxes.push({ x: 0, z: -5.6, hw: 0.7, hd: 0.35, occludes: false });
  }

  private buildCover(): void {
    const crateTex = canvasTexture(128, 128, (g, w, h) => {
      g.fillStyle = '#2f343c';
      g.fillRect(0, 0, w, h);
      g.strokeStyle = '#454c57';
      g.lineWidth = 8;
      g.strokeRect(4, 4, w - 8, h - 8);
      g.fillStyle = '#c9a227';
      g.fillRect(14, h / 2 - 6, w - 28, 12);
    });
    const crateMat = new THREE.MeshStandardMaterial({ map: crateTex, roughness: 0.7, metalness: 0.3 });
    const pillarMat = new THREE.MeshStandardMaterial({ color: '#1f232a', roughness: 0.8 });
    const crates: [number, number, number, number, number][] = [
      [-3.6, -5.6, 1.4, 1.4, 1.3],
      [3.6, -5.6, 1.4, 1.4, 1.3],
      [-7, 0.8, 2.2, 1.2, 1.1],
      [-2.8, 0.8, 1.8, 1.2, 1.1],
      [2.8, 0.8, 1.8, 1.2, 1.1],
      [7, 0.8, 2.2, 1.2, 1.1],
      [-3, 6, 1.4, 1.4, 1.3],
      [3.2, 6.4, 1.4, 1.4, 1.3],
    ];
    for (const [x, z, w, d, h] of crates) {
      const crate = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), crateMat);
      crate.position.set(x, h / 2, z);
      crate.castShadow = crate.receiveShadow = true;
      this.scene.add(crate);
      this.boxes.push({ x, z, hw: w / 2, hd: d / 2, occludes: true });
    }
    for (const [x, z] of [[-9.8, -7.6], [9.8, -7.6], [-9.8, 7.6], [9.8, 7.6]]) {
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(1, 5, 1), pillarMat);
      pillar.position.set(x, 2.5, z);
      pillar.castShadow = pillar.receiveShadow = true;
      this.scene.add(pillar);
      this.boxes.push({ x, z, hw: 0.5, hd: 0.5, occludes: true });
    }
  }

  private async buildGuards(): Promise<void> {
    const coneTex = canvasTexture(128, 128, (g, w, h) => {
      const grad = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
      grad.addColorStop(0, 'rgba(255,255,255,0.9)');
      grad.addColorStop(1, 'rgba(255,255,255,0.05)');
      g.fillStyle = grad;
      g.fillRect(0, 0, w, h);
    });
    const coneGeo = new THREE.CircleGeometry(VIEW_RANGE, 32, -Math.PI / 2 - VIEW_HALF, VIEW_HALF * 2);
    const cardGeo = new THREE.BoxGeometry(0.22, 0.14, 0.03);
    const routes: { route: Waypoint[]; speed: number; start: number }[] = [
      {
        // Middle lane: walks the width of the room.
        speed: 1.7,
        start: 0,
        route: [
          { x: -8.5, z: 3.4, wait: 1.0, look: Math.PI / 2 },
          { x: 8.5, z: 3.4, wait: 1.0, look: -Math.PI / 2 },
        ],
      },
      {
        // Door lane: pauses in the middle to check the console.
        speed: 1.9,
        start: 1,
        route: [
          { x: -9, z: -2.5, wait: 1.8, look: Math.PI / 2 },
          { x: 0, z: -2.5, wait: 1.5, look: Math.PI },
          { x: 9, z: -2.5, wait: 1.8, look: -Math.PI / 2 },
          { x: 0, z: -2.5, wait: 1.5, look: Math.PI },
        ],
      },
      {
        // East loop: circles the server racks in the north-east corner.
        speed: 1.5,
        start: 0,
        route: [
          { x: 9.6, z: -6.6, wait: 0.8, look: -Math.PI / 2 },
          { x: 6, z: -6.6, wait: 0.8, look: 0 },
          { x: 6, z: -4.2, wait: 0.8, look: Math.PI / 2 },
          { x: 9.6, z: -4.2, wait: 0.8, look: Math.PI },
        ],
      },
    ];
    const models = await Promise.all(routes.map(() => Player.create(GUARD_STYLE, 'guard')));
    routes.forEach(({ route, speed, start }, gi) => {
      const model = models[gi];
      model.root.position.set(route[start].x, 0, route[start].z);
      this.scene.add(model.root);

      const coneMat = new THREE.MeshBasicMaterial({
        map: coneTex,
        color: '#ffd23f',
        transparent: true,
        opacity: 0.16,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const cone = new THREE.Mesh(coneGeo, coneMat);
      cone.rotation.x = -Math.PI / 2;
      cone.position.y = 0.03;
      model.root.add(cone);

      const torch = new THREE.SpotLight('#ffe7b0', 40, VIEW_RANGE + 2, VIEW_HALF, 0.45, 1.4);
      torch.position.set(0, 1.6, 0.2);
      torch.target.position.set(0, 0, 6);
      model.root.add(torch, torch.target);

      // The keycard clipped to the back of the belt, glowing so it reads from above.
      const card = new THREE.Mesh(cardGeo, new THREE.MeshStandardMaterial({ color: '#111', emissive: AMBER, emissiveIntensity: 1.8 }));
      card.position.set(0.12, 1.0, -0.27);
      model.root.add(card);

      this.guards.push({ model, coneMat, card, hasCard: true, route, idx: (start + 1) % route.length, wait: 0, speed, facing: 0, suspicion: 0 });
    });
  }

  // ---------------------------------------------------------------- HUD

  private buildHud(): void {
    const { style, user } = this.ctx;
    const hud = this.ctx.ui.hud();

    const badge = el('div', 'badge', hud);
    badge.append(maskBadge(style, 108));
    const info = el('div', '', badge);
    el('div', 'label', info, 'CREW ID · YANKARI VAULT');
    el('div', 'code', info, style.codename);
    el('div', 'user', info, `@${user.username}${user.track ? ` · ${user.track}` : ''}`);

    const cards = el('div', 'cards', hud);
    const row = el('div', 'row', cards);
    this.cardIcons = [el('i', '', row), el('i', '', row), el('i', '', row)];
    this.cardLabel = el('div', 'label', cards, `KEYCARDS 0/${CARDS_NEEDED}`);
  }
}
