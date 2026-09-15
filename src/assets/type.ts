
export type CultRole = 'disciple' | 'loyalty_enforcer' | 'ritual_leader' | null;

export interface DemonType {
  id: string;
  name: string;
  effect: string;
  imageURL: string;
}

export interface Necklace {
  id: string;
  name: string;
  effect: string;
  imageURL: string;
}

export interface Follower {
  id: string;
  name: string;
  level: number;          // 1 to 10
  skin: string;           // e.g. "Deer", "Cat", "Fox"
  outfit: string;         // e.g. "Cult Robes", "Warrior Garb"
  isMarried: boolean;
  isFavorite: boolean;
  role: CultRole;
  demonType: DemonType;
  necklace: Necklace;  // Linked to a Gift id
  traits: string[];       // List of traits like ["Faithful", "Germaphobe"]
  createdAt: number;      // Timestamp
}
