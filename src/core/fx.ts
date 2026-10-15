import * as THREE from 'three';
import { canvasTexture } from './Assets';

/** Shared uniform: half the drawing-buffer height, so point sizes are in world units. Updated on resize. */
export const particleScale = { value: 400 };

/** Seeded PRNG (mulberry32) so procedural layouts are identical every run. */
export function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function softDot(): THREE.Texture {
  return canvasTexture(64, 64, (g, w, h) => {
    const grad = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.35, 'rgba(255,255,255,0.55)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, w, h);
  });
}

const VERTEX = /* glsl */ `
attribute float alpha;
attribute float psize;
uniform float size;
uniform float scale;
varying float vAlpha;
void main() {
  vAlpha = alpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * psize * scale / max(-mv.z, 0.1);
  gl_Position = projectionMatrix * mv;
}`;

const FRAGMENT = /* glsl */ `
uniform vec3 color;
uniform float opacity;
uniform sampler2D map;
varying float vAlpha;
void main() {
  float a = texture2D(map, gl_PointCoord).a * vAlpha * opacity;
  if (a < 0.003) discard;
  gl_FragColor = vec4(color, a);
}`;

export interface ParticleOptions {
  count: number;
  size: number; // world units
  color: THREE.ColorRepresentation;
  opacity?: number;
  additive?: boolean;
  life: [number, number];
  gravity?: number;
  drag?: number;
  grow?: number; // size multiplier added over a particle's life
  emitting?: boolean; // continuous respawn (true) or burst-only (false)
  spawn(p: THREE.Vector3, v: THREE.Vector3): void;
}

/** Lightweight CPU particle system with per-particle fade and growth. */
export class ParticleField {
  readonly points: THREE.Points;
  emitting: boolean;
  private readonly pos: Float32Array;
  private readonly vel: Float32Array;
  private readonly age: Float32Array;
  private readonly life: Float32Array;
  private readonly alpha: Float32Array;
  private readonly psize: Float32Array;
  private readonly geometry = new THREE.BufferGeometry();
  private readonly p = new THREE.Vector3();
  private readonly v = new THREE.Vector3();

  constructor(private readonly o: ParticleOptions) {
    const n = o.count;
    this.emitting = o.emitting ?? true;
    this.pos = new Float32Array(n * 3);
    this.vel = new Float32Array(n * 3);
    this.age = new Float32Array(n);
    this.life = new Float32Array(n);
    this.alpha = new Float32Array(n);
    this.psize = new Float32Array(n).fill(1);
    for (let i = 0; i < n; i++) {
      if (this.emitting) {
        this.respawn(i);
        this.age[i] = Math.random() * this.life[i];
      } else {
        this.age[i] = 1;
        this.life[i] = 0;
      }
    }
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.geometry.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1));
    this.geometry.setAttribute('psize', new THREE.BufferAttribute(this.psize, 1));
    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      uniforms: {
        color: { value: new THREE.Color(o.color) },
        opacity: { value: o.opacity ?? 1 },
        size: { value: o.size },
        scale: particleScale,
        map: { value: softDot() },
      },
      transparent: true,
      depthWrite: false,
      blending: o.additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(this.geometry, material);
    this.points.frustumCulled = false;
  }

  burst(count: number): void {
    let spawned = 0;
    for (let i = 0; i < this.o.count && spawned < count; i++) {
      if (this.age[i] >= this.life[i]) {
        this.respawn(i);
        spawned++;
      }
    }
  }

  update(dt: number): void {
    const gravity = this.o.gravity ?? 0;
    const drag = Math.max(0, 1 - (this.o.drag ?? 0) * dt);
    const grow = this.o.grow ?? 0;
    for (let i = 0; i < this.o.count; i++) {
      if (this.age[i] >= this.life[i]) {
        if (!this.emitting) {
          this.alpha[i] = 0;
          continue;
        }
        this.respawn(i);
      }
      this.age[i] += dt;
      const k = Math.min(this.age[i] / this.life[i], 1);
      const i3 = i * 3;
      this.vel[i3 + 1] -= gravity * dt;
      this.vel[i3] *= drag;
      this.vel[i3 + 1] *= drag;
      this.vel[i3 + 2] *= drag;
      this.pos[i3] += this.vel[i3] * dt;
      this.pos[i3 + 1] += this.vel[i3 + 1] * dt;
      this.pos[i3 + 2] += this.vel[i3 + 2] * dt;
      this.alpha[i] = Math.min(1, k / 0.12) * (1 - k);
      this.psize[i] = 1 + grow * k;
    }
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.alpha.needsUpdate = true;
    this.geometry.attributes.psize.needsUpdate = true;
  }

  private respawn(i: number): void {
    this.p.set(0, 0, 0);
    this.v.set(0, 0, 0);
    this.o.spawn(this.p, this.v);
    const i3 = i * 3;
    this.pos[i3] = this.p.x;
    this.pos[i3 + 1] = this.p.y;
    this.pos[i3 + 2] = this.p.z;
    this.vel[i3] = this.v.x;
    this.vel[i3 + 1] = this.v.y;
    this.vel[i3 + 2] = this.v.z;
    this.age[i] = 0;
    const [min, max] = this.o.life;
    this.life[i] = min + Math.random() * (max - min);
  }
}
