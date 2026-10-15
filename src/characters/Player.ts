import * as THREE from 'three';
import type { CharacterStyle } from '../user/styleFromUser';
import { canvasTexture, fitModel, loadModel } from '../core/Assets';
import { rng } from '../core/fx';
import { MODELS } from '../assets/models';

/** Draws one of the 8 mask patterns in `color` over a w×h area. */
export function drawMaskPattern(
  g: CanvasRenderingContext2D,
  w: number,
  h: number,
  pattern: number,
  color: string,
): void {
  const rand = rng(pattern * 97 + 13);
  g.save();
  g.fillStyle = color;
  g.strokeStyle = color;
  g.lineCap = 'round';
  switch (pattern % 8) {
    case 0: // vertical stripes
      for (let x = 0; x < w; x += w / 8) g.fillRect(x, 0, w / 24, h);
      break;
    case 1: // chevrons
      g.lineWidth = h / 14;
      for (let y = -h / 4; y < h * 1.25; y += h / 4) {
        g.beginPath();
        for (let i = 0; i <= 8; i++) g.lineTo((i * w) / 8, y + (i % 2 ? h / 8 : 0));
        g.stroke();
      }
      break;
    case 2: // dots
      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 16; col++) {
          g.beginPath();
          g.arc(((col + (row % 2) * 0.5) * w) / 16, ((row + 0.5) * h) / 6, h / 26, 0, Math.PI * 2);
          g.fill();
        }
      }
      break;
    case 3: // diagonal bands
      g.lineWidth = w / 28;
      for (let x = -w; x < w * 2; x += w / 7) {
        g.beginPath();
        g.moveTo(x, 0);
        g.lineTo(x + h, h);
        g.stroke();
      }
      break;
    case 4: // tiger stripes
      for (let i = 0; i < 12; i++) {
        const x = (i * w) / 12 + rand() * 8;
        g.lineWidth = 4 + rand() * 8;
        g.beginPath();
        g.moveTo(x, 0);
        g.bezierCurveTo(x + 18, h * 0.3, x - 18, h * 0.6, x + rand() * 18, h * (0.55 + rand() * 0.45));
        g.stroke();
      }
      break;
    case 5: // grid
      g.lineWidth = 3;
      for (let x = 0; x <= w; x += w / 12) {
        g.beginPath();
        g.moveTo(x, 0);
        g.lineTo(x, h);
        g.stroke();
      }
      for (let y = 0; y <= h; y += h / 6) {
        g.beginPath();
        g.moveTo(0, y);
        g.lineTo(w, y);
        g.stroke();
      }
      break;
    case 6: // split face
      g.fillRect(0, 0, w / 2, h);
      g.fillRect(0, h * 0.18, w, h * 0.06);
      break;
    case 7: // circuit traces
      g.lineWidth = 3;
      for (let i = 0; i < 16; i++) {
        const x = rand() * w;
        const y = rand() * h;
        const x2 = x + (rand() - 0.5) * w * 0.3;
        const y2 = y + (rand() - 0.5) * h * 0.6;
        g.beginPath();
        g.moveTo(x, y);
        g.lineTo(x2, y);
        g.lineTo(x2, y2);
        g.stroke();
        g.beginPath();
        g.arc(x2, y2, 5, 0, Math.PI * 2);
        g.fill();
      }
      break;
  }
  g.restore();
}

function darken(hex: string, k: number): string {
  return `#${new THREE.Color(hex).multiplyScalar(k).getHexString()}`;
}

/** A small helmet "portrait" for the crew ID badge (stands in for the avatar image for now). */
export function maskBadge(style: CharacterStyle, size = 108): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const g = canvas.getContext('2d');
  if (!g) return canvas;
  g.fillStyle = darken(style.suitColor, 0.6);
  g.fillRect(0, 0, size, size);
  g.globalAlpha = 0.6;
  drawMaskPattern(g, size, size, style.maskPattern, style.accentColor);
  g.globalAlpha = 1;
  g.shadowColor = style.visorTint;
  g.shadowBlur = 14;
  g.fillStyle = style.visorTint;
  g.beginPath();
  g.roundRect(size * 0.16, size * 0.42, size * 0.68, size * 0.17, size * 0.08);
  g.fill();
  return canvas;
}

export type PlayerKind = 'agent' | 'guard';
export type PlayerAnim = 'Idle' | 'Walk' | 'Run' | 'Interact' | 'Wave' | 'Idle_Neutral';

const MODEL: Record<PlayerKind, string> = { agent: MODELS.agent, guard: MODELS.guard };
const HEIGHT = 1.8;

/**
 * A crew member, guard or the player: Quaternius' CC0 rigged characters, recoloured from a
 * CharacterStyle (suit, accent, visor) with the mask pattern on emblem patches. Faces +Z.
 */
export class Player {
  readonly root = new THREE.Group();
  private mixer!: THREE.AnimationMixer;
  private readonly actions = new Map<string, THREE.AnimationAction>();
  private current: THREE.AnimationAction | null = null;
  private seated = false;
  private readonly sitBones: { bone: THREE.Object3D; x: number }[] = [];
  private oneShot = 0;

  private constructor(readonly style: CharacterStyle, readonly kind: PlayerKind) {}

  static async create(style: CharacterStyle, kind: PlayerKind = 'agent'): Promise<Player> {
    const p = new Player(style, kind);
    await p.load();
    return p;
  }

