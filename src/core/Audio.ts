// Procedural score and sound effects via WebAudio. No audio files yet; when real
// tracks arrive (Pixabay/Incompetech), they can be layered in here behind the same API.

export type Sfx =
  | 'click' | 'lock' | 'miss' | 'spotted' | 'beep' | 'impact' | 'glass'
  | 'roar' | 'whoosh' | 'boom' | 'success' | 'splash' | 'trumpet' | 'skid' | 'kick' | 'boost';
export type Loop = 'ambience' | 'tension' | 'action' | 'alarm' | 'engine' | 'credits';

interface ToneOpts {
  type?: OscillatorType;
  vol?: number;
  to?: number;
  attack?: number;
  at?: number;
  filter?: number;
  dest?: AudioNode;
}

interface NoiseOpts {
  vol?: number;
  type?: BiquadFilterType;
  freq?: number;
  to?: number;
  q?: number;
  attack?: number;
  at?: number;
  dest?: AudioNode;
}

const MASTER_VOLUME = 0.8;

export class AudioEngine {
  muted = false;
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private noiseBuffer: AudioBuffer | null = null;
  private readonly loops = new Map<Loop, () => void>();
  private engine: { oscs: OscillatorNode[]; filter: BiquadFilterNode } | null = null;

  /** Must be called from a user gesture at least once (browser autoplay rules). */
  unlock(): void {
    if (!this.ctx) {
      const ctx = new AudioContext();
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -14;
      comp.ratio.value = 4;
      const master = ctx.createGain();
      master.gain.value = this.muted ? 0 : MASTER_VOLUME;
      master.connect(comp).connect(ctx.destination);
      const buffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
      this.ctx = ctx;
      this.master = master;
      this.noiseBuffer = buffer;
    }
    if (this.ctx.state === 'suspended') void this.ctx.resume();
  }

  /** Pause/resume all audio, e.g. when the tab is hidden. */
  setSuspended(suspended: boolean): void {
    if (!this.ctx) return;
    if (suspended) void this.ctx.suspend();
    else void this.ctx.resume();
  }

  /** Stop everything and release the audio device (page is closing). */
  shutdown(): void {
    this.stopAll();
    void this.ctx?.close();
    this.ctx = null;
    this.master = null;
  }

  toggleMute(): boolean {
    this.muted = !this.muted;
    if (this.ctx && this.master) {
      this.master.gain.setTargetAtTime(this.muted ? 0 : MASTER_VOLUME, this.ctx.currentTime, 0.05);
    }
    return this.muted;
  }

  play(name: Sfx, vol = 1): void {
    const ctx = this.ctx;
    if (!ctx) return;
    const t = ctx.currentTime;
    switch (name) {
      case 'click':
        this.tone(1600, 0.05, { type: 'triangle', vol: 0.08 * vol });
        this.tone(120, 0.12, { vol: 0.25 * vol, to: 70 });
        break;
      case 'lock':
        this.tone(90, 0.25, { vol: 0.6 * vol, to: 50 });
        this.tone(660, 0.12, { vol: 0.2 * vol });
        this.tone(990, 0.2, { vol: 0.2 * vol, at: t + 0.09 });
        break;
      case 'miss':
        this.tone(220, 0.25, { type: 'triangle', vol: 0.15 * vol, to: 150 });
        break;
      case 'spotted':
        // low dissonant sting instead of a buzzer
        this.tone(220, 0.8, { vol: 0.1 * vol, attack: 0.02 });
        this.tone(233, 0.8, { vol: 0.1 * vol, attack: 0.02 });
        this.tone(65, 0.5, { vol: 0.45 * vol, to: 38 });
        break;
      case 'beep':
        this.tone(990, 0.14, { vol: 0.04 * vol, attack: 0.01 });
        break;
      case 'impact':
        this.noise(0.4, { vol: 0.8 * vol, type: 'lowpass', freq: 700, to: 120 });
        this.tone(70, 0.45, { vol: 0.9 * vol, to: 30 });
        break;
      case 'glass':
        this.noise(0.7, { vol: 0.5 * vol, type: 'highpass', freq: 2500 });
        for (let i = 0; i < 6; i++) {
          this.tone(2400 + Math.random() * 3200, 0.25 + Math.random() * 0.3, { vol: 0.05 * vol, at: t + Math.random() * 0.25 });
        }
        break;
      case 'roar':
        this.tone(95, 1.8, { type: 'sawtooth', vol: 0.35 * vol, to: 48, attack: 0.15, filter: 700 });
        this.tone(142, 1.6, { type: 'sawtooth', vol: 0.2 * vol, to: 70, attack: 0.2, filter: 500 });
        this.noise(1.6, { vol: 0.35 * vol, type: 'bandpass', freq: 420, to: 180, q: 1.5, attack: 0.2 });
        break;
      case 'whoosh':
        this.noise(0.8, { vol: 0.4 * vol, type: 'bandpass', freq: 300, to: 2400, q: 2, attack: 0.35 });
        break;
      case 'boom':
        this.tone(55, 1.6, { vol: vol, to: 24 });
        this.noise(1.3, { vol: 0.6 * vol, type: 'lowpass', freq: 400, to: 60 });
        break;
      case 'success':
        [523.3, 659.3, 784, 1046.5].forEach((f, i) => this.tone(f, 0.35, { vol: 0.12 * vol, at: t + i * 0.09 }));
        break;
      case 'splash':
        this.noise(0.9, { vol: 0.5 * vol, type: 'lowpass', freq: 3000, to: 400, attack: 0.02 });
        break;
      case 'skid':
        this.noise(0.35, { vol: 0.18 * vol, type: 'bandpass', freq: 1400, to: 900, q: 3 });
        break;
      case 'kick':
        this.noise(0.6, { vol: 0.6 * vol, type: 'lowpass', freq: 2200, to: 300 });
        for (let i = 0; i < 5; i++) this.tone(300 + Math.random() * 500, 0.06, { type: 'triangle', vol: 0.06 * vol, at: t + 0.05 + Math.random() * 0.3 });
        break;
      case 'boost':
        this.noise(0.9, { vol: 0.35 * vol, type: 'bandpass', freq: 400, to: 3000, q: 1.5, attack: 0.05 });
        this.tone(80, 0.6, { type: 'sawtooth', vol: 0.15 * vol, to: 160, filter: 700 });
        break;
      case 'trumpet':
        this.tone(320, 0.9, { type: 'sawtooth', vol: 0.2 * vol, to: 620, attack: 0.08, filter: 1800 });
        this.tone(323, 0.9, { type: 'sawtooth', vol: 0.12 * vol, to: 610, attack: 0.08, filter: 1600 });
        break;
    }
  }

