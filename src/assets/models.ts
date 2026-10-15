// Model files are bundled into dist/assets/ (with content hashes) rather than copied from public/,
// because start.ng's host serves the build's assets/ folder but not arbitrary extra folders.
import agent from './models/agent.glb?url';
import antelope from './models/antelope.glb?url';
import baboon from './models/baboon.glb?url';
import elephant from './models/elephant.glb?url';
import guard from './models/guard.glb?url';
import hippo from './models/hippo.glb?url';
import raptor from './models/raptor.glb?url';

export const MODELS = { agent, antelope, baboon, elephant, guard, hippo, raptor } as const;