  /** move: 0 idle, up to ~0.6 walk, above that run. */
  update(dt: number, move = 0): void {
    this.oneShot = Math.max(0, this.oneShot - dt);
    if (!this.seated && this.oneShot <= 0) {
      if (move > 0.55) this.play('Run', 0.2, 1);
      else if (move > 0.05) this.play('Walk', 0.2, 1.2);
      else this.play(this.kind === 'guard' ? 'Idle_Neutral' : 'Idle', 0.3);
    }
    this.mixer.update(dt);
    // Pose overrides run after the mixer so they win.
    for (const { bone, x } of this.sitBones) bone.rotation.x = x;
  }

  /** Seated pose for the jeep: thighs forward, shins down. */
  sit(): void {
    this.seated = true;
    this.play('Idle', 0);
    const add = (name: string, x: number) => {
      const bone = this.root.getObjectByName(name);
      if (bone) this.sitBones.push({ bone, x });
    };
    for (const side of ['L', 'R']) {
      add(`UpperLeg.${side}`, -1.45 + Math.PI);
      add(`LowerLeg.${side}`, -1.45);
    }
  }

  /** Plays an animation once (e.g. 'Interact' when lifting a keycard), then returns to idle/walk. */
  gesture(name: PlayerAnim, duration = 0.9): void {
    this.play(name, 0.1, 1.4, true);
    this.oneShot = duration;
  }

  play(name: PlayerAnim, fade = 0.25, timeScale = 1, once = false): void {
    const next = this.actions.get(name);
    if (!next) return;
    next.timeScale = timeScale;
    if (next === this.current) return;
    next.reset();
    next.setLoop(once ? THREE.LoopOnce : THREE.LoopRepeat, Infinity);
    next.clampWhenFinished = once;
    next.play();
    if (this.current) this.current.crossFadeTo(next, fade, false);
    this.current = next;
  }

  private async load(): Promise<void> {
    const { scene, animations } = await loadModel(MODEL[this.kind]);
    const holder = new THREE.Group();
    holder.add(scene);
    fitModel(holder, HEIGHT, 'height');
    this.root.add(holder);

    this.recolour(scene);
    this.addEmblems(scene);

    this.mixer = new THREE.AnimationMixer(scene);
    for (const clip of animations) this.actions.set(clip.name.split('|').pop() ?? clip.name, this.mixer.clipAction(clip));
    this.play(this.kind === 'guard' ? 'Idle_Neutral' : 'Idle', 0);
    this.mixer.setTime(Math.random() * 2); // so a crew line-up doesn't breathe in sync
  }

  private recolour(scene: THREE.Object3D): void {
    const s = this.style;
    scene.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (!mesh.isMesh) return;
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      for (const m of mats) {
        const mat = m as THREE.MeshStandardMaterial;
        if (!mat.color) continue;
        mat.roughness = 0.5;
        mat.metalness = 0.25;
        switch (mat.name) {
          case 'SciFi_Light': // armour plates
          case 'Swat':
            mat.color.set(s.suitColor);
            mat.metalness = 0.35;
            mat.roughness = 0.4;
            break;
          case 'SciFi_MainDark': // undersuit
          case 'Swat_Black':
            mat.color.set(darken(s.suitColor, 0.3));
            mat.roughness = 0.75;
            break;
          case 'SciFi_Main': // gloves, boots, joints
          case 'Grey_Dark':
            mat.color.set('#1b1d22');
            mat.roughness = 0.7;
            break;
          case 'SciFi_Light_Accent': // thin trim lines
            mat.color.set(s.accentColor);
            mat.emissive = new THREE.Color(s.accentColor);
            mat.emissiveIntensity = 0.45;
            break;
          case 'Grey': // helmet face plate = visor
          case 'Visor':
            mat.color.set('#07080b');
            mat.emissive = new THREE.Color(s.visorTint);
            mat.emissiveIntensity = 1.1;
            mat.roughness = 0.08;
            mat.metalness = 0.7;
            break;
        }
      }
    });
  }

  /** The mask pattern, as glowing patches on the chest and back, riding the chest bone. */
  private addEmblems(scene: THREE.Object3D): void {
    const s = this.style;
    const chest = scene.getObjectByName('Chest');
    if (!chest) return;
    const tex = canvasTexture(128, 128, (g, w, h) => {
      g.fillStyle = darken(s.suitColor, 0.35);
      g.beginPath();
      g.roundRect(4, 4, w - 8, h - 8, 18);
      g.fill();
      g.save();
      g.beginPath();
      g.roundRect(4, 4, w - 8, h - 8, 18);
      g.clip();
      drawMaskPattern(g, w, h, s.maskPattern, s.accentColor);
      g.restore();
    });
    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      emissive: '#ffffff',
      emissiveMap: tex,
      emissiveIntensity: 0.5,
      transparent: true,
      polygonOffset: true,
      polygonOffsetFactor: -4,
    });
    const scale = new THREE.Vector3();
    chest.getWorldScale(scale);
    const k = 1 / scale.x; // emblem sizes below are in metres
    const geo = new THREE.PlaneGeometry(0.15 * k, 0.15 * k);
    for (const [z, rotY] of [[0.16, 0], [-0.17, Math.PI]] as const) {
      const patch = new THREE.Mesh(geo, mat);
      patch.position.set(0, -0.02 * k, z * k);
      patch.rotation.y = rotY;
      chest.add(patch);
    }
  }
}
