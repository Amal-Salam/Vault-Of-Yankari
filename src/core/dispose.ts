import * as THREE from 'three';

export function disposeMaterial(material: THREE.Material): void {
  for (const value of Object.values(material)) {
    if (value instanceof THREE.Texture) value.dispose();
  }
  if (material instanceof THREE.ShaderMaterial) {
    for (const uniform of Object.values(material.uniforms)) {
      if (uniform.value instanceof THREE.Texture) uniform.value.dispose();
    }
  }
  material.dispose();
}

export function disposeObject(root: THREE.Object3D): void {
  root.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    mesh.geometry?.dispose();
    const material = mesh.material as THREE.Material | THREE.Material[] | undefined;
    if (material) for (const m of Array.isArray(material) ? material : [material]) disposeMaterial(m);
    if ((obj as THREE.InstancedMesh).isInstancedMesh) (obj as THREE.InstancedMesh).dispose();
    if ((obj as THREE.Light).isLight) (obj as THREE.Light).dispose();
  });
}

export function disposeScene(scene: THREE.Scene): void {
  disposeObject(scene);
  if (scene.background instanceof THREE.Texture) scene.background.dispose();
  scene.clear();
}
