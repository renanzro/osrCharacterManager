import { DiceType } from './dice';
import type { CharacterAttributes } from './attributes.ts';

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

// Level-zero character: random attributes and occupation reference, no class
// Occupation details (name, equipment, weapon) are resolved from the table + entry IDs
export interface LevelZeroCharacter {
  id: string;
  name: string;
  attributes: CharacterAttributes;
  /** ID of the occupation table (e.g., 'level-zero-occupations') */
  occupationTableId: string;
  /** ID of the specific occupation entry (e.g., '01-02') */
  occupationEntryId: string;
  /** starting gold pieces */
  gp: number;
  createdAt: Date;
}
