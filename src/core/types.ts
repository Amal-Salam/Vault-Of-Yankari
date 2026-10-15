import type * as THREE from 'three';
import type { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import type { StartNgUser } from '../user/getUser';
import type { CharacterStyle } from '../user/styleFromUser';
import type { UI } from '../ui/UI';
import type { AudioEngine } from './Audio';
import type { CinemaCamera } from './CinemaCamera';
import type { Input } from './Input';
import type { GradePass } from './post';

export type SceneId = 'coldOpen' | 'vault' | 'twist' | 'escape' | 'credits';

export interface GameContext {
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  cinema: CinemaCamera;
  input: Input;
  audio: AudioEngine;
  ui: UI;
  user: StartNgUser;
  style: CharacterStyle;
  bloom: UnrealBloomPass;
  grade: GradePass;
  envMap: THREE.Texture; // shared reflection environment; scenes set scene.environment
  goTo(id: SceneId): void;
}

export interface GameScene {
  readonly scene: THREE.Scene;
  enter(ctx: GameContext): Promise<void>; // load assets, build scene
  update(dt: number): void; // per-frame logic; dt is already scaled by slow-motion
  exit(): void; // dispose geometries, materials, textures, listeners
  afterRender?(renderer: THREE.WebGLRenderer): void; // optional extra views (e.g. rear cam)
}
