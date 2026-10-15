import type { StartNgUser } from './getUser';
import { ACCENT_COLORS, CODENAMES, SUIT_COLORS, VISOR_TINTS } from './palette';

export type SuitVariant = 'light' | 'heavy' | 'utility';

export interface CharacterStyle {
  codename: string; // e.g. "Agent Mamba-7"
  suitColor: string; // hex
  accentColor: string; // hex
  maskPattern: number; // 0–7
  visorTint: string; // hex
  suitVariant: SuitVariant;
}

// cyrb53 by bryc (public domain): fast, well-distributed 53-bit string hash.
export function cyrb53(str: string, seed = 0): number {
  let h1 = 0xdeadbeef ^ seed;
  let h2 = 0x41c6ce57 ^ seed;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

const VARIANTS: SuitVariant[] = ['light', 'heavy', 'utility'];
const TRACK_VARIANTS: Record<string, SuitVariant> = {
  frontend: 'light',
  backend: 'heavy',
  devops: 'utility',
};

function pick<T>(list: readonly T[], hash: number): T {
  return list[hash % list.length];
}

const HEX = /^#[0-9a-f]{6}$/i;

export function styleFromUser(user: StartNgUser): CharacterStyle {
  const key = user.username.toLowerCase();
  const h = (salt: number) => cyrb53(key, salt);
  // Colours from the player's start.ng character (curated palettes there too) win when present.
  const platform = user.platformStyle;
  const suit = platform?.secondaryColor && HEX.test(platform.secondaryColor) ? platform.secondaryColor : null;
  const accent = platform?.primaryColor && HEX.test(platform.primaryColor) ? platform.primaryColor : null;
  return {
    codename: `Agent ${pick(CODENAMES, h(5))}-${(h(6) % 9) + 1}`,
    suitColor: suit ?? pick(SUIT_COLORS, h(1)),
    accentColor: accent ?? pick(ACCENT_COLORS, h(2)),
    visorTint: pick(VISOR_TINTS, h(3)),
    maskPattern: h(4) % 8,
    suitVariant: TRACK_VARIANTS[user.track?.toLowerCase() ?? ''] ?? pick(VARIANTS, h(7)),
  };
}

export const CREW_STYLES: CharacterStyle[] = [
  {
    codename: 'Agent Harmattan-2',
    suitColor: '#454c58',
    accentColor: '#ff9f1c',
    maskPattern: 3,
    visorTint: '#ff9100',
    suitVariant: 'heavy',
  },
  {
    codename: 'Agent Ibis-5',
    suitColor: '#3b5537',
    accentColor: '#4de8c8',
    maskPattern: 6,
    visorTint: '#69f0ae',
    suitVariant: 'utility',
  },
];

export const GUARD_STYLE: CharacterStyle = {
  codename: 'Vault Guard',
  suitColor: '#2a2d33',
  accentColor: '#ff3b30',
  maskPattern: 5,
  visorTint: '#ff3b30',
  suitVariant: 'heavy',
};
