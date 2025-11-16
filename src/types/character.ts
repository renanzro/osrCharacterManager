import { DiceType } from './dice';
import type { CharacterAttributes } from './attributes.ts';
import type { EquipmentItem } from './tables';

export enum SavingThrowType {
  DEATH, // death/poison
  WANDS,
  PARALYSIS, // paralisis/petrify
  BREATH, // breath attacks
  SPELLS // spells/rods/staves
}

// Type for a single level's saving throws
type LevelSavingThrows = {
  [key in SavingThrowType]: number;
};

// Type that enforces all levels must be present
type CharacterSavingThrows = {
  [key in number]: LevelSavingThrows;
};

export interface CharacterClass {
  name: string;
  training: string;
  lifeDice: DiceType;
  savingThrows: CharacterSavingThrows;
}

// Level-zero character: random attributes and occupation, no class
export interface LevelZeroCharacter {
  id: string;
  name: string;
  attributes: CharacterAttributes;
  // human-readable occupation name (fallback)
  occupation: string;
  // structured equipment items: name, optional quantity, optional unit and optional observation
  equipment: EquipmentItem[];
  // starting gold pieces
  gp: number;
  createdAt: Date;
}
