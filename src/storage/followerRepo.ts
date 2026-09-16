import type { Follower } from '../follower.def';


const STORAGE_KEY = 'cotl-followers';

function loadFollowers(): Follower[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Follower[]) : [];
  } catch {
    return [];
  }
}

function saveFollowers(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(followers));
}


const followers: Follower[] = [];

export function getFollowers(): readonly Follower[] {
  return followers;
}

export function addFollower ( newfollower : Follower ): void {
  followers.push(newfollower);
  saveFollowers();
}

export function removeFollower ( followerId : string ): void {
  const index = followers.findIndex(follower => follower.id === followerId);
  followers.splice(index, 1);
  saveFollowers();
}

