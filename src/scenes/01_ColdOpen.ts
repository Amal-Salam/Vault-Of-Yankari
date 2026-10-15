import * as THREE from 'three';
import gsap from 'gsap';
import type { GameContext, GameScene } from '../core/types';
import { Player } from '../characters/Player';
import { MODELS } from '../assets/models';
import { CREW_STYLES } from '../user/styleFromUser';
import { ParticleField, rng } from '../core/fx';
import { canvasTexture, fitModel, loadModel } from '../core/Assets';
import { disposeScene } from '../core/dispose';

const TAU = Math.PI * 2;
const POOL_RADIUS = 3.7;

/** Night at Wikki Warm Spring. Camera orbits the styled crew, title cards, then they dive in. */
export class ColdOpen implements GameScene {
  readonly scene = new THREE.Scene();
  private ctx!: GameContext;
  private tl: gsap.core.Timeline | null = null;
  private cast: Player[] = [];
  private steam!: ParticleField;
  private fireflies!: ParticleField;
  private splash!: ParticleField;
  private caustics!: THREE.Texture;
  private poolMat!: THREE.MeshStandardMaterial;
  private readonly splashAt = new THREE.Vector3();
  private readonly shot = { angle: 0.35, radius: 22, height: 9, lookY: 0.3, tx: 0, tz: 4.6 };
  private readonly look = new THREE.Vector3();
  private walk = 0;
  private t = 0;
  private done = false;

  async enter(ctx: GameContext): Promise<void> {
    this.ctx = ctx;
    this.scene.background = new THREE.Color('#04070f');
    this.scene.fog = new THREE.FogExp2('#06101e', 0.03);
    ctx.camera.fov = 40;
    ctx.camera.updateProjectionMatrix();
    ctx.bloom.strength = 0.7;
    ctx.bloom.threshold = 0.65;
    this.scene.environment = ctx.envMap;
    this.scene.environmentIntensity = 0.25;
    ctx.grade.set({ tint: '#cfe0ff', lift: '#03081a', saturation: 0.9, contrast: 1.08, vignette: 0.5 });

    this.buildEnvironment();
    await this.buildLandmarks();
    await this.buildCast();
    this.buildTimeline();
    this.applyShot();

    ctx.audio.startLoop('ambience');
    ctx.ui.showSkip(true);
  }

  update(dt: number): void {
    this.t += dt;
    if (this.ctx.input.pressed('skip')) this.finish();
    this.applyShot();
    this.steam.update(dt);
    this.fireflies.update(dt);
    this.splash.update(dt);
    this.caustics.offset.x += dt * 0.025;
    this.caustics.offset.y += dt * 0.012;
    this.poolMat.emissiveIntensity = 0.6 + Math.sin(this.t * 1.3) * 0.08;
    for (const p of this.cast) p.update(dt, this.walk);
  }

  exit(): void {
    this.tl?.kill();
    for (const p of this.cast) gsap.killTweensOf(p.root.position);
    disposeScene(this.scene);
  }

  private finish(): void {
    if (this.done) return;
    this.done = true;
    this.ctx.goTo('vault');
  }

  private applyShot(): void {
    const s = this.shot;
    const cam = this.ctx.camera;
    cam.position.set(s.tx + Math.sin(s.angle) * s.radius, s.height, s.tz + Math.cos(s.angle) * s.radius);
    this.look.set(s.tx, s.lookY, s.tz);
    cam.lookAt(this.look);
  }

