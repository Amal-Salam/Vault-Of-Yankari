import { readFileSync } from 'node:fs';
import { defineConfig, type Plugin } from 'vite';

/**
 * `import x from './model.glb?inline'` → a JS module whose default export is a base64 data URL.
 * start.ng's host refuses .glb files, so models ship inside (lazily loaded) JS chunks instead.
 */
function inlineGlb(): Plugin {
  return {
    name: 'inline-glb',
    enforce: 'pre',
    load(id) {
      const [file, query] = id.split('?');
      if (!file.endsWith('.glb') || query !== 'inline') return null;
      const data = readFileSync(file).toString('base64');
      return `export default "data:model/gltf-binary;base64,${data}";`;
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [inlineGlb()],
  build: { target: 'es2020', chunkSizeWarningLimit: 3000 },
});
