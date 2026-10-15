# AGENTS.md — Vault of Yankari

This file is the source of truth for anyone (human or AI agent) working on this repo.
It is both the product spec (PRD) and the working rules. Read it fully before changing code.

---

## 1. Product overview

**Vault of Yankari** is a single-player, cinematic 3D browser game built with three.js and published on the start.ng platform (HNG15, Lesson 8 task).

**Logline:** In 2049, a crew sneaks into a secret bio-vault hidden beneath Yankari Game Reserve, entered through an underwater cave under Wikki Warm Spring. Mid-heist, the alarm trips, containment fails, and the thing they came to steal wakes up. The heist becomes a fight for survival, ending in a dawn jeep chase across the savanna.

**Genre:** heist thriller that turns into creature survival (a From Dusk Till Dawn-style genre flip).
**Feel:** an action movie you play. Letterbox bars, camera cuts, slow-motion, title cards, a score.
**Session length:** 6–10 minutes for a full run.

### Task requirements (from HNG15 brief, non-negotiable)
1. Built on **three.js**.
2. Published on **start.ng**.
3. Uses the **logged-in start.ng user**.
4. **The user's data must centrally affect how their character looks.**

### Goals
- A complete, playable story: beginning → twist → ending.
- Every player's character looks visibly different, derived from their start.ng profile.
- Feels cinematic, not like a tech demo.
- Runs smoothly on a mid-range laptop and a modern phone browser.

### Non-goals
- Multiplayer or real-time networking.
- A custom backend (the build is a static site).
- Custom 3D modelling (use free licensed assets only).
- Save games, settings menus beyond mute/skip.

### Gameplay vs cutscene ratio
At least **80% playable, at most 20% cutscene**. This is a game, not a film. Any cutscene longer than 15 seconds must be skippable.

---

## 2. The user and character styling (core requirement)

### User source
All user data comes through one module: `src/user/getUser.ts`.

```ts
export interface StartNgUser {
  id: string;
  username: string;
  displayName?: string;
  avatarUrl?: string;
  track?: string; // e.g. "frontend", "backend", "devops"
}
export async function getUser(): Promise<StartNgUser>;
```

- Players sign up and sign in **on start.ng itself**, never inside the game. The game never asks for a username; it only reads who is already signed in, so their start.ng username applies the moment they open the game. To change their name, they change it on start.ng.
- **How the game gets the user (start.ng protocol):** the game is served at `https://<game>.start.ng`. It loads `https://start.ng/connect` in a hidden iframe and posts `{ type: 'startng:whoami', requestId }`. start.ng reads the player's session token on its own origin and replies `{ type: 'startng:user', user: { id, name, style } | null, requestId }`. `style` is the character the player made in start.ng's character creator (`primaryColor`, `secondaryColor`, `skinColor`, `hairColor`, `hair`, `hat`, `accessory`, `body`).
- The same channel also offers `startng:score` (save a score) and `startng:leaderboard` (read top scores). Not used yet.
- `getUser()` order: the hidden testing shortcut `?user=<username>` (remove before final submission), the start.ng user, a fixed dev user (`tester`) in `npm run dev` only, otherwise guest. Locally, `http://<game>.start.localhost:<port>` is also accepted by start.ng for testing the protocol.
- **No other file may read user data directly.** This is what keeps the swap to a single file.
- If the user cannot be loaded, fall back to a guest user and show a small "Playing as guest" notice. Never crash.

### Styling
`src/user/styleFromUser.ts` turns a user into a `CharacterStyle`. It must be **deterministic**: the same username always gives the same look.

```ts
export interface CharacterStyle {
  codename: string;      // e.g. "Agent Lanfear-7"
  suitColor: string;     // hex
  accentColor: string;   // hex
  maskPattern: number;   // index into mask textures (0–7)
  visorTint: string;     // hex
}
```

