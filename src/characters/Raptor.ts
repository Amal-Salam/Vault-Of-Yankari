import * as THREE from 'three';
import { fitModel, loadModel } from '../core/Assets';

export type RaptorAction = 'Idle' | 'Walk' | 'Run' | 'Attack' | 'Jump' | 'Death';

/**
 * Specimen 0-YK: Quaternius' CC0 Velociraptor, re-skinned darker with glowing eyes and veins.
 * Faces +Z. `root` holds the fitted model so callers can position/rotate freely.
 */
export class Raptor {
  readonly root = new THREE.Group();
  readonly eyes = new THREE.MeshStandardMaterial({ color: '#330800', emissive: '#ff3a12', emissiveIntensity: 6 });
  private mixer!: THREE.AnimationMixer;
  private readonly actions = new Map<RaptorAction, THREE.AnimationAction>();
  private current: THREE.AnimationAction | null = null;

  static async create(length = 4.2): Promise<Raptor> {
    const r = new Raptor();
    await r.load(length);
    return r;
  }

  private async load(length: number): Promise<void> {
    const { scene, animations } = await loadModel('models/raptor.glb');
    // The source model already faces +Z.
    const holder = new THREE.Group();
    holder.add(scene);
    fitModel(holder, length);
    this.root.add(holder);

    // Darker, wet-looking skin; the light-brown belly becomes a sickly bio-green.
    scene.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (!mesh.isMesh) return;
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      for (const m of mats) {
        const mat = m as THREE.MeshStandardMaterial;
        if (!mat.color) continue;
        if (mat.name === 'LightBrown') {
          mat.color.set('#3c4a2c');
          mat.emissive = new THREE.Color('#1aff7a');
          mat.emissiveIntensity = 0.12;
        } else if (mat.name === 'Brown') {
          mat.color.set('#1d1a16');
        } else {
          mat.color.set('#0b0b0b');
        }
        mat.roughness = 0.35;
        mat.metalness = 0.15;
      }
    });

    // Glowing eyes on the head bone, so they follow every animation.
    const head = scene.getObjectByName('Head');
    if (head) {
      const worldScale = new THREE.Vector3();
      head.getWorldScale(worldScale);
      const r = 0.05 / worldScale.x;
      for (const side of [-1, 1]) {
        const eye = new THREE.Mesh(new THREE.SphereGeometry(r, 10, 8), this.eyes);
        eye.position.set(side * r * 2.6, r * 2.2, r * 5.5);
        head.add(eye);
      }
    }

    this.mixer = new THREE.AnimationMixer(scene);
    for (const clip of animations) {
      const name = clip.name.split('_').pop() as RaptorAction;
      this.actions.set(name, this.mixer.clipAction(clip));
    }
    this.play('Idle', 0);
  }

  play(name: RaptorAction, fade = 0.25, timeScale = 1, once = false): void {
    const next = this.actions.get(name);
    if (!next || next === this.current) {
      if (next) next.timeScale = timeScale;
      return;
    }
    next.reset();
    next.timeScale = timeScale;
    next.setLoop(once ? THREE.LoopOnce : THREE.LoopRepeat, Infinity);
    next.clampWhenFinished = once;
    next.play();
    if (this.current) this.current.crossFadeTo(next, fade, false);
    this.current = next;
  }

  update(dt: number): void {
    this.mixer?.update(dt);
  }
}
