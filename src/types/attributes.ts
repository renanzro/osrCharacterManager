export enum AttributeType {
  STRENGTH = 'strength',
  INTELLIGENCE = 'intelligence',
  WISDOM = 'wisdom',
  DEXTERITY = 'dexterity',
  CONSTITUTION = 'constitution',
  CHARISMA = 'charisma'
}

export interface CharacterAttributes {
  [AttributeType.STRENGTH]: number;
  [AttributeType.INTELLIGENCE]: number;
  [AttributeType.WISDOM]: number;
  [AttributeType.DEXTERITY]: number;
  [AttributeType.CONSTITUTION]: number;
  [AttributeType.CHARISMA]: number;
}

// Validation function
export function isValidAttributeValue(value: number): boolean {
  return value >= 3 && value <= 18;
}