- Hash the username (e.g. cyrb53 or FNV-1a) and derive every value from the hash.
- Colours must come from a curated palette so every combination looks good. No raw random RGB.
- When start.ng provides the player's character `style`, its `secondaryColor` becomes the suit and `primaryColor` the accent, so the agent matches their start.ng character. Mask pattern, visor tint and codename still come from the name hash.
- If `track` is present, it may pick the suit variant (e.g. frontend = light suit, backend = heavy suit, devops = utility harness).

### Where the styling must be visible
| Place | What |
|---|---|
| Cold open | Camera orbit around the styled player; title card "Starring {displayName or username}" |
| Player model | Suit colour, accent colour, mask pattern, visor tint |
| Crew ID badge (Vault scene HUD) | Avatar image + codename |
| Jeep (Escape scene) | Username decal on the side |
| End credits | Username and codename listed first |

---

## 3. Scenes (spec and acceptance criteria)

Every scene implements the `GameScene` interface (see §5). Build in **priority order** (P0 first).

### 01 — Cold Open (P0, cutscene, ~15s, skippable)
- Letterbox bars slide in. Night, Wikki Warm Spring with steam.
- GSAP camera orbit around the styled player and two crew NPCs.
- Title card: "VAULT OF YANKARI", then "Starring {name}".
- **Done when:** the styling is clearly visible, Skip works, and it moves to the next scene automatically.

### 02 — The Dive (P1, playable, ~1–2 min)
- Underwater cave: blue fog, caustic light texture, slow movement.
- Sweeping spotlights; entering a light cone restarts from the last checkpoint.
- **Done when:** the player can reach the vault door and is caught by the searchlights fairly.

