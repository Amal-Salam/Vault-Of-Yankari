import * as THREE from 'three';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

/** Per-scene colour grade. Values are applied after tone mapping, in display space. */
export interface Grade {
  tint: THREE.Color; // multiplied in; white = neutral
  lift: THREE.Color; // added to shadows; black = neutral
  saturation: number; // 1 = neutral
  contrast: number; // 1 = neutral
  vignette: number; // 0 = off
  grain: number; // 0 = off
}

export const NEUTRAL_GRADE: Readonly<Omit<Grade, 'tint' | 'lift'>> & { tint: string; lift: string } = {
  tint: '#ffffff',
  lift: '#000000',
  saturation: 1,
  contrast: 1,
  vignette: 0.35,
  grain: 0.035,
};

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    tint: { value: new THREE.Color('#ffffff') },
    lift: { value: new THREE.Color('#000000') },
    saturation: { value: 1 },
    contrast: { value: 1 },
    vignette: { value: 0.35 },
    grain: { value: 0.035 },
    aberration: { value: 0 },
    time: { value: 0 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform vec3 tint;
    uniform vec3 lift;
    uniform float saturation;
    uniform float contrast;
    uniform float vignette;
    uniform float grain;
    uniform float aberration;
    uniform float time;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 dir = vUv - 0.5;
      vec2 off = dir * aberration * 0.008;
      vec3 c = vec3(
        texture2D(tDiffuse, vUv + off).r,
        texture2D(tDiffuse, vUv).g,
        texture2D(tDiffuse, vUv - off).b
      );
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = mix(vec3(l), c, saturation);
      c = (c - 0.5) * contrast + 0.5;
      c = c * tint + lift * (1.0 - l);
      c *= 1.0 - vignette * smoothstep(0.25, 0.85, length(dir) * 1.25);
      c += (hash(vUv * 1000.0 + time) - 0.5) * grain;
      gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
    }`,
};

/** Final pass: colour grade, vignette, film grain and a chromatic-aberration pulse for impacts. */
export class GradePass extends ShaderPass {
  /** Live grade the scene can tweak; reset between scenes. */
  readonly grade: Grade = {
    tint: new THREE.Color(),
    lift: new THREE.Color(),
    saturation: 1,
    contrast: 1,
    vignette: 0.35,
    grain: 0.035,
  };
  /** 0..1 pulse, decays on its own. */
  aberration = 0;

  constructor() {
    super(GradeShader);
    this.reset();
  }

  reset(): void {
    this.grade.tint.set(NEUTRAL_GRADE.tint);
    this.grade.lift.set(NEUTRAL_GRADE.lift);
    this.grade.saturation = NEUTRAL_GRADE.saturation;
    this.grade.contrast = NEUTRAL_GRADE.contrast;
    this.grade.vignette = NEUTRAL_GRADE.vignette;
    this.grade.grain = NEUTRAL_GRADE.grain;
    this.aberration = 0;
  }

  set(grade: Partial<Omit<Grade, 'tint' | 'lift'>> & { tint?: string; lift?: string }): void {
    const { tint, lift, ...rest } = grade;
    if (tint) this.grade.tint.set(tint);
    if (lift) this.grade.lift.set(lift);
    Object.assign(this.grade, rest);
  }

  tick(dtReal: number, shake: number): void {
    this.aberration = Math.max(0, this.aberration - dtReal * 2.5);
    const u = this.uniforms;
    u.tint.value.copy(this.grade.tint);
    u.lift.value.copy(this.grade.lift);
    u.saturation.value = this.grade.saturation;
    u.contrast.value = this.grade.contrast;
    u.vignette.value = this.grade.vignette;
    u.grain.value = this.grade.grain;
    u.aberration.value = Math.min(1, this.aberration + shake * 0.8);
    u.time.value = (u.time.value + dtReal) % 100;
  }
}
