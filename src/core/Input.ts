// All input goes through here. Scenes poll `axis()` and `pressed()`; they never touch DOM events.

export type Action = 'action' | 'skip' | 'mute' | 'torch' | 'camera' | 'drift' | 'jinkLeft' | 'jinkRight';

const KEY_ACTIONS: Record<string, Action> = {
  Space: 'action',
  KeyC: 'camera',
  Escape: 'skip',
  Enter: 'skip',
  NumpadEnter: 'skip',
  KeyM: 'mute',
  KeyF: 'torch',
  ShiftLeft: 'drift',
  ShiftRight: 'drift',
};

const DOUBLE_TAP_MS = 260;
const JINK_KEYS: Record<string, Action> = {
  KeyA: 'jinkLeft',
  ArrowLeft: 'jinkLeft',
  KeyD: 'jinkRight',
  ArrowRight: 'jinkRight',
};

const PREVENT_DEFAULT = new Set(['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']);

export class Input {
  private readonly held = new Set<string>();
  private readonly fired = new Set<Action>();
  private readonly lastTap = new Map<Action, number>();

  private readonly onKeyDown = (e: KeyboardEvent) => {
    if (PREVENT_DEFAULT.has(e.code)) e.preventDefault();
    this.held.add(e.code);
    const action = KEY_ACTIONS[e.code];
    if (action && !e.repeat) this.fired.add(action);
    // Double-tapping a direction fires a jink.
    const jink = JINK_KEYS[e.code];
    if (jink && !e.repeat) {
      const now = performance.now();
      if (now - (this.lastTap.get(jink) ?? -1e9) < DOUBLE_TAP_MS) {
        this.fired.add(jink);
        this.lastTap.delete(jink);
      } else {
        this.lastTap.set(jink, now);
      }
    }
  };
  private readonly onKeyUp = (e: KeyboardEvent) => this.held.delete(e.code);
  private readonly onBlur = () => this.held.clear();

  constructor() {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('blur', this.onBlur);
  }

  /** x: right = +1, y: forward/up = +1. Length is at most 1. */
  axis(): { x: number; y: number } {
    const k = this.held;
    let x = 0;
    let y = 0;
    if (k.has('KeyA') || k.has('ArrowLeft')) x -= 1;
    if (k.has('KeyD') || k.has('ArrowRight')) x += 1;
    if (k.has('KeyW') || k.has('ArrowUp')) y += 1;
    if (k.has('KeyS') || k.has('ArrowDown')) y -= 1;
    const len = Math.hypot(x, y);
    return len > 1 ? { x: x / len, y: y / len } : { x, y };
  }

  /** True while any key bound to the action is held. */
  isDown(action: Action): boolean {
    for (const code of this.held) if (KEY_ACTIONS[code] === action) return true;
    return false;
  }

  /** True only on the frame the action was triggered. */
  pressed(action: Action): boolean {
    return this.fired.has(action);
  }

  /** Lets on-screen buttons fire the same actions as keys. */
  trigger(action: Action): void {
    this.fired.add(action);
  }

  endFrame(): void {
    this.fired.clear();
  }

  dispose(): void {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('blur', this.onBlur);
  }
}
