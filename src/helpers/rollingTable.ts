import { DiceType } from '../types/dice';
import type {
  RollingTable,
  RollingTableData,
  RollingTableEntrySingle,
  RollingTableEntryTranslated,
  Localized
} from '../types/tables';

/**
 * Find an entry by roll value in a table (works for both single-language and translated tables)
 */
export function findEntryByRoll<T extends RollingTableData = RollingTableData>(
  table: RollingTable<T>,
  roll: number
): RollingTableEntrySingle<T> | RollingTableEntryTranslated<T> | undefined {
  return table.entries.find(e => roll >= e.min && roll <= e.max);
}

/**
 * Get localized data from an entry
 */
export function getLocalizedData<T extends RollingTableData>(
  entry: RollingTableEntrySingle<T> | RollingTableEntryTranslated<T>,
  locale: string
): T | Localized<T> {
  if (Array.isArray(entry.data)) {
    // Translated entry
    const found = entry.data.find(d => d.language === locale);
    return found || entry.data[0]; // fallback to first language
  }
  // Single-language entry
  return entry.data;
}

function getDiceRange(diceType: DiceType) {
  const sides = Number(diceType.replace(/^d/i, ''));
  if (!Number.isInteger(sides) || sides < 1) {
    throw new Error(`Unsupported dice type: ${diceType}`);
  }
  return { min: 1, max: sides };
}

/**
 * Validate that a table's entries cover the expected range without gaps or overlaps
 */
export function validateTableCoverage<T extends RollingTableData>(table: RollingTable<T>) {
  const { min: minExpected, max: maxExpected } = getDiceRange(table.diceType);
  const issues: string[] = [];
  const sorted = [...table.entries].sort((a, b) => a.min - b.min);

  let cursor = minExpected;

  for (const e of sorted) {
    const entryName = Array.isArray(e.data) ? e.data[0]?.name : e.data.name;

    if (e.min > e.max) {
      issues.push(`Entry ${entryName} (${e.min}-${e.max}) has min > max`);
    }
    if (e.min > cursor) {
      issues.push(`Gap: ${cursor}..${e.min - 1} not covered`);
    }
    if (e.min < cursor) {
      issues.push(
        `Overlap or duplicate starting at ${e.min} (entry ${entryName} ${e.min}-${e.max})`
      );
    }
    cursor = Math.max(cursor, e.max + 1);
  }

  if (cursor <= maxExpected) {
    issues.push(`Range doesn't cover up to ${maxExpected} (stops at ${cursor - 1})`);
  }

  return { ok: issues.length === 0, issues };
}

export function parseRange(range: string) {
  // Accepts formats like "03-11" or "12" and returns [min,max]
  const parts = range.split('-').map(s => s.trim());
  if (parts.length === 1) {
    const n = Number(parts[0]);
    return [n, n];
  }
  if (parts.length === 2) {
    return [Number(parts[0]), Number(parts[1])];
  }
  throw new Error(`Invalid range format: ${range}`);
}
