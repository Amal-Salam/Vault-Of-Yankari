import * as THREE from 'three';
import type { Avatar } from '../user/styleFromUser';
import { disposeObject } from '../core/dispose';

const SIZE = 256;
const GOLD = '#e8b931';
const cache = new Map<string, string>();

function mat(color: string, roughness = 0.6, metalness = 0): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness });
}

function mesh(geo: THREE.BufferGeometry, material: THREE.Material, parent: THREE.Object3D, x = 0, y = 0, z = 0): THREE.Mesh {
  const m = new THREE.Mesh(geo, material);
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}

/** Head-and-shoulders bust of a start.ng avatar. Head centre at the origin, facing +Z. */
function buildBust(a: Avatar): THREE.Group {
  const root = new THREE.Group();
  const skin = mat(a.skinColor, 0.55);
  const hair = mat(a.hairColor, 0.8);
  const shirt = mat(a.primaryColor, 0.7);
  const dark = mat('#1b1a18', 0.4);
  const female = a.body === 'female';
  const headR = 0.1;

  // Shoulders, neck, head, ears
  const torso = mesh(new THREE.CapsuleGeometry(0.11, 0.16, 6, 24), shirt, root, 0, -0.27, -0.01);
  torso.rotation.z = Math.PI / 2;
  torso.scale.set(1, female ? 0.92 : 1.05, 0.62);
  mesh(new THREE.CylinderGeometry(0.038, 0.045, 0.1, 20), skin, root, 0, -0.13, 0);
  const head = mesh(new THREE.SphereGeometry(headR, 40, 28), skin, root);
  head.scale.set(female ? 0.86 : 0.9, 1.08, 0.95);
  for (const s of [-1, 1]) mesh(new THREE.SphereGeometry(0.02, 12, 10), skin, root, s * 0.088, -0.005, -0.005).scale.set(0.6, 1, 0.8);

  // Face: eyes with highlights, brows, nose, smile
  for (const s of [-1, 1]) {
    mesh(new THREE.SphereGeometry(0.0115, 16, 12), dark, root, s * 0.032, 0.012, 0.088);
    mesh(new THREE.SphereGeometry(0.0035, 8, 6), mat('#ffffff', 0.2), root, s * 0.032 + 0.004, 0.017, 0.098);
    const brow = mesh(new THREE.CapsuleGeometry(0.004, 0.022, 4, 8), hair, root, s * 0.033, 0.038, 0.088);
    brow.rotation.z = Math.PI / 2 + s * 0.12;
  }
  mesh(new THREE.SphereGeometry(0.011, 12, 10), skin, root, 0, -0.008, 0.097).scale.set(1, 0.9, 0.8);
  const smile = mesh(new THREE.TorusGeometry(0.02, 0.0035, 8, 20, Math.PI * 0.8), mat('#5a2a22', 0.5), root, 0, -0.03, 0.089);
  smile.rotation.z = Math.PI + Math.PI * 0.1;

  // Hair
  const capGeo = new THREE.SphereGeometry(headR * 1.06, 40, 20, 0, Math.PI * 2, 0, Math.PI * 0.52);
  const addCap = () => {
    const cap = mesh(capGeo, hair, root, 0, 0.012, -0.01);
    cap.scale.set(female ? 0.9 : 0.94, 1.12, 1.02);
    cap.rotation.x = -0.4;
  };
  switch (a.hair) {
    case 'short':
      addCap();
      break;
    case 'afro':
      addCap();
      mesh(new THREE.SphereGeometry(0.15, 32, 20), hair, root, 0, 0.055, -0.05).scale.set(1.05, 0.88, 0.85);
      break;
    case 'bun':
      addCap();
      mesh(new THREE.SphereGeometry(0.045, 20, 14), hair, root, 0, 0.1, -0.075);
      break;
    case 'ponytail': {
      addCap();
      const tail = mesh(new THREE.CapsuleGeometry(0.025, 0.16, 6, 12), hair, root, 0, -0.06, -0.115);
      tail.rotation.x = 0.2;
      break;
    }
    case 'braids':
    case 'dreads': {
      addCap();
      const braids = a.hair === 'braids';
      const n = braids ? 16 : 18;
      const len = braids ? 0.3 : 0.2;
      for (let i = 0; i < n; i++) {
        const t = Math.PI * 0.1 + (i / (n - 1)) * Math.PI * 0.8;
        const strand = mesh(
          new THREE.CylinderGeometry(braids ? 0.009 : 0.012, braids ? 0.007 : 0.01, len, 6),
          hair,
          root,
          Math.cos(t) * 0.085,
          0.02 - len / 2,
          -Math.sin(t) * 0.08,
        );
        strand.rotation.z = Math.cos(t) * 0.12;
      }
      break;
    }
    // 'bald': nothing
  }

  // Hats
  const afroLift = a.hair === 'afro' ? 0.07 : 0;
  switch (a.hat) {
    case 'cap': {
      const dome = mesh(new THREE.SphereGeometry(0.112, 32, 14, 0, Math.PI * 2, 0, Math.PI / 2), shirt, root, 0, 0.018, -0.006);
      dome.scale.set(0.98, 1.15, 1.06);
      const brim = mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.01, 24, 1, false, -Math.PI / 2, Math.PI), mat(a.secondaryColor, 0.7), root, 0, 0.045, 0.06);
      brim.rotation.x = 0.18;
      brim.scale.set(1, 1, 1.1);
      break;
    }
    case 'beanie': {
      const beanie = mat(a.secondaryColor, 0.9);
      mesh(new THREE.SphereGeometry(0.114, 32, 14, 0, Math.PI * 2, 0, Math.PI / 2), beanie, root, 0, 0.022, -0.004).scale.set(0.98, 1.05, 1.07);
      const cuff = mesh(new THREE.TorusGeometry(0.1, 0.02, 12, 32), shirt, root, 0, 0.03, -0.004);
      cuff.rotation.x = Math.PI / 2;
      mesh(new THREE.SphereGeometry(0.03, 14, 10), shirt, root, 0, 0.152, -0.01);
      break;
    }
    case 'tophat': {
      const black = mat('#1b1a18', 0.45);
      const hat = new THREE.Group();
      hat.position.set(0, 0.1 + afroLift, -0.005);
      hat.rotation.z = -0.08;
      root.add(hat);
      mesh(new THREE.CylinderGeometry(0.135, 0.135, 0.012, 32), black, hat);
      mesh(new THREE.CylinderGeometry(0.085, 0.092, 0.17, 32), black, hat, 0, 0.09, 0);
      mesh(new THREE.CylinderGeometry(0.094, 0.094, 0.03, 32), shirt, hat, 0, 0.025, 0);
      break;
    }
    case 'crown': {
      const gold = mat(GOLD, 0.28, 0.85);
      const crown = new THREE.Group();
      crown.position.set(0, 0.1 + afroLift, -0.005);
      root.add(crown);
      mesh(new THREE.CylinderGeometry(0.085, 0.08, 0.05, 32, 1, true), gold, crown);
      for (let i = 0; i < 6; i++) {
        const t = (i / 6) * Math.PI * 2;
        mesh(new THREE.ConeGeometry(0.018, 0.05, 12), gold, crown, Math.sin(t) * 0.08, 0.045, Math.cos(t) * 0.08);
      }
      mesh(new THREE.SphereGeometry(0.012, 12, 10), mat('#d6263b', 0.2), crown, 0, 0.005, 0.086);
      break;
    }
  }

  // Accessories
  switch (a.accessory) {
    case 'glasses': {
      const frame = mat('#1d1b19', 0.35, 0.4);
      for (const s of [-1, 1]) mesh(new THREE.TorusGeometry(0.024, 0.0042, 10, 24), frame, root, s * 0.035, 0.012, 0.1);
      const bridge = mesh(new THREE.TorusGeometry(0.011, 0.0035, 8, 16, Math.PI), frame, root, 0, 0.014, 0.102);
      bridge.rotation.z = 0;
      break;
    }
    case 'beard': {
      const beard = mesh(new THREE.SphereGeometry(0.104, 32, 16, 0, Math.PI * 2, Math.PI * 0.62, Math.PI * 0.38), hair, root, 0, -0.008, 0.006);
      beard.scale.set(0.92, 1.12, 1.02);
      break;
    }
    case 'earrings':
      for (const s of [-1, 1]) mesh(new THREE.TorusGeometry(0.012, 0.0032, 10, 20), mat(GOLD, 0.25, 0.85), root, s * 0.082, -0.04, 0.004);
      break;
    case 'scarf': {
      const scarf = mesh(new THREE.TorusGeometry(0.066, 0.03, 14, 28), mat(a.secondaryColor, 0.9), root, 0, -0.15, 0.005);
      scarf.rotation.x = Math.PI / 2 - 0.15;
      scarf.scale.set(1.08, 0.85, 1);
      break;
    }
    case 'backpack':
      for (const s of [-1, 1]) {
        const strap = mesh(new THREE.BoxGeometry(0.022, 0.012, 0.16), mat('#6b4a2b', 0.7), root, s * 0.085, -0.19, 0.0);
        strap.rotation.x = -0.15;
      }
      break;
  }
  return root;
}

