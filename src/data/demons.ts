import type { CatalogItem } from '../follower.def';

const WIKI_IMAGES = 'https://static.wikia.nocookie.net/cult-of-the-lamb/images';

export const DEMONS = [
  {
    id: 'vesta',
    name: 'Vesta',
    description: 'Shoots a projectile at an enemy every few seconds.',
    highLevelBonus: 'Shoot cooldown decreased.',
    imageUrl: `${WIKI_IMAGES}/1/10/Vesta.png/revision/latest`,
  },
  {
    id: 'orcus',
    name: 'Orcus',
    description: 'Melee attacks the closest enemy every few seconds.',
    highLevelBonus: 'More damage dealt.',
    imageUrl: `${WIKI_IMAGES}/f/f9/Orcus.png/revision/latest`,
  },
  {
    id: 'vosegus',
    name: 'Vosegus',
    description: 'Automatically collects dropped Fervour.',
    highLevelBonus: 'Gain more Fervour.',
    imageUrl: `${WIKI_IMAGES}/e/e8/Vosegus.png/revision/latest`,
  },
  {
    id: 'hathor',
    name: 'Hathor',
    description: 'Flies away and returns with red hearts.',
    highLevelBonus: 'Better health drops.',
    imageUrl: `${WIKI_IMAGES}/7/7a/Hathor.png/revision/latest`,
  },
  {
    id: 'fornax',
    name: 'Fornax',
    description: 'Targets a random enemy and explodes near them.',
    highLevelBonus: 'More explosion damage.',
    imageUrl: `${WIKI_IMAGES}/a/ad/Fornax.png/revision/latest`,
  },
  {
    id: 'paean',
    name: 'Paean',
    description: 'Start your next crusade with half a spirit heart.',
    highLevelBonus: 'More starting hearts.',
    imageUrl: `${WIKI_IMAGES}/a/aa/Paean.png/revision/latest`,
  },
  {
    id: 'rottra',
    name: 'Rottra',
    description:
      'Spawns bombs that damage enemies. Duplicates each chamber, up to three. Woolhaven DLC, Rotten Followers only.',
    highLevelBonus: null,
    imageUrl: `${WIKI_IMAGES}/1/1e/Rottra.png/revision/latest`,
  },
] as const satisfies readonly DemonType[];

export type DemonId = (typeof DEMONS)[number]['id'];

export function findDemon(id: string | null): DemonType | undefined {
  return DEMONS.find((demon) => demon.id === id);
}

export function isDemonId(value: string): value is DemonId {
  return DEMONS.some((demon) => demon.id === value);
}