<template>
  <v-container>
    <h1 class="text-h4 mb-6">{{ t('manageLevelZero.pageTitle') }}</h1>

    <!-- Generation and Import Controls (Always visible) -->
    <v-card class="mb-6 pa-4">
      <v-card-title>{{ t('manageLevelZero.managementTitle') }}</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model.number="charactersToGenerate"
              :label="t('manageLevelZero.numberLabel')"
              type="number"
              min="1"
              max="100"
              density="compact"
            />
          </v-col>
          <v-col cols="12" md="2">
            <v-btn color="primary" size="large" @click="generateCharacters" :loading="isGenerating">
              <v-icon start>mdi-dice-multiple</v-icon>
              {{ t('manageLevelZero.generate') }}
            </v-btn>
          </v-col>
          <v-col cols="12" md="2">
            <v-btn color="primary" size="large" variant="tonal" @click="openFileInput">
              <v-icon start>mdi-upload</v-icon>
              {{ t('manageLevelZero.import') }}
            </v-btn>
            <input
              ref="fileInput"
              type="file"
              accept=".json"
              style="display: none"
              @change="importCharactersFromJSON"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Characters List -->
    <div v-if="characters.length > 0">
      <h2 class="text-h5 mb-4">
        {{ t('manageLevelZero.generatedCharacters', { count: characters.length }) }}
      </h2>

      <v-row>
        <v-col v-for="char in characters" :key="char.id" cols="12" md="6" lg="4">
          <v-card>
            <!-- Editable Name -->
            <v-card-title
              v-if="!editingId.has(char.id)"
              class="text-subtitle-1 d-flex justify-space-between align-center"
            >
              <span>{{ char.name }}</span>
              <v-btn
                icon="mdi-pencil"
                size="x-small"
                variant="text"
                @click="startEditingName(char.id)"
              />
            </v-card-title>
            <div v-else class="pa-4">
              <v-text-field
                v-model="char.name"
                @blur="endEditingName(char.id)"
                @keyup.enter="endEditingName(char.id)"
                @keyup.escape="endEditingName(char.id)"
                autofocus
                hide-details
                density="compact"
              />
            </div>

            <v-card-subtitle>
              {{ getLocalizedOccupationName(char) }}
            </v-card-subtitle>

            <v-card-text>
              <div class="mb-4">
                <div class="text-subtitle-2 font-weight-bold mb-3">
                  {{ t('manageLevelZero.attributes') }}
                </div>
                <v-row dense class="justify-space-between">
                  <v-col v-for="(value, attr) in char.attributes" :key="attr" cols="5">
                    <div class="d-flex justify-space-between">
                      <span class="text-capitalize text-caption font-weight-medium">
                        {{ t(`attributes.${attr}`) }}:
                      </span>
                      <span class="font-weight-bold text-caption">
                        {{ value }}
                        <span class="text-primary">
                          ({{ formatBonus(getAbilityBonus(value)) }})
                        </span>
                      </span>
                    </div>
                  </v-col>
                </v-row>
              </div>

              <v-divider class="my-3" />

              <v-row class="mt-4">
                <v-col cols="12" md="3" class="mb-3 mb-md-0">
                  <div class="text-subtitle-2 font-weight-bold mb-2">
                    {{ t('manageLevelZero.gold') }}
                  </div>
                  <div class="text-caption">{{ char.gp }}</div>
                </v-col>
                <v-col cols="12" md="9">
                  <div class="text-subtitle-2 font-weight-bold mb-2">
                    {{ t('manageLevelZero.equipment') }}
                  </div>
                  <div class="text-caption">{{ getEquipmentDisplay(char) }}</div>
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-actions>
              <v-btn size="small" variant="text" @click="copyCharacterToClipboard(char)">
                <v-icon start size="small">mdi-content-copy</v-icon>
                {{ t('manageLevelZero.copyJson') }}
              </v-btn>
              <v-spacer />
              <v-btn size="small" color="error" variant="text" @click="removeCharacter(char.id)">
                <v-icon start size="small">mdi-delete</v-icon>
                {{ t('manageLevelZero.remove') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mt-6">
        <v-spacer />
        <v-btn
          color="primary"
          size="large"
          variant="tonal"
          @click="exportCharactersToJSON"
          class="mx-3"
        >
          <v-icon start>mdi-download</v-icon>
          {{ t('manageLevelZero.export') }}
        </v-btn>
        <v-btn color="error" size="large" variant="outlined" @click="clearCharacters" class="mx-3">
          <v-icon start>mdi-delete</v-icon>
          {{ t('manageLevelZero.clearAll') }}
        </v-btn>
      </v-row>
    </div>

    <!-- Empty State -->
    <v-empty-state
      v-else
      icon="mdi-dice-d20"
      :title="t('manageLevelZero.emptyTitle')"
      :text="t('manageLevelZero.emptyText')"
    />
  </v-container>
</template>

<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { v4 as uuidv4 } from 'uuid';

  import { Occupations } from '../constants/level-zero-characters.ts';
  import { abilityScoreBonus } from '../constants/character-classes.ts';

  import { findEntryByRoll } from '../helpers/rollingTable.ts';
  import { generateCharacterName } from '../helpers/nameGenerator.ts';
  import { resolveOccupation } from '../helpers/character.ts';

  import { AttributeType, CharacterAttributes } from '../types/attributes.ts';
  import { LevelZeroCharacter } from '../types/character.ts';

  const { t, locale } = useI18n();

  const STORAGE_KEY = 'osrcharactermanager.levelZero.characters';

  //#region State / refs
  const characters = ref<LevelZeroCharacter[]>([]);
  const charactersToGenerate = ref<number>(3);
  const isGenerating = ref<boolean>(false);
  const fileInput = ref<HTMLInputElement | null>(null);
  const editingId = ref<Set<string>>(new Set());
  //#endregion

  //#region Helpers (dice, bonus formatting)
  function roll3d6(): number {
    return Array.from({ length: 3 }, () => Math.floor(Math.random() * 6) + 1).reduce(
      (a, b) => a + b,
      0
    );
  }

  function getAbilityBonus(score: number): number {
    const row = abilityScoreBonus.find(r => score >= r.min && score <= r.max);
    return row?.bonus ?? 0;
  }

  function formatBonus(bonus: number): string {
    if (bonus > 0) return `+${bonus}`;
    if (bonus < 0) return `${bonus}`;
    return '0';
  }

  // Get localized occupation name by resolving from table
  function getLocalizedOccupationName(char: LevelZeroCharacter): string {
    const occupation = resolveOccupation(char, [Occupations], locale.value);
    return occupation?.name ?? t('manageLevelZero.none');
  }

  // Get formatted equipment display
  function getEquipmentDisplay(char: LevelZeroCharacter): string {
    const occupation = resolveOccupation(char, [Occupations], locale.value);
    if (!occupation) return String(t('manageLevelZero.none'));

    const items: string[] = [];

    // Add weapon first if present
    if (occupation.weapon) {
      items.push(occupation.weapon.name);
    }

    // Add equipment items
    occupation.equipment.forEach(item => {
      let itemStr = item.name;

      if (item.quantity != null) {
        if (item.unit) {
          itemStr += ` (${item.quantity} ${item.unit})`;
        } else {
          itemStr += ` (${item.quantity}x)`;
        }
      }

      if (item.observation) {
        itemStr += ` — ${item.observation}`;
      }

      items.push(itemStr);
    });

    return items.length > 0 ? items.join(', ') : String(t('manageLevelZero.none'));
  }
  //#endregion

  //#region Generators (attributes & character)
  function generateRandomAttributes(): CharacterAttributes {
    return {
      [AttributeType.STRENGTH]: roll3d6(),
      [AttributeType.INTELLIGENCE]: roll3d6(),
      [AttributeType.WISDOM]: roll3d6(),
      [AttributeType.DEXTERITY]: roll3d6(),
      [AttributeType.CONSTITUTION]: roll3d6(),
      [AttributeType.CHARISMA]: roll3d6()
    };
  }

  function generateLevelZeroCharacter(): LevelZeroCharacter {
    const roll = Math.floor(Math.random() * 100) + 1; // 1..100
    const occupationEntry = findEntryByRoll(Occupations, roll);
    if (!occupationEntry) throw new Error(`No occupation for roll ${roll}`);

    return {
      id: uuidv4(),
      name: generateCharacterName(),
      attributes: generateRandomAttributes(),
      occupationTableId: Occupations.id,
      occupationEntryId: occupationEntry.id,
      gp: roll3d6(),
      createdAt: new Date()
    };
  }
  //#endregion

  //#region File I/O (import / export / copy)
  function characterToJSON(char: LevelZeroCharacter): string {
    return JSON.stringify({ ...char, createdAt: char.createdAt.toISOString() }, null, 2);
  }

  function copyCharacterToClipboard(char: LevelZeroCharacter) {
    navigator.clipboard.writeText(characterToJSON(char));
  }

  function exportCharactersToJSON() {
    const data = characters.value.map(c => ({ ...c, createdAt: c.createdAt.toISOString() }));
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    // include full timestamp (YYYY-MM-DD_HH-mm-ss) in filename; replace ':' to avoid filesystem issues
    const now = new Date();
    const timestamp = now.toISOString().replace(/:/g, '-').replace(/\..+$/, '').replace('T', '_');
    a.download = `level-zero-characters-${timestamp}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function openFileInput() {
    fileInput.value?.click();
  }

  function validateImportedCharacter(data: unknown, index: number): LevelZeroCharacter {
    if (typeof data !== 'object' || data === null) {
      throw new Error(`Character at index ${index}: must be an object`);
    }

    const c = data as Record<string, unknown>;

    if (typeof c.id !== 'string' || !c.id) {
      throw new Error(`Character at index ${index}: missing or invalid 'id' field`);
    }

    if (typeof c.name !== 'string' || !c.name) {
      throw new Error(`Character at index ${index}: missing or invalid 'name' field`);
    }

    if (typeof c.occupationTableId !== 'string' || !c.occupationTableId) {
      throw new Error(`Character at index ${index}: missing or invalid 'occupationTableId' field`);
    }

    if (typeof c.occupationEntryId !== 'string' || !c.occupationEntryId) {
      throw new Error(`Character at index ${index}: missing or invalid 'occupationEntryId' field`);
    }

    if (typeof c.gp !== 'number' || c.gp < 0) {
      throw new Error(`Character at index ${index}: 'gp' must be a non-negative number`);
    }

    // Validate attributes
    if (typeof c.attributes !== 'object' || c.attributes === null) {
      throw new Error(`Character at index ${index}: missing or invalid 'attributes' object`);
    }

    const attrs = c.attributes as Record<string, unknown>;
    const requiredAttrs = [
      AttributeType.STRENGTH,
      AttributeType.INTELLIGENCE,
      AttributeType.WISDOM,
      AttributeType.DEXTERITY,
      AttributeType.CONSTITUTION,
      AttributeType.CHARISMA
    ];

    for (const attr of requiredAttrs) {
      if (typeof attrs[attr] !== 'number' || attrs[attr] < 3 || attrs[attr] > 18) {
        throw new Error(
          `Character at index ${index}: attribute '${attr}' must be a number between 3 and 18`
        );
      }
    }

    // Validate createdAt
    if (typeof c.createdAt !== 'string' && !(c.createdAt instanceof Date)) {
      throw new Error(`Character at index ${index}: 'createdAt' must be a string or Date`);
    }
    let createdAtDate: Date;
    if (typeof c.createdAt === 'string') {
      createdAtDate = new Date(c.createdAt);
    } else {
      createdAtDate = c.createdAt;
    }

    return {
      id: c.id,
      name: c.name,
      attributes: attrs as unknown as CharacterAttributes,
      occupationTableId: c.occupationTableId,
      occupationEntryId: c.occupationEntryId,
      gp: c.gp,
      createdAt: createdAtDate
    };
  }

  function importCharactersFromJSON(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = e => {
      try {
        const result = e.target?.result;
        if (typeof result !== 'string') {
          throw new Error('Failed to read file content');
        }

        const parsed: unknown = JSON.parse(result);
        const arr = Array.isArray(parsed) ? parsed : [parsed];

        if (arr.length === 0) {
          throw new Error('No characters found in file');
        }

        const validated = arr.map((data, index) => validateImportedCharacter(data, index));

        const imported: LevelZeroCharacter[] = validated.map(c => ({
          id: c.id,
          name: c.name,
          attributes: c.attributes,
          occupationTableId: c.occupationTableId,
          occupationEntryId: c.occupationEntryId,
          gp: c.gp,
          createdAt: c.createdAt instanceof Date ? c.createdAt : new Date(c.createdAt)
        }));

        characters.value.push(...imported);
        alert(
          `Successfully imported ${imported.length} character${imported.length !== 1 ? 's' : ''}`
        );
      } catch (err) {
        console.error('Import failed', err);
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        alert(`Failed to import characters:\n\n${errorMessage}`);
      } finally {
        if (fileInput.value) fileInput.value.value = '';
      }
    };
    reader.readAsText(file);
  }
  //#endregion

  //#region UI Actions (generate, remove, edit)
  async function generateCharacters() {
    isGenerating.value = true;
    try {
      await new Promise(res => setTimeout(res, 300));
      const count = Math.min(Math.max(1, Number(charactersToGenerate.value || 1)), 100);
      for (let i = 0; i < count; i++) {
        characters.value.push(generateLevelZeroCharacter());
      }
    } finally {
      isGenerating.value = false;
    }
  }

  function removeCharacter(id: string) {
    characters.value = characters.value.filter(c => c.id !== id);
  }

  function clearCharacters() {
    characters.value = [];
  }

  function startEditingName(id: string) {
    editingId.value.add(id);
  }

  function endEditingName(id: string) {
    editingId.value.delete(id);
  }
  //#endregion

  // Load persisted characters on mount
  onMounted(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            characters.value = parsed.map((c: any) => ({
              ...c,
              gp: typeof c.gp === 'number' ? c.gp : 0,
              createdAt: new Date(c.createdAt)
            }));
          }
        }
      }
    } catch (e) {
      console.warn('Failed to load persisted level-zero characters', e);
    }
  });

  // Persist characters whenever they change
  watch(
    characters,
    newVal => {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          const serialized = JSON.stringify(
            newVal.map(c => ({ ...c, createdAt: c.createdAt.toISOString() }))
          );
          localStorage.setItem(STORAGE_KEY, serialized);
        }
      } catch (e) {
        console.warn('Failed to persist level-zero characters', e);
      }
    },
    { deep: true }
  );
</script>
