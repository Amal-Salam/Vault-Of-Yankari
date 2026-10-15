import * as THREE from 'three';
import gsap from 'gsap';
import type { GameContext, GameScene } from '../core/types';
import { Player } from '../characters/Player';
import { CREW_STYLES } from '../user/styleFromUser';
import { ParticleField } from '../core/fx';
import { disposeScene } from '../core/dispose';
import { el } from '../ui/UI';
import creditsMd from '../../CREDITS.md?raw';

/** Rows of the asset table in CREDITS.md → "Name — Author (License)". */
function assetCredits(md: string): string[] {
  return md
    .split('\n')
    .filter((line) => line.startsWith('|') && !/^\|\s*-/.test(line) && !/^\|\s*Asset\s*\|/i.test(line))
    .map((line) => line.split('|').map((c) => c.trim()).filter(Boolean))
    .filter((cells) => cells.length >= 4)
    .map(([name, author, , license]) => `${name} — ${author} (${license})`);
}

export class Credits implements GameScene {
  readonly scene = new THREE.Scene();
  private ctx!: GameContext;
  private player!: Player;
  private motes!: ParticleField;
  private roll: gsap.core.Tween | null = null;
  private t = 0;
  private leaving = false;

  async enter(ctx: GameContext): Promise<void> {
    this.ctx = ctx;
    const scene = this.scene;
    scene.background = new THREE.Color('#05070a');
    ctx.camera.fov = 35;
    ctx.camera.updateProjectionMatrix();
    ctx.bloom.strength = 0.45;
    ctx.bloom.threshold = 0.85;
    scene.environment = ctx.envMap;
    scene.environmentIntensity = 0.4;
    ctx.grade.set({ vignette: 0.6, contrast: 1.1 });

    const floor = new THREE.Mesh(new THREE.CircleGeometry(12, 48), new THREE.MeshStandardMaterial({ color: '#0d1014', roughness: 0.5, metalness: 0.4 }));
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    const plinth = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.2, 0.2, 48), new THREE.MeshStandardMaterial({ color: '#1b2027', metalness: 0.7, roughness: 0.3 }));
    plinth.position.y = 0.1;
    plinth.receiveShadow = true;
    scene.add(floor, plinth);

    scene.add(new THREE.HemisphereLight('#3a4a66', '#050505', 0.4));
    const key = new THREE.SpotLight('#fff4e0', 120, 14, 0.45, 0.5, 1.5);
    key.position.set(1.5, 7, 3);
    key.target.position.set(0, 1, 0);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    scene.add(key, key.target);
    const rim = new THREE.PointLight(ctx.style.accentColor, 7, 8, 2);
    rim.position.set(-1.5, 2.2, -2);
    scene.add(rim);

    this.player = await Player.create(ctx.style);
    this.player.root.position.y = 0.2;
    scene.add(this.player.root);

    this.motes = new ParticleField({
      count: 80,
      size: 0.06,
      color: '#ffe8c0',
      additive: true,
      life: [4, 8],
      spawn: (p, v) => {
        p.set((Math.random() - 0.5) * 6, Math.random() * 4, (Math.random() - 0.5) * 6);
        v.set((Math.random() - 0.5) * 0.1, 0.05 + Math.random() * 0.1, (Math.random() - 0.5) * 0.1);
      },
    });
    scene.add(this.motes.points);

    ctx.camera.position.set(-1.4, 1.5, 5.2);
    ctx.camera.lookAt(1.2, 1.15, 0);

    this.buildRoll();
    ctx.audio.startLoop('credits');
  }

  update(dt: number): void {
    this.t += dt;
    this.player.root.rotation.y += dt * 0.35;
    this.player.update(dt, 0);
    this.motes.update(dt);
    if (this.ctx.input.pressed('action')) this.replay();
  }

  exit(): void {
    this.roll?.kill();
    disposeScene(this.scene);
  }

  private replay(): void {
    if (this.leaving) return;
    this.leaving = true;
    this.ctx.goTo('coldOpen');
  }

  private buildRoll(): void {
    const { user, style, input } = this.ctx;
    const hud = this.ctx.ui.hud();
    const wrap = el('div', 'credits', hud);
    const roll = el('div', 'roll', wrap);
    const line = (cls: string, text: string) => el('div', cls, roll, text);

    el('h2', '', roll, 'VAULT OF YANKARI');
    line('role', 'Starring');
    line('star', user.displayName || user.username);
    line('name', `as ${style.codename}`);
    line('small', `@${user.username}`);
    line('role', 'The crew');
    for (const crew of CREW_STYLES) line('name', crew.codename);
    line('role', 'Introducing');
    line('name', 'Specimen 0-YK');
    line('role', 'A start.ng game');
    line('name', 'HNG15 · Lesson 8');
    line('role', 'Built with');
    line('name', 'three.js · GSAP · Vite · TypeScript');
    line('role', 'Assets');
    for (const credit of assetCredits(creditsMd)) line('small', credit);
    line('small', 'Jeep, environments, music and sound generated in code');
    line('role', 'Location');
    line('name', 'Yankari Game Reserve');
    line('small', 'Wikki Warm Spring · Gaji River · Kalban Hill · Bauchi State, Nigeria');
    line('role', '');
    line('name', `Thanks for playing, ${user.displayName || user.username}.`);

    this.roll = gsap.fromTo(
      roll,
      { y: window.innerHeight * 0.9 },
      { y: () => -roll.offsetHeight + window.innerHeight * 0.35, duration: 32, ease: 'none' },
    );

    const replay = el('button', 'btn replay', hud, 'REPLAY ↻');
    replay.addEventListener('click', () => input.trigger('action'));
    this.ctx.ui.hint('SPACE to play again');
  }
}
