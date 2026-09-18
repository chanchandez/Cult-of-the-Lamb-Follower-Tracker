/**
 * Follower form (skin) catalog. Normal forms only.
 * Source: https://cult-of-the-lamb.fandom.com/wiki/Follower_forms (fetched 2026-09-17).
 * Images are hotlinked from the wiki. Forms are cosmetic, so the description
 * records how the form is obtained. Each form has three colour variants; the
 * image is the first one the wiki lists.
 */
import type { CatalogItem } from '../follower.def';

export type SkinSource =
  | 'base'
  | 'cultist-pack'
  | 'heretic-pack'
  | 'sinful-pack'
  | 'pilgrim-pack'
  | 'random';

export interface Skin extends CatalogItem {
  source: SkinSource;
}

const WIKI_IMAGES = 'https://static.wikia.nocookie.net/cult-of-the-lamb/images';

const BASE = 'Base game. Unlocked by default.';
const CULTIST = 'Cultist Pack DLC. Unlocked by default.';
const HERETIC = 'Heretic Pack DLC. Unlocked by default.';
const SINFUL = 'Sinful Pack DLC. Unlocked by default.';
const PILGRIM = 'Pilgrim Pack DLC. Unlocked by default.';
const RANDOM = 'Found randomly in any location.';

export const SKINS = [
  // Base game
  { id: 'deer', name: 'Deer', description: BASE, source: 'base', imageUrl: `${WIKI_IMAGES}/7/77/Deer_form.png/revision/latest` },
  { id: 'pig', name: 'Pig', description: BASE, source: 'base', imageUrl: `${WIKI_IMAGES}/1/10/Pig_form.png/revision/latest` },
  { id: 'dog', name: 'Dog', description: BASE, source: 'base', imageUrl: `${WIKI_IMAGES}/3/37/Dog_form.png/revision/latest` },
  { id: 'cat', name: 'Cat', description: BASE, source: 'base', imageUrl: `${WIKI_IMAGES}/2/24/Cat_form.png/revision/latest` },
  { id: 'fox', name: 'Fox', description: BASE, source: 'base', imageUrl: `${WIKI_IMAGES}/c/c5/Fox_form.png/revision/latest` },

  // Cultist Pack
  { id: 'bee', name: 'Bee', description: CULTIST, source: 'cultist-pack', imageUrl: `${WIKI_IMAGES}/8/8d/Bee_form.png/revision/latest` },
  { id: 'tapir', name: 'Tapir', description: CULTIST, source: 'cultist-pack', imageUrl: `${WIKI_IMAGES}/0/0d/Tapir_form.png/revision/latest` },
  { id: 'turtle', name: 'Turtle', description: CULTIST, source: 'cultist-pack', imageUrl: `${WIKI_IMAGES}/f/f8/Turtle_form.png/revision/latest` },
  { id: 'monkey', name: 'Monkey', description: CULTIST, source: 'cultist-pack', imageUrl: `${WIKI_IMAGES}/7/7a/Monkey_form.png/revision/latest` },
  { id: 'narwhal', name: 'Narwhal', description: CULTIST, source: 'cultist-pack', imageUrl: `${WIKI_IMAGES}/b/b4/Narwhal_form.png/revision/latest` },

  // Heretic Pack
  { id: 'moose', name: 'Moose', description: HERETIC, source: 'heretic-pack', imageUrl: `${WIKI_IMAGES}/4/49/Mosse_form_3.PNG/revision/latest` },
  { id: 'gorilla', name: 'Gorilla', description: HERETIC, source: 'heretic-pack', imageUrl: `${WIKI_IMAGES}/a/a7/Gorilla_form_1.PNG/revision/latest` },
  { id: 'mosquito', name: 'Mosquito', description: HERETIC, source: 'heretic-pack', imageUrl: `${WIKI_IMAGES}/b/b9/Mosquito_form_1.PNG/revision/latest` },
  { id: 'goldfish', name: 'Goldfish', description: HERETIC, source: 'heretic-pack', imageUrl: `${WIKI_IMAGES}/e/ef/Goldfish_form_1.PNG/revision/latest` },
  { id: 'possum', name: 'Possum', description: HERETIC, source: 'heretic-pack', imageUrl: `${WIKI_IMAGES}/9/9a/Possum_form_3.PNG/revision/latest` },

  // Sinful Pack
  { id: 'hammerhead', name: 'Hammerhead', description: SINFUL, source: 'sinful-pack', imageUrl: `${WIKI_IMAGES}/1/10/Hammerhead_1.png/revision/latest` },
  { id: 'ladybug', name: 'Ladybug', description: SINFUL, source: 'sinful-pack', imageUrl: `${WIKI_IMAGES}/0/03/Ladybug_1.png/revision/latest` },
  { id: 'tiger', name: 'Tiger', description: SINFUL, source: 'sinful-pack', imageUrl: `${WIKI_IMAGES}/6/64/Tiger_3.png/revision/latest` },
  { id: 'llama', name: 'Llama', description: SINFUL, source: 'sinful-pack', imageUrl: `${WIKI_IMAGES}/7/75/Llama_1.png/revision/latest` },
  { id: 'sphynx', name: 'Sphynx', description: SINFUL, source: 'sinful-pack', imageUrl: `${WIKI_IMAGES}/c/ce/Sphynx_3.png/revision/latest` },

  // Pilgrim Pack
  { id: 'panda', name: 'Panda', description: PILGRIM, source: 'pilgrim-pack', imageUrl: `${WIKI_IMAGES}/7/7b/Panda_1.png/revision/latest` },
  { id: 'skunk', name: 'Skunk', description: PILGRIM, source: 'pilgrim-pack', imageUrl: `${WIKI_IMAGES}/1/13/Skunk_1.png/revision/latest` },
  { id: 'anteater', name: 'Anteater', description: PILGRIM, source: 'pilgrim-pack', imageUrl: `${WIKI_IMAGES}/1/1c/Anteater_1.png/revision/latest` },
  { id: 'camel', name: 'Camel', description: PILGRIM, source: 'pilgrim-pack', imageUrl: `${WIKI_IMAGES}/2/23/Camel_1.png/revision/latest` },
  { id: 'echidna', name: 'Echidna', description: PILGRIM, source: 'pilgrim-pack', imageUrl: `${WIKI_IMAGES}/8/84/Echidna_1.png/revision/latest` },

  // Found randomly in any location
  { id: 'pangolin', name: 'Pangolin', description: RANDOM, source: 'random', imageUrl: `${WIKI_IMAGES}/4/47/Pangolin_form.png/revision/latest` },
  { id: 'unicorn', name: 'Unicorn', description: RANDOM, source: 'random', imageUrl: `${WIKI_IMAGES}/7/7a/Unicorn_form_3.png/revision/latest` },
  { id: 'red-panda', name: 'Red Panda', description: RANDOM, source: 'random', imageUrl: `${WIKI_IMAGES}/f/f1/Redpanda_form.png/revision/latest` },
] as const satisfies readonly Skin[];

export type SkinId = (typeof SKINS)[number]['id'];

export function findSkin(id: string | null): Skin | undefined {
  return SKINS.find((skin) => skin.id === id);
}

export function isSkinId(value: string): value is SkinId {
  return SKINS.some((skin) => skin.id === value);
}