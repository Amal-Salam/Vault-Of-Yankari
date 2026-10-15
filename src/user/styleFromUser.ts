import type { StartNgCharacterStyle, StartNgUser } from './getUser';
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

/** Every field of a start.ng avatar, filled in. */
export type Avatar = Required<StartNgCharacterStyle>;

const AVATAR_SKIN = ['#5c3a21', '#8d5524', '#a0662f', '#c68642', '#e0ac69', '#f1c27d'];
const AVATAR_HAIR_COLOR = ['#17120f', '#4a2c1a', '#8b5a2b', '#d9a441', '#b8b8b8', '#c0392b'];
const AVATAR_PRIMARY = ['#ff6b6b', '#1dd1a1', '#a55eea', '#4b7bec', '#f7b731', '#fd9644', '#eb3b5a', '#292a23'];
const AVATAR_SECONDARY = ['#2b2f4a', '#222f3e', '#3d3d3d', '#4b6584', '#5f3dc4', '#0c6e5a'];
const AVATAR_HAIR: Record<string, string[]> = {
  female: ['braids', 'bun', 'ponytail', 'afro', 'short'],
  male: ['short', 'afro', 'dreads', 'bald'],
};

/**
 * The player's face for the crew ID badge: their start.ng avatar when they have one, otherwise
 * derived from the username (so test users and guests still differ, deterministically).
 */
export function avatarFromUser(user: StartNgUser): Avatar {
  const p = user.platformStyle ?? {};
  const h = (salt: number) => cyrb53(user.username.toLowerCase(), 100 + salt);
  const body = p.body === 'female' || p.body === 'male' ? p.body : pick(['female', 'male'], h(1));
  const color = (value: string | undefined, fallback: string[], salt: number) =>
    value && HEX.test(value) ? value : pick(fallback, h(salt));
  return {
    body,
    skinColor: color(p.skinColor, AVATAR_SKIN, 2),
    hairColor: color(p.hairColor, AVATAR_HAIR_COLOR, 3),
    primaryColor: color(p.primaryColor, AVATAR_PRIMARY, 4),
    secondaryColor: color(p.secondaryColor, AVATAR_SECONDARY, 5),
    hair: p.hair ?? pick(AVATAR_HAIR[body], h(6)),
    hat: p.hat ?? 'none',
    accessory: p.accessory ?? 'none',
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
