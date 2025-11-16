import { ref } from 'vue';
import type { DiceType } from '../types/dice';

// Simple composable that holds a selected dice and provides a roll function.
// Keeps UI components focused on presentation.
export function useDice() {
  const selectedDice = ref<DiceType | undefined>(undefined);

  function rollDice(): number | undefined {
    const s = selectedDice.value;
    if (!s) return undefined;
    // DiceType values are strings like 'd6' — extract number of sides
    const sides = parseInt(s.replace(/^d/i, ''), 10);
    if (!Number.isFinite(sides) || sides <= 0) return undefined;
    const result = Math.floor(Math.random() * sides) + 1;
    // Keep side-effects out of components where possible; return result for the caller
    return result;
  }

  return { selectedDice, rollDice } as const;
}
