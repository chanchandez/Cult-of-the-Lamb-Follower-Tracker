/**
 * Necklace catalog.
 * Source: https://cult-of-the-lamb.fandom.com/wiki/Necklaces (fetched 2026-09-16).
 * Images are hotlinked from the wiki. Descriptions are the in-game effect text.
 */
import type { CatalogItem } from '../follower.def';

export type NecklaceGroup = 'crusade' | 'mystic-seller' | 'special' | 'woolhaven';

export interface Necklace extends CatalogItem {
  group: NecklaceGroup;
}

const WIKI_IMAGES = 'https://static.wikia.nocookie.net/cult-of-the-lamb/images';

export const NECKLACES = [
  {
    id: 'skull',
    name: 'Skull Necklace',
    description: 'Follower will live an unnaturally long life, double what would usually be expected.',
    imageUrl: `${WIKI_IMAGES}/9/95/Skull_Necklace.png/revision/latest`,
    group: 'crusade',
  },
  {
    id: 'moon',
    name: 'Moon Necklace',
    description: 'Follower will never sleep.',
    imageUrl: `${WIKI_IMAGES}/d/d4/Moon_Necklace.png/revision/latest`,
    group: 'crusade',
  },
  {
    id: 'natures',
    name: 'Natures Necklace',
    description: 'Follower will harvest bonus resources.',
    imageUrl: `${WIKI_IMAGES}/d/d3/Natures_Necklace.png/revision/latest`,
    group: 'crusade',
  },
  {
    id: 'feather',
    name: 'Feather Necklace',
    description: 'Follower will have increased movement speed.',
    imageUrl: `${WIKI_IMAGES}/4/43/Feather_Necklace.png/revision/latest`,
    group: 'crusade',
  },
  {
    id: 'flower',
    name: 'Flower Necklace',
    description: 'Follower will generate devotion faster.',
    imageUrl: `${WIKI_IMAGES}/a/a5/Flower_Necklace.png/revision/latest`,
    group: 'crusade',
  },
  {
    id: 'missionary',
    name: 'Missionary Necklace',
    description: 'Follower chance of a successful missionary increased.',
    imageUrl: `${WIKI_IMAGES}/9/93/Missionary_Necklace.png/revision/latest`,
    group: 'mystic-seller',
  },
  {
    id: 'golden-skull',
    name: 'Golden Skull Necklace',
    description: 'Follower gains the Immortal trait.',
    imageUrl: `${WIKI_IMAGES}/2/23/Golden_Skull_Necklace.png/revision/latest`,
    group: 'mystic-seller',
  },
  {
    id: 'demonic',
    name: 'Demonic Necklace',
    description: 'Follower has increased demon level.',
    imageUrl: `${WIKI_IMAGES}/1/1b/Demonic_Necklace.png/revision/latest`,
    group: 'mystic-seller',
  },
  {
    id: 'loyalty',
    name: 'Loyalty Necklace',
    description: 'Follower will never dissent.',
    imageUrl: `${WIKI_IMAGES}/8/8d/Loyalty_Necklace.png/revision/latest`,
    group: 'mystic-seller',
  },
  {
    id: 'dark',
    name: 'Dark Necklace',
    description: 'Has no effect... or does it? Knowledge is oft gained through sacrifice.',
    imageUrl: `${WIKI_IMAGES}/4/42/Dark_Necklace.png/revision/latest`,
    group: 'special',
  },
  {
    id: 'light',
    name: 'Light Necklace',
    description: 'No known effect. Knowledge is oft gained through sacrifice.',
    imageUrl: `${WIKI_IMAGES}/1/1e/Light_Necklace.png/revision/latest`,
    group: 'special',
  },
  {
    id: 'regrowth',
    name: 'Regrowth Necklace',
    description: 'Follower will survive a natural death. Necklace will be destroyed after.',
    imageUrl: `${WIKI_IMAGES}/e/ee/Regrowth_Necklace.png/revision/latest`,
    group: 'woolhaven',
  },
  {
    id: 'winter',
    name: 'Winter Necklace',
    description: 'Follower works 50% faster during Winter.',
    imageUrl: `${WIKI_IMAGES}/4/44/Winter_Necklace_Icon.png/revision/latest`,
    group: 'woolhaven',
  },
  {
    id: 'warming',
    name: 'Warming Necklace',
    description: 'Follower will not Freeze.',
    imageUrl: `${WIKI_IMAGES}/c/cd/Warming_Necklace.png/revision/latest`,
    group: 'woolhaven',
  },
  {
    id: 'unlucky',
    name: 'Unlucky Necklace',
    description: 'Followers who wear this are first to suffer the effects of low faith, hunger, or hygiene.',
    imageUrl: `${WIKI_IMAGES}/6/6f/Unlucky_Necklace.png/revision/latest`,
    group: 'woolhaven',
  },
  {
    id: 'abnormal',
    name: 'Abnormal Necklace',
    description: 'What a strange necklace...',
    imageUrl: `${WIKI_IMAGES}/2/24/Abnormal_Necklace_Icon.png/revision/latest`,
    group: 'woolhaven',
  },
] as const satisfies readonly Necklace[];

export type NecklaceId = (typeof NECKLACES)[number]['id'];

export function isNecklaceId(value: string): value is NecklaceId {
  return NECKLACES.some((necklace) => necklace.id === value);
}

export function findNecklace(id: string | null): Necklace | undefined {
  return NECKLACES.find((necklace) => necklace.id === id);
}

