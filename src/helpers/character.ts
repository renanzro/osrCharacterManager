import type { LevelZeroCharacter } from '../types/character';
import type { OccupationTable, OccupationData } from '../types/tables';
import { getLocalizedData } from './rollingTable';

/**
 * Resolves the occupation data for a level-zero character
 * @param character The character to resolve occupation for
 * @param tables Available occupation tables (from constants or imported)
 * @param locale Current locale (e.g., 'en', 'pt-BR')
 * @returns The localized occupation data, or null if not found
 */
export function resolveOccupation(
  character: LevelZeroCharacter,
  tables: OccupationTable[],
  locale: string
): OccupationData | null {
  const table = tables.find(t => t.id === character.occupationTableId);
  if (!table) return null;

  const entry = table.entries.find(e => e.id === character.occupationEntryId);
  if (!entry) return null;

  return getLocalizedData<OccupationData>(entry, locale);
}
