import { CharacterClass, SavingThrowType } from '../types/character';
import { DiceType } from '../types/dice';

export const fighterClass: CharacterClass = {
  name: 'Fighter',
  training: 'Any weapon, armor and shield',
  lifeDice: DiceType.D8,
  savingThrows: {
    1: {
      [SavingThrowType.DEATH]: 14,
      [SavingThrowType.WANDS]: 15,
      [SavingThrowType.PARALYSIS]: 16,
      [SavingThrowType.BREATH]: 17,
      [SavingThrowType.SPELLS]: 18
    },
    2: {
      [SavingThrowType.DEATH]: 14,
      [SavingThrowType.WANDS]: 15,
      [SavingThrowType.PARALYSIS]: 16,
      [SavingThrowType.BREATH]: 17,
      [SavingThrowType.SPELLS]: 18
    },
    3: {
      [SavingThrowType.DEATH]: 14,
      [SavingThrowType.WANDS]: 15,
      [SavingThrowType.PARALYSIS]: 16,
      [SavingThrowType.BREATH]: 17,
      [SavingThrowType.SPELLS]: 18
    }
  }
};

export const magicUserClass: CharacterClass = {
  name: 'Magic-User',
  training: 'Dagger only, no armor',
  lifeDice: DiceType.D4,
  savingThrows: {
    1: {
      [SavingThrowType.DEATH]: 13,
      [SavingThrowType.WANDS]: 13,
      [SavingThrowType.PARALYSIS]: 13,
      [SavingThrowType.BREATH]: 13,
      [SavingThrowType.SPELLS]: 13
    },
    2: {
      [SavingThrowType.DEATH]: 13,
      [SavingThrowType.WANDS]: 13,
      [SavingThrowType.PARALYSIS]: 13,
      [SavingThrowType.BREATH]: 13,
      [SavingThrowType.SPELLS]: 13
    },
    3: {
      [SavingThrowType.DEATH]: 13,
      [SavingThrowType.WANDS]: 13,
      [SavingThrowType.PARALYSIS]: 13,
      [SavingThrowType.BREATH]: 13,
      [SavingThrowType.SPELLS]: 13
    }
  }
};

// Export all classes in an object for easy access
export const characterClasses = {
  fighter: fighterClass,
  magicUser: magicUserClass
} as const;

export const abilityScoreBonus = [
  { min: 3, max: 3, bonus: -3 },
  { min: 4, max: 5, bonus: -2 },
  { min: 6, max: 8, bonus: -1 },
  { min: 9, max: 12, bonus: 0 },
  { min: 13, max: 15, bonus: +1 },
  { min: 16, max: 17, bonus: +2 },
  { min: 18, max: 18, bonus: +3 }
];