  startLoop(name: Loop): void {
    if (!this.ctx || !this.master || this.loops.has(name)) return;
    this.loops.set(name, this.buildLoop(name, this.ctx, this.master));
  }

  stopLoop(name: Loop): void {
    this.loops.get(name)?.();
    this.loops.delete(name);
  }

  stopAll(): void {
    for (const stop of this.loops.values()) stop();
    this.loops.clear();
  }

  /** 0 = idle, 1 = flat out. */
  setEngine(level: number): void {
    const ctx = this.ctx;
    const e = this.engine;
    if (!ctx || !e) return;
    const t = ctx.currentTime;
    e.oscs[0].frequency.setTargetAtTime(38 + level * 46, t, 0.1);
    e.oscs[1].frequency.setTargetAtTime(76 + level * 92, t, 0.1);
    e.filter.frequency.setTargetAtTime(260 + level * 600, t, 0.1);
  }

  private tone(freq: number, dur: number, o: ToneOpts = {}): void {
    const ctx = this.ctx;
    if (!ctx || !this.master) return;
    const t = o.at ?? ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = o.type ?? 'sine';
    osc.frequency.setValueAtTime(freq, t);
    if (o.to) osc.frequency.exponentialRampToValueAtTime(o.to, t + dur);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(Math.max(o.vol ?? 0.3, 0.0002), t + (o.attack ?? 0.005));
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    let node: AudioNode = osc;
    if (o.filter) {
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = o.filter;
      osc.connect(f);
      node = f;
    }
    node.connect(gain).connect(o.dest ?? this.master);
    osc.start(t);
    osc.stop(t + dur + 0.05);
  }

  private noise(dur: number, o: NoiseOpts = {}): void {
    const ctx = this.ctx;
    if (!ctx || !this.master || !this.noiseBuffer) return;
    const t = o.at ?? ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const f = ctx.createBiquadFilter();
    f.type = o.type ?? 'lowpass';
    f.frequency.setValueAtTime(o.freq ?? 1000, t);
    if (o.to) f.frequency.exponentialRampToValueAtTime(o.to, t + dur);
    f.Q.value = o.q ?? 0.7;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(Math.max(o.vol ?? 0.3, 0.0002), t + (o.attack ?? 0.005));
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(gain).connect(o.dest ?? this.master);
    src.start(t, Math.random() * 1.5);
    src.stop(t + dur + 0.05);
  }

