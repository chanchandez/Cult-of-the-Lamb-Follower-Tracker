import type { CatalogItem } from '../follower.def';

const WIKI_IMAGES = 'https://static.wikia.nocookie.net/cult-of-the-lamb/images';

export const OUTFITS = [
  // Standard robes
  { id: 'acolyte-robes',   name: 'Acolyte Robes',   group: 'standard', description: 'Simple robes for simple Followers.',              unlock: 'default', imageUrl: `${WIKI_IMAGES}/c/c0/Acolyte_Robes_.png/revision/latest` },
  { id: 'peasant-blouse',  name: 'Peasant Blouse',  group: 'standard', description: 'For the hardworking.',                            unlock: 'default', imageUrl: `${WIKI_IMAGES}/e/eb/Peasant_Robes.png/revision/latest` },
  { id: 'laborer-tunic',   name: 'Laborer Tunic',   group: 'standard', description: 'A breathable tunic for working up a sweat.',      unlock: 'default', imageUrl: `${WIKI_IMAGES}/b/ba/Laborer_Tunic.png/revision/latest` },
  { id: 'ragged-robes',    name: 'Ragged Robes',    group: 'standard', description: 'Either a design choice, or poorly made.',         unlock: 'Random chance to appear when using the Confession Booth.', imageUrl: `${WIKI_IMAGES}/d/d5/Ragged_Robes.png/revision/latest` },
  { id: 'naked',           name: 'Naked',           group: 'standard', description: 'Feel the cool breeze everywhere.',                unlock: 'Perform the Rite of Lust at least 5 times.', imageUrl: `${WIKI_IMAGES}/d/d0/Naked.png/revision/latest` },
  { id: 'merchant-shirt',  name: 'Merchant Shirt',  group: 'standard', description: 'Perfect for doing business in.',                  unlock: 'Berith', imageUrl: `${WIKI_IMAGES}/9/9c/Merchant_Shirt.png/revision/latest` },
  { id: 'evening-frock',   name: 'Evening Frock',   group: 'standard', description: 'A frock for the evening.',                        unlock: 'Berith', imageUrl: `${WIKI_IMAGES}/7/75/Evening_Frock.png/revision/latest` },
  { id: 'genteel-jacket',  name: 'Genteel Jacket',  group: 'standard', description: 'A handsome jacket, for looking high class.',      unlock: 'Berith', imageUrl: `${WIKI_IMAGES}/a/a2/Genteel_Jacket.png/revision/latest` },
  { id: 'scholar-shirt',   name: 'Scholar Shirt',   group: 'standard', description: 'An ideal outfit for gazing longingly in.',        unlock: 'Berith', imageUrl: `${WIKI_IMAGES}/1/1d/Scholar_Shirt.png/revision/latest` },
  { id: 'modest-robe',     name: 'Modest Robe',     group: 'standard', description: 'Modest dress in a lovely purple.',                unlock: 'Berith', imageUrl: `${WIKI_IMAGES}/c/c4/Modest_Robe.png/revision/latest` },
  { id: 'sensible-dress',  name: 'Sensible Dress',  group: 'standard', description: 'A sensible outfit for everyday tasks.',           unlock: 'Berith', imageUrl: `${WIKI_IMAGES}/5/57/Sensible_Dress.png/revision/latest` },
  { id: 'grass-skirt',     name: 'Grass Skirt',     group: 'standard', description: "Ideal for followers who don't like to be restricted.", unlock: 'Berith', imageUrl: `${WIKI_IMAGES}/a/a4/Grass_Skirt.png/revision/latest` },
  { id: 'night-shirt',     name: 'Night Shirt',     group: 'standard', description: 'A moody ensemble, perfect for lurking.',          unlock: 'Berith', imageUrl: `${WIKI_IMAGES}/3/3c/Night_Shirt.png/revision/latest` },
  { id: 'picnic-attire',   name: 'Picnic Attire',   group: 'standard', description: 'For Followers who like to frolic.',               unlock: 'Berith', imageUrl: `${WIKI_IMAGES}/d/dc/Picnic_Attire.png/revision/latest` },

  // Unique robes (one-of-a-kind, crafted once)
  { id: 'ceremonial-robe',  name: 'Ceremonial Robe',  group: 'unique', description: 'Ornamental dress for important occasions.',           unlock: 'Have the same Follower confess at a Confession Booth 5 times.', imageUrl: `${WIKI_IMAGES}/e/e8/20240205170912_1.jpg/revision/latest` },
  { id: 'wedding-dress',    name: 'Wedding Dress',    group: 'unique', description: 'Fine regalia for the special someone.',               unlock: 'Perform 3 Weddings.', imageUrl: `${WIKI_IMAGES}/d/d6/20240205170846_1.jpg/revision/latest` },
  { id: 'wedding-suit',     name: 'Wedding Suit',     group: 'unique', description: 'A smart suit for the special someone.',               unlock: 'Perform 3 Weddings.', imageUrl: `${WIKI_IMAGES}/2/26/20240205170849_1.jpg/revision/latest` },
  { id: 'chefs-jacket',     name: "Chef's Jacket",    group: 'unique', description: 'For the culinary inclined.',                          unlock: 'Crack 3 Eggs.', imageUrl: `${WIKI_IMAGES}/1/13/20240205170900_1.jpg/revision/latest` },
  { id: 'knight-armour',    name: 'Knight Armour',    group: 'unique', description: 'Noble armour for brave followers.',                   unlock: 'Randomly dropped by the demon Hathor once the Tailor is unlocked.', imageUrl: `${WIKI_IMAGES}/0/01/20240205170902_1.jpg/revision/latest` },
  { id: 'maid-dress',       name: 'Maid Dress',       group: 'unique', description: 'Perfect for cleaning in.',                            unlock: 'Clean 100 Poops or Vomit.', imageUrl: `${WIKI_IMAGES}/b/b4/20240205170922_1.jpg/revision/latest` },
  { id: 'fancy-robes',      name: 'Fancy Robes',      group: 'unique', description: 'The fanciest Follower dresses the fanciest robes.',   unlock: 'Absolve a Follower of Sin 5 times.', imageUrl: `${WIKI_IMAGES}/a/af/20240205170932_1.jpg/revision/latest` },
  { id: 'drinktender-vest', name: 'Drinktender Vest', group: 'unique', description: 'Made for serving in.',                                unlock: 'Serve drinks totalling 30 stars at the Drinkhouse.', imageUrl: `${WIKI_IMAGES}/a/a9/20240205170941_1.jpg/revision/latest` },
  { id: 'jester-costume',   name: 'Jester Costume',   group: 'unique', description: 'Every Cult needs a clown.',                           unlock: 'Craft 25 outfits.', imageUrl: `${WIKI_IMAGES}/9/9d/20240205170949_1.jpg/revision/latest` },
  { id: 'warriors-cuirass', name: "Warrior's Cuirass", group: 'unique', description: 'Show the world how tough you are.',                 unlock: 'Perform 3 Fight Pit Rituals.', imageUrl: `${WIKI_IMAGES}/0/04/20240205170952_1.jpg/revision/latest` },

  // Cultist Pack
  { id: 'spring-tunic',     name: 'Spring Tunic',     group: 'cultist-pack', description: 'A lovely tunic to celebrate spring.',           unlock: 'DLC', imageUrl: `${WIKI_IMAGES}/c/c2/223958793.png/revision/latest` },
  { id: 'flowering-frock',  name: 'Flowering Frock',  group: 'cultist-pack', description: 'A lush dress, woven of flowers.',               unlock: 'DLC', imageUrl: `${WIKI_IMAGES}/e/e8/224122379.png/revision/latest` },

  // Heretic Pack
  { id: 'acolyte-of-the-old-faith',  name: 'Acolyte of the Old Faith',  group: 'heretic-pack', description: 'Simple robes going out of style.', unlock: 'DLC', imageUrl: `${WIKI_IMAGES}/f/f3/224718287.png/revision/latest` },
  { id: 'enforcer-of-the-old-faith', name: 'Enforcer of the Old Faith', group: 'heretic-pack', description: 'Garb for an officer to wear.',     unlock: 'DLC', imageUrl: `${WIKI_IMAGES}/3/3a/224807489.png/revision/latest` },

  // Sinful Pack
  { id: 'garb-of-the-kawaii', name: 'Garb of the Kawaii', group: 'sinful-pack', description: 'For the cutest followers only.',                    unlock: 'DLC', imageUrl: `${WIKI_IMAGES}/5/58/225306778.png/revision/latest` },
  { id: 'yeoman-coat',        name: 'Yeoman Coat',        group: 'sinful-pack', description: 'Well-presented and woodsy.',                        unlock: 'DLC', imageUrl: `${WIKI_IMAGES}/0/0f/225334331.png/revision/latest` },
  { id: 'gothic-dress',       name: 'Gothic Dress',       group: 'sinful-pack', description: 'Dark souls require dark clothes.',                  unlock: 'DLC', imageUrl: `${WIKI_IMAGES}/0/05/225407353.png/revision/latest` },
  { id: 'mystic-robes',       name: 'Mystic Robes',       group: 'sinful-pack', description: 'For those who want to look mysterious.',            unlock: 'DLC', imageUrl: `${WIKI_IMAGES}/6/68/225440226.png/revision/latest` },
  { id: 'officer-suit',       name: 'Officer Suit',       group: 'sinful-pack', description: 'A sharp outfit for rule followers.',                unlock: 'DLC', imageUrl: `${WIKI_IMAGES}/3/36/225515618.png/revision/latest` },
  { id: 'olympian',           name: 'Olympian',           group: 'sinful-pack', description: 'Muscular and free, like the champions of old.',     unlock: 'DLC', imageUrl: `${WIKI_IMAGES}/5/56/225608688.png/revision/latest` },

  // Pilgrim Pack
  { id: 'jalalas-coat', name: "Jalala's Coat", group: 'pilgrim-pack', description: 'Kept a pilgrim warm on a long, long journey.',   unlock: 'DLC', imageUrl: `${WIKI_IMAGES}/4/45/822000120.png/revision/latest` },
  { id: 'rinors-robes', name: "Rinor's Robes", group: 'pilgrim-pack', description: 'Quickly thrown together and surprisingly sturdy.', unlock: 'DLC', imageUrl: `${WIKI_IMAGES}/f/fd/15125161631.png/revision/latest` },
] as const satisfies readonly Outfit[];

export type OutfitId = (typeof OUTFITS)[number]['id'];

export function findOutfit(id: string | null): Outfit | undefined {
  return OUTFITS.find((outfit) => outfit.id === id);
}

export function isOutfitId(value: string): value is OutfitId {
  return OUTFITS.some((outfit) => outfit.id === value);
}