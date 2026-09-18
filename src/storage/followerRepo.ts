import type { Follower } from '../follower.def';


const STORAGE_KEY = 'cotl-followers';

function loadFollowers(): Follower[] {
  try {
    const rawKey = localStorage.getItem(STORAGE_KEY);
    if (rawKey === null) return [];
    const parsedKey: unknown = JSON.parse(rawKey);
    return Array.isArray(parsedKey) ? (parsedKey as Follower[]) : [];
  } catch {
    return [];
  }
}

function saveFollowers(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(followers));
}


const followers: Follower[] = loadFollowers();

export function getFollowers(): readonly Follower[] {
  return followers;
}

export function addFollower ( newfollower : Follower ): void {
  followers.push(newfollower);
  saveFollowers();
}

export function removeFollower(followerId: string): void {
  const index = followers.findIndex((follower) => follower.id === followerId);
  if (index === -1) return;
  followers.splice(index, 1);
  saveFollowers();
}