  private buildLoop(name: Loop, ctx: AudioContext, master: GainNode): () => void {
    const bus = ctx.createGain();
    bus.gain.setValueAtTime(0, ctx.currentTime);
    bus.gain.setTargetAtTime(1, ctx.currentTime, 0.4);
    bus.connect(master);
    const sources: AudioScheduledSourceNode[] = [];
    const timers: number[] = [];

    const drone = (freq: number, type: OscillatorType, vol: number, cutoff: number) => {
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.frequency.value = freq;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = cutoff;
      const gain = ctx.createGain();
      gain.gain.value = vol;
      osc.connect(filter).connect(gain).connect(bus);
      osc.start();
      sources.push(osc);
      return { osc, filter };
    };
    const noiseBed = (vol: number, type: BiquadFilterType, freq: number) => {
      const src = ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      src.loop = true;
      const filter = ctx.createBiquadFilter();
      filter.type = type;
      filter.frequency.value = freq;
      const gain = ctx.createGain();
      gain.gain.value = vol;
      src.connect(filter).connect(gain).connect(bus);
      src.start();
      sources.push(src);
    };
    const every = (ms: number, fn: (t: number) => void) => {
      fn(ctx.currentTime + 0.05);
      timers.push(window.setInterval(() => fn(ctx.currentTime + 0.05), ms));
    };

    switch (name) {
      case 'ambience':
        noiseBed(0.05, 'lowpass', 380);
        drone(110, 'sine', 0.03, 2000);
        drone(164.8, 'sine', 0.02, 2000);
        drone(220.5, 'triangle', 0.012, 1200);
        every(1300, (t) => {
          if (Math.random() > 0.6) return;
          for (let i = 0; i < 3; i++) this.tone(4300 + Math.random() * 400, 0.03, { vol: 0.025, at: t + i * 0.07, dest: bus });
        });
        break;
      case 'tension': {
        // Soft low pad with a slow swell, a whisper of air, a gentle heartbeat and the odd distant ping.
        const swell = ctx.createGain();
        swell.gain.value = 0.7;
        swell.connect(bus);
        const lfo = ctx.createOscillator();
        lfo.frequency.value = 0.12;
        const depth = ctx.createGain();
        depth.gain.value = 0.3;
        lfo.connect(depth).connect(swell.gain);
        lfo.start();
        sources.push(lfo);
        for (const [f, v] of [[55, 0.06], [82.4, 0.035], [110.5, 0.015]]) {
          const osc = ctx.createOscillator();
          osc.frequency.value = f;
          const g = ctx.createGain();
          g.gain.value = v;
          osc.connect(g).connect(swell);
          osc.start();
          sources.push(osc);
        }
        noiseBed(0.012, 'bandpass', 500);
        every(1300, (t) => {
          this.tone(52, 0.22, { vol: 0.22, to: 38, at: t, dest: bus });
          this.tone(48, 0.22, { vol: 0.13, to: 36, at: t + 0.26, dest: bus });
        });
        every(7000, (t) => {
          if (Math.random() < 0.6) this.tone(620 + Math.random() * 200, 2.5, { type: 'triangle', vol: 0.015, attack: 0.01, at: t, dest: bus });
        });
        break;
      }
      case 'action': {
        drone(110, 'sawtooth', 0.025, 500);
        const bass = [55, 55, 82.4, 55, 65.4, 55, 73.4, 49];
        let step = 0;
        every(200, (t) => {
          const s = step++ % 16;
          if (s % 2 === 0) this.tone(140, 0.16, { vol: 0.55, to: 45, at: t, dest: bus });
          else this.noise(0.04, { vol: 0.07, type: 'highpass', freq: 7000, at: t, dest: bus });
          if (s === 4 || s === 12) this.noise(0.14, { vol: 0.18, type: 'bandpass', freq: 1800, q: 0.8, at: t, dest: bus });
          this.tone(bass[s % 8], 0.18, { type: 'sawtooth', vol: 0.14, filter: 520, at: t, dest: bus });
        });
        break;
      }
      case 'alarm': {
        const siren = drone(720, 'square', 0.035, 1800);
        const lfo = ctx.createOscillator();
        lfo.frequency.value = 1.1;
        const depth = ctx.createGain();
        depth.gain.value = 260;
        lfo.connect(depth).connect(siren.osc.frequency);
        lfo.start();
        sources.push(lfo);
        break;
      }
      case 'engine': {
        const low = drone(40, 'sawtooth', 0.09, 300);
        const high = drone(80, 'square', 0.025, 400);
        this.engine = { oscs: [low.osc, high.osc], filter: low.filter };
        break;
      }
      case 'credits': {
        const chords = [
          [220, 261.6, 329.6],
          [174.6, 220, 261.6],
          [261.6, 329.6, 392],
          [196, 246.9, 293.7],
        ];
        let i = 0;
        every(4000, (t) => {
          const chord = chords[i++ % chords.length];
          chord.forEach((f) => this.tone(f, 4.4, { vol: 0.05, attack: 1.2, at: t, dest: bus }));
          this.tone(chord[0] / 2, 4.4, { type: 'triangle', vol: 0.07, attack: 0.8, at: t, dest: bus });
        });
        break;
      }
    }

    return () => {
      const t = ctx.currentTime;
      bus.gain.cancelScheduledValues(t);
      bus.gain.setTargetAtTime(0, t, 0.15);
      timers.forEach((id) => window.clearInterval(id));
      if (name === 'engine') this.engine = null;
      window.setTimeout(() => {
        sources.forEach((s) => {
          try {
            s.stop();
          } catch {
            // already stopped
          }
        });
        bus.disconnect();
      }, 900);
    };
  }
}
