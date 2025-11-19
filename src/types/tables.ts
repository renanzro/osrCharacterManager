import { DiceType } from './dice';

export interface EquipmentItem {
  name: string;
  quantity?: number;
  unit?: string;
  observation?: string;
}

// --- Base data interface ---
export interface RollingTableData {
  name: string;
}

/** localized wrapper for any data shape T */
export type Localized<T extends RollingTableData> = T & { language: string };

// --- Entry types ---
/** single-language entry carrying T */
export interface RollingTableEntrySingle<T extends RollingTableData = RollingTableData> {
  /** inclusive min value for the roll range (1..100) */
  min: number;
  /** inclusive max value for the roll range (1..100) */
  max: number;
  /** unique id for table entry */
  id: string;
  data: T;
}

/** translated entry carrying an array of localized T */
export interface RollingTableEntryTranslated<T extends RollingTableData = RollingTableData> {
  /** inclusive min value for the roll range (1..100) */
  min: number;
  /** inclusive max value for the roll range (1..100) */
  max: number;
  /** unique id for table entry */
  id: string;
  data: Localized<T>[];
}

// --- Table types ---
/** single-language table */
export interface RollingTableSingle<
  T extends RollingTableData = RollingTableData,
  U extends RollingTableEntrySingle<T> = RollingTableEntrySingle<T>
> {
  /** unique id for table */
  id: string;
  /** which die to roll to select an entry */
  diceType: DiceType;
  /** ISO language code (e.g., 'en', 'pt-BR') */
  language: string;
  /** human-friendly name for the table */
  name: string;
  /** discriminant: marks this as single-language */
  translated: false;
  entries: U[];
}

/** translated table */
export interface RollingTableTranslated<
  T extends RollingTableData = RollingTableData,
  U extends RollingTableEntryTranslated<T> = RollingTableEntryTranslated<T>
> {
  /** unique id for table */
  id: string;
  /** which die to roll to select an entry */
  diceType: DiceType;
  /** localized table names */
  name: Array<{ language: string; value: string }>;
  /** discriminant: marks this as translated */
  translated: true;
  entries: U[];
}

/** discriminated union preserving generic T for actual data shapes */
export type RollingTable<T extends RollingTableData = RollingTableData> =
  | RollingTableSingle<T>
  | RollingTableTranslated<T>;

// --- Occupation-specific data ---
export interface OccupationData extends RollingTableData {
  name: string;
  weapon?: EquipmentItem;
  equipment: EquipmentItem[];
}

export type OccupationEntry =
  | RollingTableEntrySingle<OccupationData>
  | RollingTableEntryTranslated<OccupationData>;
export type OccupationTable = RollingTable<OccupationData>;