### 03 — The Vault (P0, playable, ~1–2 min) — keycard heist
- Three guards patrol fixed waypoints with visible vision cones; crates block their sight.
- Each guard carries a glowing keycard on their belt. Sneak up **behind** a guard and press action to lift it.
- With 3 keycards, swipe them at the door console to open the vault (door lamps: red → amber when held → green when swiped).
- Being seen: you lose the most recent keycard (it returns to its guard) and get 2 s to hide. With no keycards yet, you go back to the entrance.
- Crew ID badge HUD shows avatar (helmet portrait for now) + codename. Keycard HUD shows 0–3.
- **Done when:** a first-time player finishes in 60–120s, and failing feels fair.
- *(Changed from the original 3-ring lock puzzle at Mal's request, 2026-10-15.)*

### 04 — The Twist (P0, cutscene, ~10s)
- The creature is **Specimen 0-YK, a resurrected velociraptor** (Quaternius CC0 model, re-skinned with glowing eyes).
- Lights go red, alarm sounds, containment glass cracks (texture swap + particles), creature wakes and lunges, camera shake, slow-motion beat.
- **Done when:** it lands as a dramatic moment and leads straight into the next playable scene.

### 05 — The Hunt (P1, playable, ~1–2 min)
- Dark corridors. The player's torch is a spotlight attached to the player.
- Creature follows waypoints; speeds up when it has line of sight to the player.
- Tension comes from lighting and sound, not complex AI.
- **Done when:** the player can reach the exit, and getting caught restarts the scene.

### 06 — Dawn Escape (P0, playable, ~1–2 min)
- Jeep auto-drives forward across the savanna at sunrise. The player steers left/right.
- Yankari obstacles: elephant families and baboon troops crossing, bounding antelope, fallen baobab limbs, termite mounds, rocks, and hippos in the **Gaji River ford** (which slows the jeep). Obstacles ahead get a pulsing red ground marker.
- The raptor chases from behind (rear cam inset) and leaps closer after each hit. Kalban Hill on the horizon; finish at the Yankari main gate.
- Chase camera behind and above the jeep; **C** toggles a hood/driver camera. Username decal on the jeep.
- 3 hits = caught → retry. **Caught 3 times in a row → back to the Cold Open.** Reaching the gate → end credits.
- **Done when:** it's playable with keyboard and touch, and a full run finishes at 60–90s.

### End credits (P0)
- Rolling credits: "Starring {name} as {codename}", then asset credits from `CREDITS.md`.
- Replay button.

### Yankari identity (applies to every scene)
- Real places: Wikki Warm Spring (boardwalk, steps, sign), the vault beneath it, the Gaji River, Kalban Hill, the main gate (Bauchi State).
- Real wildlife: elephants, baboons, hippos, antelope.
- A route map card (Wikki → Vault → Gaji River → Kalban Hill → Main Gate) appears as each scene starts.
- Crew radio in Nigerian languages (Hausa, Yoruba, Igbo, Pidgin) with an "auto-translate chip" English subtitle; it's 2049.

### MVP definition
**MVP = 01 + 03 + 04 + 06 + credits.** That is a complete story. 02 and 05 are added only once the MVP is solid.

---

## 4. Controls

| Action | Keyboard | Touch |
|---|---|---|
| Move | WASD / arrow keys | On-screen joystick (left) |
| Action / interact | Space | Button (right) |
| Torch on/off (Hunt) | F | Button |
| Skip cutscene | Esc / Enter | "Skip" button |
| Mute | M | Speaker icon |
| Switch camera (Escape) | C | — |
| Boost (Escape, uses meter) | W / ↑ (hold) | — |
| Brake (Escape; raptor closes in, can bite) | S / ↓ (hold) | — |
| Drift (Escape; recharges boost) | Shift + steer | — |
| Jink sidestep (Escape; brief i-frames) | Double-tap A / D | — |
| Debris kick-up (Escape; raptor stumbles, 4 s cooldown) | Space | — |

All input goes through `src/core/Input.ts`. Scenes never read raw DOM events.

---

## 5. Architecture

### Stack
| Tool | Purpose | License |
|---|---|---|
| three.js | Rendering | MIT |
| Vite | Dev server, build | MIT |
| TypeScript | Language | Apache-2.0 |
| GSAP | Cutscene camera and timing | Free (standard GSAP license) |
| Howler.js | Audio | MIT |
| Rapier (`@dimforge/rapier3d-compat`) | Physics, **only if needed** for the Escape scene | Apache-2.0 |

Do not add other dependencies without a written reason in the PR description.

### Folder structure
```
src/
  main.ts                 # boot: load user → build style → start SceneManager
  user/
    getUser.ts            # the ONLY place user data enters the app
    styleFromUser.ts
    palette.ts
  core/
    SceneManager.ts       # load/unload scenes, fade transitions
    CinemaCamera.ts       # letterbox, cuts, shake, slow-motion
    Input.ts
    Audio.ts
    Assets.ts             # GLTF/Draco/texture loading with caching
  characters/
    Player.ts             # applies CharacterStyle
    Creature.ts
  scenes/
    01_ColdOpen.ts
    02_Dive.ts
    03_Vault.ts
    04_Twist.ts
    05_Hunt.ts
    06_Escape.ts
    Credits.ts
  ui/                     # HTML/CSS overlays: title cards, HUD, credits
public/
  models/  textures/  audio/
CREDITS.md
AGENTS.md
```

### Scene interface
```ts
export interface GameScene {
  enter(ctx: GameContext): Promise<void>; // load assets, build scene
  update(dt: number): void;               // per-frame logic
  exit(): void;                           // dispose geometries, materials, textures, listeners
}
```
- One shared `WebGLRenderer` for the whole game.
- `SceneManager` calls `exit()` on the old scene before `enter()` on the next, with a fade in between.
- `GameContext` holds the renderer, camera, input, audio, user, and style.

---

## 6. Assets and licensing

**Every asset must be free to use and recorded in `CREDITS.md`** with: name, author, source URL, license.

| Source | Use for | License notes |
|---|---|---|
| Quaternius (quaternius.com) | Rigged characters, creatures, nature | CC0, no attribution required (credit anyway) |
| Poly Pizza (poly.pizza) | Jeep, rocks, trees, animals | **Mixed CC0 / CC-BY.** Check each model; CC-BY needs attribution |
| Mixamo | Extra character animations | Free with an Adobe account, royalty-free |
| Pixabay Music | Score | Pixabay license, free, no attribution required |
| Incompetech | Score (alternative) | CC-BY 4.0, **attribution required** |
| Freesound | Sound effects | **Mixed.** Use CC0 or CC-BY only. **Never CC-BY-NC.** |
| ambientCG / Poly Haven | Textures, HDRIs | CC0 |

Rules:
- No asset enters `public/` without a `CREDITS.md` entry in the same commit.
- No ripped or "found online" assets. No NC (non-commercial) licenses.
- Compress models with Draco (`gltf-transform`). Max texture size 1024px (2048px for the hero character only).

---

## 7. Performance budget

- Target 60 fps on a mid-range laptop, 30+ fps on a modern phone.
- Under 100k triangles on screen per scene.
- Initial load under 10 MB; load each scene's assets lazily in `enter()`.
- Device pixel ratio capped at 2.
- Shadows only from one key light per scene.
- Every `exit()` must dispose what its scene created. Check `renderer.info.memory` doesn't grow between scenes.

---

## 8. Milestones

| Day | Deliverable |
|---|---|
| 1 | Vite + TS + three.js setup, SceneManager, CinemaCamera, mock `getUser`, `styleFromUser`, styled player on screen |
| 2 | 01 Cold Open + 04 Twist (cutscenes) |
| 3 | 03 Vault puzzle |
| 4 | 06 Escape chase + credits → **MVP complete** |
| 5 | 02 Dive + 05 Hunt, or polish if behind |
| 6 | Audio, title cards, touch controls, performance pass, deploy, publish on start.ng |

---

## 9. Definition of done (whole game)

- [ ] A full run plays start to finish with no console errors.
- [ ] Two different usernames (`?user=alice`, `?user=bob`) produce visibly different characters, and the same username always looks identical.
- [ ] Username appears in the cold open, HUD badge, jeep decal, and credits.
- [ ] Keyboard and touch both work.
- [ ] All cutscenes are skippable.
- [ ] Every asset is listed in `CREDITS.md` with a valid free license.
- [ ] Performance budget met.
- [ ] `getUser.ts` is the only file that reads user data.
- [ ] Published and playable on start.ng (once the platform is live).

---

## 10. Rules for agents

- Read this file before every task. If a change conflicts with it, stop and ask.
- Keep changes small and scoped to one scene or system at a time.
- Run `npm run build` and fix all TypeScript errors before declaring work done.
- Do not add dependencies, assets, or new folders without a reason.
- Do not bypass `getUser.ts`, `Input.ts`, or `Assets.ts`.
- **Never push, open PRs, open issues, or comment on GitHub without Mal's explicit approval.** Draft the commit message or PR description and hand it over instead.
- When unsure about gameplay feel, prefer simpler mechanics with better camera, lighting and sound.

## Publishing on start.ng
- start.ng publishes from the GitHub repo and serves the **committed build** (`dist/`) as-is at `https://vault-of-yankari.start.ng`. It does **not** run `npm run build`.
- So after any change: `npm run build`, then commit `dist/` together with the source.
- start.ng's host only serves certain file types: `.html`, `.js`, `.css` and images work; **`.glb` is refused (404) wherever it sits.** So models are imported as `./models/x.glb?inline`, which our Vite plugin (`vite.config.ts`) turns into a lazily-loaded JS chunk holding the model as a data URL. Use the same approach for any other file type start.ng refuses (check with `curl -I https://vault-of-yankari.start.ng/assets/<file>` after publishing).

## Open questions
- Does start.ng impose size or iframe/sandbox limits? (6.5 MB build works so far.)
