import * as THREE from 'three';
import gsap from 'gsap';
import type { UI } from '../ui/UI';

/** Letterbox, cuts, shake and slow-motion on top of the shared camera. */
export class CinemaCamera {
  /** Multiplier applied to scene dt. Tweened in real time, so slow-mo always lasts as long as asked. */
  timeScale = 1;
  private shakeAmp = 0;
  private shakeDecay = 0;
  private readonly savedPos = new THREE.Vector3();
  private readonly savedQuat = new THREE.Quaternion();
  private shaking = false;

  constructor(readonly camera: THREE.PerspectiveCamera, private readonly ui: UI) {}

  letterbox(on: boolean): void {
    this.ui.letterbox(on);
  }

  cut(pos: THREE.Vector3, look: THREE.Vector3): void {
    this.camera.position.copy(pos);
    this.camera.lookAt(look);
  }

  /** Current shake strength, for effects that should pulse with it. */
  get shakeLevel(): number {
    return this.shakeAmp;
  }

  shake(amp: number, duration = 0.5): void {
    this.shakeAmp = Math.max(this.shakeAmp, amp);
    this.shakeDecay = this.shakeAmp / Math.max(duration, 0.01);
  }

  slowMo(scale: number, hold: number, ramp = 0.25): void {
    gsap.killTweensOf(this);
    gsap
      .timeline()
      .to(this, { timeScale: scale, duration: ramp, ease: 'power2.out' })
      .to(this, { timeScale: 1, duration: ramp * 2, ease: 'power2.in' }, `+=${hold}`);
  }

  /** Called right before rendering: applies shake on top of the scene's camera pose. */
  beginFrame(dtReal: number): void {
    if (this.shakeAmp <= 0) return;
    this.shaking = true;
    this.savedPos.copy(this.camera.position);
    this.savedQuat.copy(this.camera.quaternion);
    const a = this.shakeAmp;
    this.camera.position.x += (Math.random() - 0.5) * a;
    this.camera.position.y += (Math.random() - 0.5) * a;
    this.camera.rotateZ((Math.random() - 0.5) * a * 0.08);
    this.shakeAmp = Math.max(0, a - this.shakeDecay * dtReal);
  }

  /** Called right after rendering: removes the shake so scenes see a clean camera. */
  endFrame(): void {
    if (!this.shaking) return;
    this.shaking = false;
    this.camera.position.copy(this.savedPos);
    this.camera.quaternion.copy(this.savedQuat);
  }

  reset(): void {
    gsap.killTweensOf(this);
    this.timeScale = 1;
    this.shakeAmp = 0;
    this.ui.letterbox(false, 0.01);
  }
}
