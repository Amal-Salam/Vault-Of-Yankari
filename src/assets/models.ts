// start.ng's host only serves certain file types (.js, .css, images…) and refuses .glb.
// So each model is inlined into its own lazily-loaded JS chunk as a data URL: still one file
// per model, fetched only when a scene needs it.
export const MODELS = {
  agent: () => import('./models/agent.glb?inline').then((m) => m.default as string),
  antelope: () => import('./models/antelope.glb?inline').then((m) => m.default as string),
  baboon: () => import('./models/baboon.glb?inline').then((m) => m.default as string),
  elephant: () => import('./models/elephant.glb?inline').then((m) => m.default as string),
  guard: () => import('./models/guard.glb?inline').then((m) => m.default as string),
  hippo: () => import('./models/hippo.glb?inline').then((m) => m.default as string),
  raptor: () => import('./models/raptor.glb?inline').then((m) => m.default as string),
} as const;

export type ModelSource = (typeof MODELS)[keyof typeof MODELS];
