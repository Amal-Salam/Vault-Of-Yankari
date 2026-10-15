import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  assetsInclude: ['**/*.glb'],
  build: { target: 'es2020', chunkSizeWarningLimit: 1500, assetsInlineLimit: 0 },
});