/**
 * Renders the avatar's face to a PNG data URL using the game's shared renderer (off-screen),
 * cached per avatar so repeated calls are free.
 */
export function renderPortrait(renderer: THREE.WebGLRenderer, avatar: Avatar): string {
  const key = JSON.stringify(avatar);
  const hit = cache.get(key);
  if (hit) return hit;

  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight('#ffffff', '#8b8f6e', 1.4));
  const key1 = new THREE.DirectionalLight('#fff6e8', 2.3);
  key1.position.set(1.5, 2.5, 2.5);
  const fill = new THREE.DirectionalLight('#ffffff', 0.6);
  fill.position.set(-2, 1, 2);
  const rim = new THREE.DirectionalLight('#e9ffd0', 1.5);
  rim.position.set(-2, 2, -2.5);
  scene.add(key1, fill, rim);
  const bust = buildBust(avatar);
  scene.add(bust);

  // Tall hats need more headroom.
  const tall = avatar.hat === 'tophat' || avatar.hat === 'crown';
  const camera = new THREE.PerspectiveCamera(26, 1, 0.05, 10);
  camera.position.set(0.12, tall ? 0.07 : 0.03, tall ? 0.98 : 0.8);
  camera.lookAt(0, tall ? 0.01 : -0.03, 0);

  const target = new THREE.WebGLRenderTarget(SIZE, SIZE, { samples: 4 });
  target.texture.colorSpace = THREE.SRGBColorSpace;
  const prevTarget = renderer.getRenderTarget();
  const prevClear = renderer.getClearAlpha();
  renderer.setRenderTarget(target);
  renderer.setClearAlpha(0);
  renderer.clear();
  renderer.render(scene, camera);
  const pixels = new Uint8Array(SIZE * SIZE * 4);
  renderer.readRenderTargetPixels(target, 0, 0, SIZE, SIZE, pixels);
  renderer.setRenderTarget(prevTarget);
  renderer.setClearAlpha(prevClear);
  target.dispose();
  disposeObject(scene);

  // WebGL rows are bottom-up; flip into a canvas.
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = SIZE;
  const g = canvas.getContext('2d');
  if (!g) return '';
  const img = g.createImageData(SIZE, SIZE);
  const row = SIZE * 4;
  for (let y = 0; y < SIZE; y++) img.data.set(pixels.subarray((SIZE - 1 - y) * row, (SIZE - y) * row), y * row);
  g.putImageData(img, 0, 0);
  const url = canvas.toDataURL('image/png');
  cache.set(key, url);
  return url;
}
