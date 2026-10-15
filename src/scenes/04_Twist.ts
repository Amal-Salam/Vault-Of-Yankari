import * as THREE from 'three';
import gsap from 'gsap';
import type { GameContext, GameScene } from '../core/types';
import { Player } from '../characters/Player';
import { Raptor } from '../characters/Raptor';
import { CREW_STYLES } from '../user/styleFromUser';
import { ParticleField, rng } from '../core/fx';
import { canvasTexture } from '../core/Assets';
import { disposeScene } from '../core/dispose';

const TAU = Math.PI * 2;
const TANK_RADIUS = 1.8;
const SHARD_COUNT = 220;

interface Shard {
  p: THREE.Vector3;
  v: THREE.Vector3;
  r: THREE.Euler;
  w: THREE.Vector3;
  s: number;
}

function crackTexture(seed: number, strands: number): THREE.CanvasTexture {
  const rand = rng(seed);
  return canvasTexture(512, 512, (g, w, h) => {
    g.clearRect(0, 0, w, h);
    g.strokeStyle = 'rgba(230,255,245,0.95)';
    g.lineCap = 'round';
    for (let i = 0; i < strands; i++) {
      let x = w / 2 + (rand() - 0.5) * 30;
      let y = h * 0.45 + (rand() - 0.5) * 30;
      let a = rand() * TAU;
      g.lineWidth = 1 + rand() * 2.5;
      g.beginPath();
      g.moveTo(x, y);
      const steps = 6 + Math.floor(rand() * 10);
      for (let s = 0; s < steps; s++) {
        a += (rand() - 0.5) * 0.9;
        x += Math.cos(a) * (14 + rand() * 26);
        y += Math.sin(a) * (14 + rand() * 26);
        g.lineTo(x, y);
      }
      g.stroke();
    }
  });
}

/** Alarm, cracking glass, the creature wakes, slow-motion shatter, "RUN." */
export class Twist implements GameScene {
  readonly scene = new THREE.Scene();
  private ctx!: GameContext;
  private tl: gsap.core.Timeline | null = null;
  private creature!: Raptor;
  private crew: Player[] = [];
  private glass!: THREE.Mesh;
  private crack!: THREE.Mesh;
  private crackMat!: THREE.MeshBasicMaterial;
  private crack2!: THREE.Texture;
  private fluid!: THREE.Mesh;
  private shards!: THREE.InstancedMesh;
  private readonly shardData: Shard[] = [];
  private shattered = false;
  private bubbles!: ParticleField;
  private splash!: ParticleField;
  private beacons: THREE.PointLight[] = [];
  private beaconAngle = 0;
  private readonly cam = { px: 3.2, py: 2.4, pz: 9.5, lx: 0, ly: 2.2, lz: 0 };
  private readonly dummy = new THREE.Object3D();
  private done = false;

  async enter(ctx: GameContext): Promise<void> {
    this.ctx = ctx;
    this.creature = await Raptor.create(3.3);
    this.crew = await Promise.all([ctx.style, ...CREW_STYLES].map((style) => Player.create(style)));
    this.scene.background = new THREE.Color('#020405');
    this.scene.fog = new THREE.Fog('#020405', 12, 30);
    ctx.camera.fov = 42;
    ctx.camera.updateProjectionMatrix();
    ctx.bloom.strength = 0.75;
    ctx.bloom.threshold = 0.7;
    this.scene.environment = ctx.envMap;
    this.scene.environmentIntensity = 0.12;
    ctx.grade.set({ tint: '#e6fff2', saturation: 0.95, contrast: 1.2, vignette: 0.55 });
    this.build();
    this.buildTimeline();
    this.applyCam();
    ctx.ui.showSkip(true);
  }

  update(dt: number): void {
    if (this.ctx.input.pressed('skip')) this.finish();
    this.creature.update(dt);
    for (const p of this.crew) p.update(dt, 0);
    this.bubbles.update(dt);
    this.splash.update(dt);
    this.beaconAngle += dt * 3;
    this.beacons.forEach((b, i) => {
      const a = this.beaconAngle + i * Math.PI;
      b.position.set(Math.cos(a) * 6, 5.5, Math.sin(a) * 6);
    });
    if (this.shattered) this.updateShards(dt);
    this.applyCam();
  }

  exit(): void {
    this.tl?.kill();
    disposeScene(this.scene);
    this.crack2.dispose();
  }

  private finish(): void {
    if (this.done) return;
    this.done = true;
    this.ctx.goTo('escape');
  }

  private applyCam(): void {
    const c = this.cam;
    this.ctx.camera.position.set(c.px, c.py, c.pz);
    this.ctx.camera.lookAt(c.lx, c.ly, c.lz);
  }

