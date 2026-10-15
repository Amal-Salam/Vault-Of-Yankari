import gsap from 'gsap';
import type { Input } from '../core/Input';

export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className: string,
  parent?: HTMLElement,
  text?: string,
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  node.className = className;
  if (text !== undefined) node.textContent = text;
  parent?.appendChild(node);
  return node;
}

export type TitleVariant = 'normal' | 'small' | 'danger';

/** A row in a controls legend or briefing: key caps plus what they do. */
export interface ControlRow {
  keys: string[]; // e.g. ['W', '↑']; empty for a plain line of text
  label: string;
  id?: string;
}

/** Renders text where [KEY] becomes a key cap, e.g. "Hold [↑] to boost". */
export function withKeys(parent: HTMLElement, text: string): void {
  text.split(/(\[[^\]]+\])/).forEach((part) => {
    if (!part) return;
    if (part.startsWith('[') && part.endsWith(']')) el('kbd', '', parent, part.slice(1, -1));
    else parent.append(part);
  });
}

function keyRow(parent: HTMLElement, row: ControlRow): HTMLElement {
  const r = el('div', 'krow', parent);
  const keys = el('span', 'keys', r);
  row.keys.forEach((k, i) => {
    if (i > 0) keys.append(' ');
    el('kbd', '', keys, k);
  });
  el('span', 'what', r, row.label);
  return r;
}

/** Stops on the route through Yankari, in story order. */
export const ROUTE = ['Wikki Warm Spring', 'The Vault', 'Gaji River', 'Kalban Hill', 'Main Gate'] as const;

/** One subtitled crew radio line. The 2049 crew wear auto-translator chips. */
export interface RadioLine {
  who: string;
  lang: string;
  text: string;
  en: string;
}

/** HTML overlays: letterbox, fades, title cards, captions, hints, HUD container, skip/mute buttons. */
export class UI {
  readonly root = el('div', 'ui');
  private readonly hudEl: HTMLDivElement;
  private readonly flashEl: HTMLDivElement;
  private readonly bars: HTMLDivElement[];
  private readonly titleEl: HTMLDivElement;
  private readonly titleMain: HTMLDivElement;
  private readonly titleSub: HTMLDivElement;
  private readonly captionEl: HTMLDivElement;
  private readonly hintEl: HTMLDivElement;
  private readonly skipBtn: HTMLButtonElement;
  private readonly muteBtn: HTMLButtonElement;
  private readonly noticeEl: HTMLDivElement;
  private readonly fadeEl: HTMLDivElement;
  private readonly radioEl: HTMLDivElement;
  private readonly promptEl: HTMLDivElement;
  private readonly briefEl: HTMLDivElement;
  private readonly mapEl: HTMLDivElement;

  constructor(input: Input) {
    document.body.appendChild(this.root);
    this.hudEl = el('div', 'hud', this.root);
    this.flashEl = el('div', 'flash', this.root);
    this.bars = [el('div', 'bar top', this.root), el('div', 'bar bottom', this.root)];
    this.titleEl = el('div', 'title', this.root);
    this.titleMain = el('div', 'main', this.titleEl);
    this.titleSub = el('div', 'sub', this.titleEl);
    this.captionEl = el('div', 'caption', this.root);
    this.hintEl = el('div', 'hint', this.root);
    this.radioEl = el('div', 'radio', this.root);
    this.promptEl = el('div', 'prompt', this.root);
    this.briefEl = el('div', 'brief', this.root);
    this.mapEl = el('div', 'route', this.root);
    this.fadeEl = el('div', 'fade', this.root);
    this.skipBtn = el('button', 'btn skip', this.root, 'SKIP ▸');
    this.skipBtn.addEventListener('click', () => input.trigger('skip'));
    this.muteBtn = el('button', 'btn mute', this.root, '🔊');
    this.muteBtn.title = 'Mute (M)';
    this.muteBtn.addEventListener('click', () => input.trigger('mute'));
    this.noticeEl = el('div', 'notice', this.root);
  }

  letterbox(on: boolean, duration = 0.9): void {
    gsap.to(this.bars, { height: on ? '11vh' : '0vh', duration, ease: 'power2.inOut', overwrite: true });
  }

  fade(to: number, duration = 0.6): Promise<void> {
    return new Promise((resolve) => {
      gsap.to(this.fadeEl, { opacity: to, duration, ease: 'power1.inOut', overwrite: true, onComplete: resolve });
    });
  }

  /** Title card. `hold = Infinity` keeps it up until `clearTitle()`. */
  title(main: string, sub = '', hold = 2.5, variant: TitleVariant = 'normal'): void {
    this.titleMain.textContent = main;
    this.titleSub.textContent = sub;
    this.titleEl.className = `title ${variant}`;
    gsap.killTweensOf([this.titleEl, this.titleMain]);
    const tl = gsap.timeline();
    tl.fromTo(this.titleEl, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' }).fromTo(
      this.titleMain,
      { letterSpacing: '0.45em', scale: 1.05 },
      { letterSpacing: '0.12em', scale: 1, duration: Math.min(hold, 4) + 1.2, ease: 'power3.out' },
      0,
    );
    if (Number.isFinite(hold)) tl.to(this.titleEl, { opacity: 0, duration: 0.6 }, 0.6 + hold);
  }

