import * as THREE from 'three';
import type { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import type { GameContext, GameScene, SceneId } from './types';

export type SceneFactory = () => GameScene;

const BLOOM_DEFAULTS = { strength: 0.55, radius: 0.5, threshold: 0.82 };

/** Owns the active scene: fade out → exit old → enter new → fade in. */
export class SceneManager {
  private current: GameScene | null = null;
  private busy = false;
  private readonly empty = new THREE.Scene();

  constructor(
    private readonly ctx: GameContext,
    private readonly factories: Record<SceneId, SceneFactory>,
    private readonly renderPass: RenderPass,
  ) {
    renderPass.scene = this.empty;
  }

  get active(): GameScene | null {
    return this.current;
  }

  async goTo(id: SceneId): Promise<void> {
    if (this.busy) return;
    this.busy = true;
    const { ctx } = this;
    try {
      await ctx.ui.fade(1, 0.5);
      if (this.current) {
        this.current.exit();
        this.current = null;
        this.renderPass.scene = this.empty;
      }
      ctx.audio.stopAll();
      ctx.ui.clear();
      ctx.cinema.reset();
      this.resetView();

      const next = this.factories[id]();
      await next.enter(ctx);
      this.current = next;
      this.renderPass.scene = next.scene;
      if (import.meta.env.DEV) console.info(`[scene] ${id}`, { ...ctx.renderer.info.memory });
      await ctx.ui.fade(0, 0.7);
    } catch (err) {
      console.error(`[scene] ${id} failed to load`, err);
      ctx.ui.title('Something went wrong', 'The game files could not load · refresh to try again', Infinity, 'danger');
      void ctx.ui.fade(0.6, 0.4);
    } finally {
      this.busy = false;
    }
  }

  update(dt: number): void {
    this.current?.update(dt);
  }

  afterRender(renderer: THREE.WebGLRenderer): void {
    this.current?.afterRender?.(renderer);
  }

  private resetView(): void {
    const { camera, bloom, renderer, grade } = this.ctx;
    grade.reset();
    camera.fov = 50;
    camera.near = 0.1;
    camera.far = 500;
    camera.position.set(0, 2, 8);
    camera.quaternion.identity();
    camera.updateProjectionMatrix();
    bloom.strength = BLOOM_DEFAULTS.strength;
    bloom.radius = BLOOM_DEFAULTS.radius;
    bloom.threshold = BLOOM_DEFAULTS.threshold;
    renderer.toneMappingExposure = 1;
  }
}
