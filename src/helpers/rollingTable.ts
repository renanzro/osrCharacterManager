import type { RollingTableEntry, RollingTable } from '../types/tables';

export function findEntryByRoll<T extends RollingTableEntry = RollingTableEntry>(
  table: RollingTable<T>,
  roll: number
): T | undefined {
  return table.entries.find(e => roll >= e.min && roll <= e.max);
}

export function validateTableCoverage<T extends RollingTableEntry = RollingTableEntry>(
  table: RollingTable<T>,
  minExpected = 1,
  maxExpected = 100
) {
  const issues: string[] = [];
  const sorted = [...table.entries].sort((a, b) => a.min - b.min);

  let cursor = minExpected;

  for (const e of sorted) {
    if (e.min > e.max) {
      issues.push(`Entry ${e.name} (${e.min}-${e.max}) has min > max`);
    }
    if (e.min > cursor) {
      issues.push(`Gap: ${cursor}..${e.min - 1} not covered`);
    }
    if (e.min < cursor) {
      issues.push(`Overlap or duplicate starting at ${e.min} (entry ${e.name} ${e.min}-${e.max})`);
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