  clearTitle(): void {
    gsap.killTweensOf([this.titleEl, this.titleMain]);
    gsap.to(this.titleEl, { opacity: 0, duration: 0.4 });
  }

  caption(text: string, hold = 3.5): void {
    this.captionEl.textContent = text;
    gsap.killTweensOf(this.captionEl);
    gsap
      .timeline()
      .fromTo(this.captionEl, { opacity: 0, x: -12 }, { opacity: 1, x: 0, duration: 0.6 })
      .to(this.captionEl, { opacity: 0, duration: 0.6 }, `+=${hold}`);
  }

  hint(text: string | null): void {
    if (text) {
      this.hintEl.replaceChildren();
      withKeys(this.hintEl, text);
    }
    this.hintEl.classList.toggle('on', !!text);
  }

  flash(color = '#ff2a2a', strength = 0.55, duration = 0.5): void {
    this.flashEl.style.background = color;
    gsap.fromTo(this.flashEl, { opacity: strength }, { opacity: 0, duration, overwrite: true });
  }

  /** Crew radio line: original language on top, auto-translated English below. */
  radio(line: RadioLine, hold = 3.6): void {
    const r = this.radioEl;
    r.replaceChildren();
    el('div', 'who', r, `◉ ${line.who}`);
    el('div', 'chip', r, `AUTO-TRANSLATE · ${line.lang.toUpperCase()} → EN`);
    el('div', 'orig', r, line.text);
    el('div', 'en', r, line.en);
    gsap.killTweensOf(r);
    gsap.timeline().fromTo(r, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.35 }).to(r, { opacity: 0, duration: 0.5 }, `+=${hold}`);
  }

  /** Small route map of the reserve with the current stop highlighted. */
  routeMap(step: number, hold = 4.5): void {
    const m = this.mapEl;
    m.replaceChildren();
    el('div', 'head', m, 'YANKARI GAME RESERVE · BAUCHI STATE, NIGERIA');
    const list = el('div', 'stops', m);
    ROUTE.forEach((name, i) => {
      const stop = el('div', `stop${i < step ? ' done' : ''}${i === step ? ' here' : ''}`, list);
      el('i', '', stop);
      el('span', '', stop, name);
    });
    gsap.killTweensOf(m);
    gsap.timeline().fromTo(m, { opacity: 0, x: 16 }, { opacity: 1, x: 0, duration: 0.5, delay: 0.4 }).to(m, { opacity: 0, duration: 0.6 }, `+=${hold}`);
  }

  /** Always-on controls panel in the corner. Returns rows by id so scenes can light up active keys. */
  legend(title: string, rows: ControlRow[]): Map<string, HTMLElement> {
    const panel = el('div', 'legend', this.hudEl);
    el('div', 'ltitle', panel, title);
    const byId = new Map<string, HTMLElement>();
    for (const row of rows) {
      const r = keyRow(panel, row);
      if (row.id) byId.set(row.id, r);
    }
    return byId;
  }

  /** Situational tip with key caps, e.g. "Raptor close! Hold [↑] to boost". */
  prompt(text: string, hold = 2.2): void {
    const p = this.promptEl;
    p.replaceChildren();
    withKeys(p, text);
    gsap.killTweensOf(p);
    gsap.timeline().fromTo(p, { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 0.25, ease: 'back.out(2)' }).to(p, { opacity: 0, duration: 0.4 }, `+=${hold}`);
  }

  /** Full briefing card shown before a playable scene; the scene closes it when SPACE is pressed. */
  briefing(title: string, goal: string, rows: ControlRow[], footer: string): void {
    const b = this.briefEl;
    b.replaceChildren();
    const card = el('div', 'card', b);
    el('div', 'btitle', card, title);
    el('div', 'goal', card, goal);
    const list = el('div', 'rows', card);
    for (const row of rows) keyRow(list, row);
    const go = el('div', 'go', card);
    withKeys(go, footer);
    b.classList.add('on');
  }

  closeBriefing(): void {
    this.briefEl.classList.remove('on');
  }

  hud(): HTMLDivElement {
    return this.hudEl;
  }

  showSkip(on: boolean): void {
    this.skipBtn.classList.toggle('on', on);
  }

  setMuted(muted: boolean): void {
    this.muteBtn.textContent = muted ? '🔇' : '🔊';
  }

  notice(text: string): void {
    this.noticeEl.textContent = text;
  }

  /** Called between scenes. */
  clear(): void {
    gsap.killTweensOf([this.titleEl, this.titleMain, this.captionEl, this.flashEl, this.radioEl, this.mapEl, this.promptEl]);
    this.promptEl.style.opacity = '0';
    this.closeBriefing();
    this.radioEl.style.opacity = '0';
    this.mapEl.style.opacity = '0';
    this.titleEl.style.opacity = '0';
    this.captionEl.style.opacity = '0';
    this.flashEl.style.opacity = '0';
    this.hudEl.replaceChildren();
    this.hint(null);
    this.showSkip(false);
  }
}
