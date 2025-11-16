import { DiceType } from './dice';

export interface EquipmentItem {
  name: string;
  quantity?: number;
  unit?: string;
  observation?: string;
}

export interface RollingTableEntry {
  /** inclusive min value for the roll range (1..100) */
  min: number;
  /** inclusive max value for the roll range (1..100) */
  max: number;
  /** display name for the row */
  name: string;
}

export interface RollingTable<T extends RollingTableEntry = RollingTableEntry> {
  /** which die to roll to select an entry (keeps your DiceType enum) */
  diceType: DiceType;
  /** human-friendly name for the table (optional) */
  name?: string;
  entries: T[];
}

export interface OccupationEntry extends RollingTableEntry {
  /** optional starting weapon. Use structured item so we can represent quantity/unit/observation */
  weapon?: EquipmentItem;
  /** starting equipment list as structured items */
  equipment: EquipmentItem[];
}
export type OccupationTable = RollingTable<OccupationEntry>;