  private buildEnvironment(): void {
    const scene = this.scene;
    const rand = rng(2049);

    // Lighting: cold moon key (the one shadow caster), warm-spring cyan glow from the pool
    scene.add(new THREE.HemisphereLight('#2c4170', '#0b0a08', 0.9));
    const moon = new THREE.DirectionalLight('#9db8ff', 1.4);
    moon.position.set(-12, 18, -10);
    moon.castShadow = true;
    moon.shadow.mapSize.set(1024, 1024);
    const sc = moon.shadow.camera;
    sc.left = sc.bottom = -12;
    sc.right = sc.top = 12;
    sc.far = 60;
    scene.add(moon);
    const poolLight = new THREE.PointLight('#3fe0ee', 30, 14, 2);
    poolLight.position.set(0, 0.8, 0);
    scene.add(poolLight);

    // Ground
    const groundTex = canvasTexture(256, 256, (g, w, h) => {
      g.fillStyle = '#121710';
      g.fillRect(0, 0, w, h);
      for (let i = 0; i < 1400; i++) {
        g.fillStyle = rand() > 0.5 ? 'rgba(40,52,30,0.5)' : 'rgba(6,8,5,0.6)';
        g.fillRect(rand() * w, rand() * h, 2 + rand() * 3, 2 + rand() * 3);
      }
    }, { repeat: [14, 14] });
    const ground = new THREE.Mesh(new THREE.CircleGeometry(70, 48), new THREE.MeshStandardMaterial({ map: groundTex, roughness: 1 }));
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Warm spring pool with drifting caustics
    this.poolMat = new THREE.MeshStandardMaterial({
      color: '#0b5c66',
      emissive: '#14a9b8',
      emissiveIntensity: 0.6,
      roughness: 0.08,
      metalness: 0.5,
    });
    const pool = new THREE.Mesh(new THREE.CircleGeometry(POOL_RADIUS, 64), this.poolMat);
    pool.rotation.x = -Math.PI / 2;
    pool.position.y = 0.05;
    scene.add(pool);
    this.caustics = canvasTexture(256, 256, (g, w, h) => {
      g.fillStyle = '#000';
      g.fillRect(0, 0, w, h);
      g.strokeStyle = '#fff';
      for (let i = 0; i < 40; i++) {
        g.globalAlpha = 0.25 + rand() * 0.5;
        g.lineWidth = 1 + rand() * 3;
        g.beginPath();
        const x = rand() * w;
        const y = rand() * h;
        g.moveTo(x, y);
        g.bezierCurveTo(x + rand() * 80 - 40, y + rand() * 80 - 40, x + rand() * 80 - 40, y + rand() * 80 - 40, x + rand() * 60 - 30, y + rand() * 60 - 30);
        g.stroke();
      }
    }, { repeat: [2, 2] });
    const causticMesh = new THREE.Mesh(
      new THREE.CircleGeometry(POOL_RADIUS - 0.1, 64),
      new THREE.MeshBasicMaterial({
        map: this.caustics,
        color: '#7ff6ff',
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    causticMesh.rotation.x = -Math.PI / 2;
    causticMesh.position.y = 0.07;
    scene.add(causticMesh);

    // Rock rim, with a gap where the crew stands
    const rockGeo = new THREE.DodecahedronGeometry(1, 0);
    const rockMat = new THREE.MeshStandardMaterial({ color: '#2b2d2c', roughness: 0.9, flatShading: true });
    for (let i = 0; i < 30; i++) {
      const a = (i / 30) * TAU + rand() * 0.1;
      if (Math.abs(a - Math.PI / 2) < 0.55) continue;
      const r = POOL_RADIUS + 0.25 + rand() * 0.5;
      const rock = new THREE.Mesh(rockGeo, rockMat);
      const s = 0.3 + rand() * 0.35;
      rock.scale.set(s, s * 0.6, s);
      rock.position.set(Math.cos(a) * r, s * 0.2, Math.sin(a) * r);
      rock.rotation.set(rand() * TAU, rand() * TAU, 0);
      rock.castShadow = rock.receiveShadow = true;
      scene.add(rock);
    }

    // Palm silhouettes
    const trunkMat = new THREE.MeshStandardMaterial({ color: '#141210', roughness: 1 });
    const leafMat = new THREE.MeshStandardMaterial({ color: '#0d1a12', roughness: 1, side: THREE.DoubleSide });
    const frondGeo = new THREE.PlaneGeometry(0.55, 2.8).translate(0, 1.4, 0);
    for (let i = 0; i < 20; i++) {
      // Keep palms out of the camera's path (it sweeps in from the +Z side).
      let x = 0;
      let z = 0;
      do {
        const a = rand() * TAU;
        const r = 12 + rand() * 20;
        x = Math.cos(a) * r;
        z = Math.sin(a) * r;
      } while (z > -6 && Math.abs(x) < 18);
      const h = 4.5 + rand() * 3;
      const palm = new THREE.Group();
      palm.position.set(x, 0, z);
      palm.rotation.z = (rand() - 0.5) * 0.25;
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.22, h, 7), trunkMat);
      trunk.position.y = h / 2;
      trunk.castShadow = true;
      palm.add(trunk);
      for (let k = 0; k < 7; k++) {
        const frond = new THREE.Mesh(frondGeo, leafMat);
        frond.position.y = h;
        frond.rotation.set(1.9 + rand() * 0.3, (k / 7) * TAU + rand() * 0.3, 0, 'YXZ');
        palm.add(frond);
      }
      scene.add(palm);
    }

    // Sky: stars and a bright moon disc for the bloom to catch
    const starPos = new Float32Array(700 * 3);
    for (let i = 0; i < 700; i++) {
      const a = rand() * TAU;
      const e = 0.08 + rand() * 1.4;
      starPos.set([Math.cos(a) * Math.cos(e) * 150, Math.sin(e) * 150, Math.sin(a) * Math.cos(e) * 150], i * 3);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: '#cfe0ff', size: 1.6, sizeAttenuation: false, fog: false })));
    const moonDisc = new THREE.Mesh(new THREE.SphereGeometry(4, 24, 16), new THREE.MeshBasicMaterial({ color: '#eaf1ff', fog: false }));
    moonDisc.position.set(-60, 55, -110);
    scene.add(moonDisc);

    // Particles: spring steam, fireflies, dive splash
    this.steam = new ParticleField({
      count: 140,
      size: 1.8,
      color: '#9fc8d4',
      opacity: 0.22,
      additive: true,
      life: [3, 6],
      grow: 1.5,
      drag: 0.1,
      spawn: (p, v) => {
        const a = Math.random() * TAU;
        const r = Math.sqrt(Math.random()) * (POOL_RADIUS - 0.4);
        p.set(Math.cos(a) * r, 0.1, Math.sin(a) * r);
        v.set((Math.random() - 0.5) * 0.15, 0.35 + Math.random() * 0.35, (Math.random() - 0.5) * 0.15);
      },
    });
    this.fireflies = new ParticleField({
      count: 40,
      size: 0.12,
      color: '#d8ff6a',
      additive: true,
      life: [4, 7],
      spawn: (p, v) => {
        const a = Math.random() * TAU;
        const r = 5 + Math.random() * 8;
        p.set(Math.cos(a) * r, 0.5 + Math.random() * 2, Math.sin(a) * r);
        v.set((Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 0.4);
      },
    });
    this.splash = new ParticleField({
      count: 160,
      size: 0.35,
      color: '#bff8ff',
      additive: true,
      emitting: false,
      life: [0.6, 1.2],
      gravity: 9,
      spawn: (p, v) => {
        p.copy(this.splashAt);
        v.set((Math.random() - 0.5) * 3, 2.5 + Math.random() * 3.5, (Math.random() - 0.5) * 3);
      },
    });
    scene.add(this.steam.points, this.fireflies.points, this.splash.points);
  }

  /** Wikki's boardwalk and steps into the spring, its sign, and elephants drinking in the dark. */
  private async buildLandmarks(): Promise<void> {
    const wood = new THREE.MeshStandardMaterial({ color: '#4a3524', roughness: 0.9 });
    const deck = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.12, 7), wood);
    deck.position.set(0, 0.06, 7.4);
    deck.receiveShadow = true;
    this.scene.add(deck);
    for (let i = 0; i < 3; i++) {
      const step = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.12, 0.45), wood);
      step.position.set(0, -0.12 - i * 0.22, 3.75 - i * 0.42);
      this.scene.add(step);
    }
    for (const side of [-1, 1]) {
      for (let z = 4.2; z <= 10.6; z += 1.6) {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.9, 6), wood);
        post.position.set(side * 1.25, 0.5, z);
        this.scene.add(post);
      }
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 6.6), wood);
      rail.position.set(side * 1.25, 0.95, 7.4);
      this.scene.add(rail);
    }
    const signTex = canvasTexture(512, 192, (g, w, h) => {
      g.fillStyle = '#3e2a1a';
      g.fillRect(0, 0, w, h);
      g.strokeStyle = '#2a1c10';
      g.lineWidth = 8;
      g.strokeRect(4, 4, w - 8, h - 8);
      g.fillStyle = '#f2dfb8';
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.font = "64px 'Bebas Neue', Impact, sans-serif";
      g.fillText('WIKKI WARM SPRING', w / 2, h * 0.4);
      g.font = "30px 'Bebas Neue', Impact, sans-serif";
      g.fillText('YANKARI GAME RESERVE · 31°C', w / 2, h * 0.75);
    });
    // A board with the sign on the front face only, so it never reads mirrored from behind.
    const sign = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.9, 0.08), [wood, wood, wood, wood, new THREE.MeshStandardMaterial({ map: signTex }), wood]);
    sign.position.set(-2.6, 1.5, 8.2);
    sign.rotation.y = 0.5;
    const signPost = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.6, 6), wood);
    signPost.position.set(-2.6, 0.8, 8.2);
    this.scene.add(sign, signPost);

    const { scene: elephant } = await loadModel(MODELS.elephant);
    const herd = new THREE.Group();
    herd.add(elephant);
    fitModel(herd, 5);
    for (const [x, z, rot, s] of [[-13, -9, 0.9, 1], [-17.5, -11, 1.2, 0.7], [15, -12, -2.2, 0.9]]) {
      const e = herd.clone();
      e.position.x = x;
      e.position.z = z;
      e.rotation.y = rot;
      e.scale.multiplyScalar(s);
      this.scene.add(e);
    }
  }

  private async buildCast(): Promise<void> {
    const spots: [number, number, number][] = [
      [0, 4.6, Math.PI],
      [-1.5, 5.3, Math.PI + 0.25],
      [1.6, 5.4, Math.PI - 0.2],
    ];
    const styles = [this.ctx.style, ...CREW_STYLES];
    const players = await Promise.all(styles.map((style) => Player.create(style)));
    players.forEach((p, i) => {
      const [x, z, rot] = spots[i];
      p.root.position.set(x, 0, z);
      p.root.rotation.y = rot;
      this.scene.add(p.root);
      this.cast.push(p);
    });
  }

  private buildTimeline(): void {
    const { ui, audio, style, user } = this.ctx;
    const s = this.shot;
    const name = user.displayName || user.username;
    const tl = gsap.timeline({ onComplete: () => this.finish() });
    this.tl = tl;

    tl.call(() => ui.letterbox(true), [], 0)
      .call(() => ui.caption('Wikki Warm Spring · Yankari Game Reserve · Bauchi State, Nigeria · 2049', 3.6), [], 0.8)
      .call(() => ui.routeMap(0, 3.5), [], 1.0)
      .call(() => ui.radio({ who: 'Agent Harmattan-2', lang: 'Hausa', text: 'Ruwan yana da ɗumi. Kofar tana ƙasa.', en: 'The water’s warm. The entrance is below.' }, 3), [], 2.2)
      .call(() => ui.radio({ who: 'Agent Ibis-5', lang: 'Yoruba', text: 'Ẹ jẹ́ ká lọ!', en: 'Let’s go!' }, 1.8), [], 11.0)
      .to(s, { angle: 0.9, radius: 8.5, height: 2.4, lookY: 1.2, duration: 5, ease: 'power2.inOut' }, 0)
      .to(s, { angle: Math.PI + 0.25, radius: 3.0, height: 1.75, lookY: 1.6, duration: 6, ease: 'sine.inOut' }, 5)
      .call(() => ui.title('VAULT OF YANKARI', '', 2.3), [], 5.3)
      .call(() => ui.title(`Starring ${name}`, `as ${style.codename}`, 2.4, 'small'), [], 8.4)
      .to(s, { angle: Math.PI + 0.9, radius: 7, height: 6.5, lookY: -0.5, tz: 2, duration: 3, ease: 'power2.inOut' }, 11)
      .to(this, { walk: 1, duration: 0.3 }, 11);

    // Crew walks to the edge, then dives in one after another.
    this.cast.forEach((p, i) => {
      const pos = p.root.position;
      const start = 11.1 + i * 0.18;
      const edge = POOL_RADIUS + 0.2;
      const dir = new THREE.Vector2(-pos.x, -pos.z).normalize();
      const dist = Math.hypot(pos.x, pos.z) - edge;
      tl.to(pos, { x: pos.x + dir.x * dist, z: pos.z + dir.y * dist, duration: 1.3, ease: 'none' }, start)
        .to(pos, { x: pos.x + dir.x * (dist + 1.3), z: pos.z + dir.y * (dist + 1.3), duration: 0.8, ease: 'none' }, start + 1.3)
        .to(pos, { y: 0.6, duration: 0.3, ease: 'power2.out' }, start + 1.3)
        .to(pos, { y: -2.5, duration: 0.5, ease: 'power2.in' }, start + 1.6)
        .call(() => {
          this.splashAt.set(pos.x, 0.1, pos.z);
          this.splash.burst(50);
          audio.play('splash', 0.7);
        }, [], start + 1.85);
    });
    tl.call(() => audio.play('whoosh'), [], 13.4).to({}, { duration: 0.4 }, 14.2);
  }
}
