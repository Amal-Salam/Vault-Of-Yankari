// The ONLY place user data enters the app.
// Players sign in on start.ng itself, never inside the game: the game only reads who is signed in.

export interface StartNgUser {
  id: string;
  username: string;
  displayName?: string;
  avatarUrl?: string;
  track?: string; // e.g. "frontend", "backend", "devops"
  isGuest?: boolean;
}

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

/**
 * The signed-in start.ng user. Expected to come from a session token handed to the game by
 * start.ng (to be confirmed). Returns null until that integration exists, or when the game is
 * opened outside start.ng.
 */
async function fromStartNg(): Promise<StartNgUser | null> {
  return null;
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
