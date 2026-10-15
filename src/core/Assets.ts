import * as THREE from 'three';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';

// Texture/model loading with caching, plus procedural canvas textures.

const gltfLoader = new GLTFLoader();
const gltfCache = new Map<() => Promise<string>, Promise<GLTF>>();

/** Loads a GLB once; every call returns a fresh clone (skinned meshes keep their own skeleton). */
export async function loadModel(
  source: () => Promise<string>,
): Promise<{ scene: THREE.Object3D; animations: THREE.AnimationClip[] }> {
  let pending = gltfCache.get(source);
  if (!pending) {
    pending = source().then((url) => gltfLoader.loadAsync(url));
    gltfCache.set(source, pending);
  }
  const gltf = await pending;
  const scene = cloneSkinned(gltf.scene);
  scene.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    // Clone materials so per-scene tweaks and disposal never touch the cached original.
    mesh.material = Array.isArray(mesh.material) ? mesh.material.map((m) => m.clone()) : mesh.material.clone();
  });
  return { scene, animations: gltf.animations };
}

/** Scales and grounds a model so its longest horizontal side (or its height) is `size` metres. */
export function fitModel(obj: THREE.Object3D, size: number, by: 'length' | 'height' = 'length'): void {
  // Skinned meshes are measured through their bones, which only hold real poses after an update.
  obj.updateMatrixWorld(true);
  obj.traverse((o) => {
    const skinned = o as THREE.SkinnedMesh;
    if (skinned.isSkinnedMesh) {
      skinned.skeleton.update();
      skinned.computeBoundingBox();
    }
  });
  const box = new THREE.Box3().setFromObject(obj);
  const dims = box.getSize(new THREE.Vector3());
  const s = by === 'height' ? size / dims.y : size / Math.max(dims.x, dims.z);
  obj.scale.multiplyScalar(s);
  box.setFromObject(obj);
  obj.position.y -= box.min.y;
}

const textureLoader = new THREE.TextureLoader();
const textureCache = new Map<string, Promise<THREE.Texture>>();

export function loadTexture(url: string): Promise<THREE.Texture> {
  let pending = textureCache.get(url);
  if (!pending) {
    pending = textureLoader.loadAsync(url).then((tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    });
    textureCache.set(url, pending);
  }
  return pending;
}

export interface CanvasTextureOptions {
  repeat?: [number, number];
  srgb?: boolean;
}

/** Draws a texture procedurally on a 2D canvas. */
export function canvasTexture(
  width: number,
  height: number,
  draw: (g: CanvasRenderingContext2D, w: number, h: number) => void,
  opts: CanvasTextureOptions = {},
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const g = canvas.getContext('2d');
  if (!g) throw new Error('2D canvas is unavailable');
  draw(g, width, height);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = opts.srgb === false ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  if (opts.repeat) {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(opts.repeat[0], opts.repeat[1]);
  }
  return tex;
}

/** Waits for a web font so canvas text uses it, but never longer than `timeoutMs`. */
export async function loadFont(spec: string, timeoutMs = 1500): Promise<void> {
  if (!document.fonts) return;
  await Promise.race([
    document.fonts.load(spec).catch(() => undefined),
    new Promise((resolve) => window.setTimeout(resolve, timeoutMs)),
  ]);
}
