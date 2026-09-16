
export type CultRole = 'disciple' | 'loyalty_enforcer' | 'ritual_leader' | null;

export interface Follower {
  id: string;
  name: string;
  level: number;          
  skin: string;           // e.g. "Deer", "Cat", "Fox"
  outfit: string;         // e.g. "Cult Robes", "Warrior Garb"
  isMarried: boolean;
  isFavorite: boolean;
  isDead: boolean;
  role: CultRole;
  demonId: string | null;
  necklaceId: string | null;  // Linked to a Gift id
  traits: string[];       // List of traits like ["Faithful", "Germaphobe"]
  createdAt: number;      // Timestamp
}
