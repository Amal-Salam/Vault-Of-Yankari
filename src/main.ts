import './ui/ui.css';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { GradePass } from './core/post';
import { getUser, watchUser } from './user/getUser';
import { styleFromUser } from './user/styleFromUser';
import { Input } from './core/Input';
import { AudioEngine } from './core/Audio';
import { CinemaCamera } from './core/CinemaCamera';
import { SceneManager, type SceneFactory } from './core/SceneManager';
import { particleScale } from './core/fx';
import type { GameContext, SceneId } from './core/types';
import { UI, el } from './ui/UI';
import { ColdOpen } from './scenes/01_ColdOpen';
import { Vault } from './scenes/03_Vault';
import { Twist } from './scenes/04_Twist';
import { Escape } from './scenes/06_Escape';
import { Credits } from './scenes/Credits';

const PIXEL_RATIO = Math.min(window.devicePixelRatio, 1.5); // under the AGENTS.md cap of 2; bloom is fill-rate heavy

const FACTORIES: Record<SceneId, SceneFactory> = {
  coldOpen: () => new ColdOpen(),
  vault: () => new Vault(),
  twist: () => new Twist(),
  escape: () => new Escape(),
  credits: () => new Credits(),
};

async function boot(): Promise<void> {
  const user = await getUser();
  const style = styleFromUser(user);
  document.documentElement.style.setProperty('--accent', style.accentColor);

  const canvas = document.createElement('canvas');
  canvas.id = 'game';
  document.body.prepend(canvas);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(PIXEL_RATIO);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 500);
  // Multisampled target: the composer otherwise loses the canvas' antialiasing.
  const target = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, { type: THREE.HalfFloatType, samples: 4 });
  const composer = new EffectComposer(renderer, target);
  composer.setPixelRatio(PIXEL_RATIO);
  const renderPass = new RenderPass(new THREE.Scene(), camera);
  const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.55, 0.5, 0.82);
  composer.addPass(renderPass);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  const grade = new GradePass();
  composer.addPass(grade);

  // One shared, soft studio environment for reflections on metal, glass and visors.
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envMap = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();

  const input = new Input();
  const audio = new AudioEngine();
  const ui = new UI(input);
  const cinema = new CinemaCamera(camera, ui);
  if (user.isGuest) ui.notice('Playing as guest');

  let manager: SceneManager | null = null;
  // The player may edit their start.ng avatar mid-session; keep user/style current and tell listeners.
  const userListeners = new Set<() => void>();
  watchUser(user, (next) => {
    Object.assign(user, next);
    Object.assign(style, styleFromUser(user));
    document.documentElement.style.setProperty('--accent', style.accentColor);
    userListeners.forEach((listener) => listener());
  });

  const ctx: GameContext = {
    renderer,
    camera,
    cinema,
    input,
    audio,
    ui,
    user,
    style,
    bloom,
    grade,
    envMap,
    goTo: (id) => void manager?.goTo(id),
    onUserChange: (listener) => {
      userListeners.add(listener);
      return () => userListeners.delete(listener);
    },
  };
  manager = new SceneManager(ctx, FACTORIES, renderPass);
  if (import.meta.env.DEV) Object.assign(window, { game: { ctx, manager } });

  const resize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    composer.setSize(w, h);
    particleScale.value = (h * PIXEL_RATIO) / 2;
  };
  window.addEventListener('resize', resize);
  resize();

  // Never play while the game isn't visible, and release audio when the page goes away.
  document.addEventListener('visibilitychange', () => audio.setSuspended(document.hidden));
  window.addEventListener('pagehide', () => audio.shutdown());

  // Browsers only allow audio after a gesture; unlock on the first one.
  const unlockAudio = () => audio.unlock();
  window.addEventListener('pointerdown', unlockAudio, { once: true });
  window.addEventListener('keydown', unlockAudio, { once: true });

  // ?scene=vault jumps straight to a scene (dev/testing).
  const requested = new URLSearchParams(window.location.search).get('scene') as SceneId | null;
  const firstScene: SceneId = requested && requested in FACTORIES ? requested : 'coldOpen';

  const start = el('div', 'start', ui.root);
  el('h1', '', start, 'VAULT OF YANKARI');
  el('div', 'tag', start, 'Yankari Game Reserve · 2049');
  const who = el('div', 'who', start, 'Playing as ');
  if (user.isGuest) {
    el('b', '', who, 'Guest');
    el('div', 'tag', start, 'Sign in on start.ng to play as yourself');
  } else {
    el('b', '', who, `@${user.username}`);
    who.append(` · ${style.codename}`);
  }
  el('div', 'go', start, 'CLICK OR PRESS ENTER');
  el('div', 'keys', start, 'WASD / ARROWS move · SPACE action · ESC skip · M mute');

  let started = false;
  const begin = () => {
    if (started) return;
    started = true;
    start.remove();
    audio.unlock();
    void manager?.goTo(firstScene);
  };
  start.addEventListener('click', begin);
  if (requested) begin();

  const clock = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    const dt = Math.min(clock.getDelta(), 0.05);
    if (input.pressed('mute')) ui.setMuted(audio.toggleMute());
    if (!started && (input.pressed('skip') || input.pressed('action'))) begin();
    manager?.update(dt * cinema.timeScale);
    grade.tick(dt, cinema.shakeLevel);
    cinema.beginFrame(dt);
    composer.render();
    manager?.afterRender(renderer);
    cinema.endFrame();
    input.endFrame();
  });
}

void boot();