  private updateShards(dt: number): void {
    for (let i = 0; i < SHARD_COUNT; i++) {
      const s = this.shardData[i];
      s.v.y -= 9.8 * dt;
      s.p.addScaledVector(s.v, dt);
      if (s.p.y < 0.05) {
        s.p.y = 0.05;
        s.v.multiplyScalar(0.4);
        s.v.y = Math.abs(s.v.y) * 0.3;
        s.w.multiplyScalar(0.5);
      }
      s.r.x += s.w.x * dt;
      s.r.y += s.w.y * dt;
      s.r.z += s.w.z * dt;
      this.dummy.position.copy(s.p);
      this.dummy.rotation.copy(s.r);
      this.dummy.scale.setScalar(s.s);
      this.dummy.updateMatrix();
      this.shards.setMatrixAt(i, this.dummy.matrix);
    }
    this.shards.instanceMatrix.needsUpdate = true;
  }

  private build(): void {
    const scene = this.scene;

    // Chamber
    const floorTex = canvasTexture(256, 256, (g, w, h) => {
      g.fillStyle = '#0f1215';
      g.fillRect(0, 0, w, h);
      g.strokeStyle = '#1d232b';
      g.lineWidth = 3;
      for (let i = 0; i <= 4; i++) {
        g.beginPath();
        g.moveTo((i * w) / 4, 0);
        g.lineTo((i * w) / 4, h);
        g.moveTo(0, (i * h) / 4);
        g.lineTo(w, (i * h) / 4);
        g.stroke();
      }
    }, { repeat: [5, 5] });
    const floor = new THREE.Mesh(new THREE.CircleGeometry(11, 48), new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.4, metalness: 0.6 }));
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);
    const wall = new THREE.Mesh(
      new THREE.CylinderGeometry(11, 11, 8, 40, 1, true),
      new THREE.MeshStandardMaterial({ color: '#12161b', roughness: 0.85, side: THREE.BackSide }),
    );
    wall.position.y = 4;
    scene.add(wall);
    const stripMat = new THREE.MeshStandardMaterial({ color: '#000', emissive: '#18c8d8', emissiveIntensity: 1.5 });
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * TAU;
      const strip = new THREE.Mesh(new THREE.BoxGeometry(0.12, 3.5, 0.12), stripMat);
      strip.position.set(Math.cos(a) * 10.8, 3, Math.sin(a) * 10.8);
      scene.add(strip);
    }

    // Lights
    const hemi = new THREE.HemisphereLight('#2a3550', '#050505', 0.5);
    scene.add(hemi);
    const key = new THREE.SpotLight('#d8f3ff', 160, 20, 0.7, 0.6, 1.5);
    key.position.set(0, 9, 4);
    key.target.position.set(0, 1.5, 0);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    scene.add(key, key.target);
    const tankLight = new THREE.PointLight('#2bff9c', 9, 6, 2);
    tankLight.position.set(0, 0.6, 0);
    scene.add(tankLight);
    for (let i = 0; i < 2; i++) {
      const b = new THREE.PointLight('#ff1a1a', 0, 14, 1.6);
      scene.add(b);
      this.beacons.push(b);
    }

    // Tank
    const metal = new THREE.MeshStandardMaterial({ color: '#4b525c', metalness: 0.85, roughness: 0.35 });
    const base = new THREE.Mesh(new THREE.CylinderGeometry(2.15, 2.3, 0.5, 40), metal);
    base.position.y = 0.25;
    base.receiveShadow = true;
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(2.15, 2.15, 0.6, 40), metal);
    cap.position.y = 5.1;
    scene.add(base, cap);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * TAU;
      const cable = new THREE.Mesh(
        new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3([
            new THREE.Vector3(Math.cos(a) * 1.6, 5.4, Math.sin(a) * 1.6),
            new THREE.Vector3(Math.cos(a) * 3.5, 6.8, Math.sin(a) * 3.5),
            new THREE.Vector3(Math.cos(a) * 7, 8.2, Math.sin(a) * 7),
          ]),
          16,
          0.07,
          6,
        ),
        new THREE.MeshStandardMaterial({ color: '#15181c', roughness: 0.6 }),
      );
      scene.add(cable);
    }
    this.fluid = new THREE.Mesh(
      new THREE.CylinderGeometry(TANK_RADIUS - 0.05, TANK_RADIUS - 0.05, 4.3, 40, 1, true),
      new THREE.MeshStandardMaterial({
        color: '#0b3d2e',
        emissive: '#11c47f',
        emissiveIntensity: 0.45,
        transparent: true,
        opacity: 0.45,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    );
    this.fluid.position.y = 2.65;
    this.glass = new THREE.Mesh(
      new THREE.CylinderGeometry(TANK_RADIUS, TANK_RADIUS, 4.3, 40, 1, true),
      new THREE.MeshStandardMaterial({
        color: '#bffff0',
        transparent: true,
        opacity: 0.16,
        roughness: 0.05,
        metalness: 0.3,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    );
    this.glass.position.y = 2.65;
    // thetaStart = π puts u = 0.5 (the crack's centre) on the side facing the crew.
    this.crackMat = new THREE.MeshBasicMaterial({
      map: crackTexture(7, 14),
      transparent: true,
      opacity: 0,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.crack2 = crackTexture(11, 40);
    this.crack = new THREE.Mesh(new THREE.CylinderGeometry(TANK_RADIUS + 0.02, TANK_RADIUS + 0.02, 4.3, 40, 1, true, Math.PI, TAU), this.crackMat);
    this.crack.position.y = 2.65;
    scene.add(this.fluid, this.glass, this.crack);

    // Specimen inside the tank: dormant, barely breathing.
    this.creature.root.position.set(0, 0.5, -0.1);
    this.creature.root.rotation.x = 0.12;
    this.creature.eyes.emissiveIntensity = 0;
    this.creature.play('Idle', 0, 0.25);
    scene.add(this.creature.root);

    // Crew, backs to the camera at first
    const spots: [number, number][] = [
      [0, 4.2],
      [-1.6, 4.8],
      [1.7, 4.6],
    ];
    this.crew.forEach((p, i) => {
      p.root.position.set(spots[i][0], 0, spots[i][1]);
      p.root.rotation.y = Math.PI + spots[i][0] * 0.12;
      scene.add(p.root);
    });

    // Shards
    this.shards = new THREE.InstancedMesh(
      new THREE.TetrahedronGeometry(0.1),
      new THREE.MeshStandardMaterial({
        color: '#d9fff4',
        emissive: '#3cffb0',
        emissiveIntensity: 0.6,
        metalness: 0.3,
        roughness: 0.1,
        transparent: true,
        opacity: 0.85,
      }),
      SHARD_COUNT,
    );
    this.shards.visible = false;
    this.shards.frustumCulled = false;
    for (let i = 0; i < SHARD_COUNT; i++) {
      const a = (Math.random() - 0.5) * Math.PI * 1.5;
      const dir = new THREE.Vector3(Math.sin(a), 0, Math.cos(a));
      this.shardData.push({
        p: dir.clone().multiplyScalar(TANK_RADIUS).setY(0.6 + Math.random() * 4.2),
        v: dir.multiplyScalar(3 + Math.random() * 7).add(new THREE.Vector3(0, 1 + Math.random() * 3, 1.5)),
        r: new THREE.Euler(Math.random() * TAU, Math.random() * TAU, 0),
        w: new THREE.Vector3(Math.random() * 12, Math.random() * 12, Math.random() * 12),
        s: 0.6 + Math.random() * 1.8,
      });
    }
    scene.add(this.shards);

    this.bubbles = new ParticleField({
      count: 60,
      size: 0.12,
      color: '#b8ffe0',
      additive: true,
      opacity: 0.8,
      life: [1.5, 3],
      spawn: (p, v) => {
        const a = Math.random() * TAU;
        const r = Math.random() * (TANK_RADIUS - 0.2);
        p.set(Math.cos(a) * r, 0.6, Math.sin(a) * r);
        v.set(0, 1 + Math.random() * 1.2, 0);
      },
    });
    this.splash = new ParticleField({
      count: 220,
      size: 0.3,
      color: '#5dffb2',
      opacity: 0.6,
      additive: true,
      emitting: false,
      life: [0.8, 1.6],
      gravity: 7,
      spawn: (p, v) => {
        const a = (Math.random() - 0.5) * Math.PI * 1.6;
        p.set(Math.sin(a) * TANK_RADIUS, 0.6 + Math.random() * 3.8, Math.cos(a) * TANK_RADIUS);
        v.set(Math.sin(a) * (2 + Math.random() * 5), 1 + Math.random() * 3, Math.cos(a) * (2 + Math.random() * 5));
      },
    });
    scene.add(this.bubbles.points, this.splash.points);

    // Keep handles for the alarm colour change
    this.alarmTargets = { hemi, key, stripMat, tankLight };
  }

  private alarmTargets!: {
    hemi: THREE.HemisphereLight;
    key: THREE.SpotLight;
    stripMat: THREE.MeshStandardMaterial;
    tankLight: THREE.PointLight;
  };

  private buildTimeline(): void {
    const { ui, audio, cinema, bloom } = this.ctx;
    const c = this.cam;
    const red = new THREE.Color('#ff1a1a');
    const { hemi, key, stripMat } = this.alarmTargets;
    const tl = gsap.timeline({ onComplete: () => this.finish() });
    this.tl = tl;

    // 0.0 — the prize
    tl.call(() => ui.letterbox(true), [], 0)
      .call(() => ui.caption('Specimen 0-YK · containment level 5', 2.2), [], 0.3)
      .to(c, { px: 1.6, py: 2.0, pz: 7.4, duration: 2.4, ease: 'sine.inOut' }, 0);

    // 1.8 — alarm
    tl.call(() => {
      audio.startLoop('alarm');
      audio.play('spotted');
      ui.flash('#ff1a1a', 0.35, 0.8);
      cinema.shake(0.04, 0.6);
      for (const b of this.beacons) b.intensity = 60;
    }, [], 1.8)
      .to(hemi.color, { r: red.r * 0.4, g: red.g * 0.4, b: red.b * 0.4, duration: 0.4 }, 1.8)
      .to(key.color, { r: 1, g: 0.25, b: 0.2, duration: 0.4 }, 1.8)
      .to(stripMat.emissive, { r: red.r, g: red.g, b: red.b, duration: 0.3 }, 1.8)
      .to(this.ctx.grade.grade.tint, { r: 1, g: 0.82, b: 0.8, duration: 0.5 }, 1.8)
      .to(this.ctx.grade.grade.lift, { r: 0.06, g: 0, b: 0, duration: 0.5 }, 1.8);

    // 3.0 — cut to the eyes
    tl.set(c, { px: 0.9, py: 1.9, pz: 3.3, lx: 0, ly: 1.4, lz: 0.6 }, 3.0)
      .to(c, { pz: 2.9, duration: 1.2, ease: 'none' }, 3.0)
      .to(this.creature.eyes, { emissiveIntensity: 6, duration: 0.35 }, 3.1)
      .to(this.creature.root.rotation, { x: -0.1, duration: 0.8, ease: 'power2.out' }, 3.1)
      .call(() => this.creature.play('Idle', 0.3, 1.4), [], 3.1)
      .call(() => audio.play('roar', 0.6), [], 3.2);

    // 4.2 — first crack
    tl.call(() => ui.radio({ who: 'Agent Harmattan-2', lang: 'Hausa', text: 'Me ke nan?!', en: 'What is that?!' }, 2.4), [], 4.0);
    tl.call(() => {
      this.crackMat.opacity = 1;
      audio.play('glass', 0.7);
      cinema.shake(0.08, 0.3);
    }, [], 4.2);

    // 5.0 — lunge, bigger crack, wider shot
    tl.set(c, { px: -3, py: 1.6, pz: 6.5, lx: 0, ly: 2, lz: 0 }, 5.0)
      .call(() => this.creature.play('Attack', 0.1, 1.3, true), [], 4.85)
      .to(this.creature.root.position, { z: 0.45, duration: 0.25, ease: 'power3.in' }, 5.0)
      .call(() => {
        this.crackMat.map = this.crack2;
        this.crackMat.needsUpdate = true;
        audio.play('glass');
        audio.play('impact', 0.6);
        cinema.shake(0.12, 0.4);
      }, [], 5.25);

    // 5.9 — shatter in slow motion
    tl.call(() => {
      this.glass.visible = false;
      this.crack.visible = false;
      this.fluid.visible = false;
      this.shards.visible = true;
      this.shattered = true;
      this.splash.burst(220);
      audio.play('boom');
      audio.play('glass');
      audio.play('roar');
      cinema.shake(0.35, 0.9);
      cinema.slowMo(0.12, 1.4);
      ui.flash('#ffffff', 0.4, 0.5);
    }, [], 5.9)
      .set(c, { px: 4.2, py: 0.5, pz: 5.2, lx: 0, ly: 2, lz: 1 }, 5.9)
      .to(c, { px: 3.4, py: 0.7, pz: 4.6, duration: 2.4, ease: 'sine.out' }, 5.9)
      .to(bloom, { strength: 1.15, duration: 0.4 }, 5.9)
      .call(() => this.creature.play('Jump', 0.1, 1, true), [], 5.9)
      .to(this.creature.root.position, { z: 1.4, y: 0.9, duration: 2.2, ease: 'power1.out' }, 5.95);

    // 8.3 — the player's face (creature is behind the camera). RUN.
    tl.set(this.creature.root.position, { z: 0.2, y: 0.5 }, 8.3)
      .set(c, { px: 0.15, py: 1.72, pz: 2.9, lx: 0, ly: 1.68, lz: 4.2 }, 8.3)
      .to(c, { pz: 3.15, duration: 1.6, ease: 'none' }, 8.3)
      .to(bloom, { strength: 0.75, duration: 0.3 }, 8.3)
      .call(() => {
        ui.title('RUN.', '', 1.2, 'danger');
        ui.radio({ who: 'Agent Ibis-5', lang: 'Igbo', text: 'Gbaa ọsọ!', en: 'Run!' }, 1.4);
        audio.play('impact', 0.5);
      }, [], 8.4)
      .to({}, { duration: 0.1 }, 9.9);
  }
}
