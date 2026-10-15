// The ONLY place user data enters the app.
// Players sign in on start.ng itself, never inside the game: the game only reads who is signed in.

export interface StartNgUser {
  id: string;
  username: string;
  displayName?: string;
  avatarUrl?: string;
  track?: string; // e.g. "frontend", "backend", "devops"
  isGuest?: boolean;
  /** The character the player designed in start.ng's own character creator, if any. */
  platformStyle?: StartNgCharacterStyle;
}

export interface StartNgCharacterStyle {
  body?: string;
  primaryColor?: string; // bright
  secondaryColor?: string; // dark
  skinColor?: string;
  hairColor?: string;
  hair?: string;
  hat?: string;
  accessory?: string;
}

const STARTNG_ORIGIN = 'https://start.ng';
const CONNECT_TIMEOUT_MS = 4000;

const GUEST_USER: StartNgUser = {
  id: 'guest',
  username: 'guest',
  displayName: 'Guest',
  isGuest: true,
};

/** Stand-in for the signed-in player while developing locally (`npm run dev`). */
const DEV_USER: StartNgUser = {
  id: 'dev-0001',
  username: 'tester',
  displayName: 'Tester',
  track: 'frontend',
};

function clean(value: string): string {
  return value.trim().replace(/^@/, '').replace(/[^\w.-]/g, '').slice(0, 24);
}

/** True when served from a start.ng game address: https://<game>.start.ng, or start.ng's local test form <game>.start.localhost. */
function onStartNg(): boolean {
  return /\.start\.(ng|localhost)$/.test(window.location.hostname);
}

/**
 * The signed-in start.ng user. start.ng's protocol: load https://start.ng/connect in a hidden
 * iframe and send it `startng:whoami`; it reads the player's session token on start.ng and
 * replies with `startng:user` ({ id, name, style }, or null if nobody is signed in).
 */
async function fromStartNg(): Promise<StartNgUser | null> {
  if (!onStartNg()) return null;
  const frame = document.createElement('iframe');
  frame.src = `${STARTNG_ORIGIN}/connect`;
  frame.title = 'start.ng connection';
  frame.style.display = 'none';
  const requestId = `whoami-${Date.now()}`;
  try {
    const reply = await new Promise<{ user?: { id?: unknown; name?: unknown; style?: unknown } | null } | null>((resolve) => {
      const timer = window.setTimeout(() => done(null), CONNECT_TIMEOUT_MS);
      function done(value: Parameters<typeof resolve>[0]) {
        window.clearTimeout(timer);
        window.removeEventListener('message', onMessage);
        resolve(value);
      }
      function onMessage(e: MessageEvent) {
        if (e.origin !== STARTNG_ORIGIN || e.data?.requestId !== requestId || e.data?.type !== 'startng:user') return;
        done(e.data);
      }
      window.addEventListener('message', onMessage);
      frame.addEventListener('load', () => frame.contentWindow?.postMessage({ type: 'startng:whoami', requestId }, STARTNG_ORIGIN));
      frame.addEventListener('error', () => done(null));
      document.body.appendChild(frame);
    });
    const u = reply?.user;
    if (!u || typeof u.name !== 'string' || !u.name.trim()) return null;
    const name = u.name.trim().slice(0, 24);
    return {
      id: String(u.id ?? name),
      username: clean(name) || name,
      displayName: name,
      platformStyle: u.style && typeof u.style === 'object' ? (u.style as StartNgCharacterStyle) : undefined,
    };
  } finally {
    frame.remove();
  }
}

/** Hidden testing shortcut: `?user=alice` (optionally `&track=backend`). Remove once real auth is live. */
function fromTestParam(): StartNgUser | null {
  const params = new URLSearchParams(window.location.search);
  const username = clean(params.get('user') ?? '');
  if (!username) return null;
  const track = clean(params.get('track') ?? '') || undefined;
  return { id: `test-${username}`, username, displayName: username, track };
}

export async function getUser(): Promise<StartNgUser> {
  try {
    const user = fromTestParam() ?? (await fromStartNg()) ?? (import.meta.env.DEV ? DEV_USER : null);
    return user?.username ? user : GUEST_USER;
  } catch (err) {
    console.warn('[getUser] falling back to guest', err);
    return GUEST_USER;
  }
}

const RECHECK_MS = 15000;

/**
 * Re-reads the start.ng user when the player comes back to the game (e.g. after editing their
 * avatar on start.ng in another tab) and every 15 s while visible. Calls `onChange` only when
 * something actually changed. Returns a function that stops watching. No-op outside start.ng.
 */
export function watchUser(current: StartNgUser, onChange: (user: StartNgUser) => void): () => void {
  if (!onStartNg() || current.isGuest || fromTestParam()) return () => {};
  let last = JSON.stringify(current);
  let busy = false;
  const check = async () => {
    if (busy || document.hidden) return;
    busy = true;
    try {
      const user = await fromStartNg();
      const sig = user && JSON.stringify(user);
      if (user && sig !== last) {
        last = sig as string;
        onChange(user);
      }
    } catch {
      // keep the last known user
    } finally {
      busy = false;
    }
  };
  const onVisible = () => void check();
  document.addEventListener('visibilitychange', onVisible);
  window.addEventListener('focus', onVisible);
  const timer = window.setInterval(onVisible, RECHECK_MS);
  return () => {
    document.removeEventListener('visibilitychange', onVisible);
    window.removeEventListener('focus', onVisible);
    window.clearInterval(timer);
  };
}
