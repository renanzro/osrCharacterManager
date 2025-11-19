# Copilot / AI agent instructions for OSR Character Manager

This file provides focused, repo-specific guidance for AI coding agents working in this codebase.

## Architecture Overview

- **Framework**: Vue 3 (SFCs with `<script setup lang="ts">`) + Vite
- **UI**: Vuetify 3 with autoImport (configured in `vite.config.ts`)
- **Router**: `src/plugins/router.ts` — pages in `src/pages` are imported directly (no lazy loading)
- **i18n**: `src/plugins/i18n.ts` — composition API mode (`legacy: false`), messages in `src/locales/{en,pt-BR}.json`
- **State**: localStorage for persistence (no Vuex/Pinia) — see `src/constants/storage.ts` for keys
- **Aliases**: `@/` maps to `src/` (defined in `vite.config.ts`)

## Key Files to Reference

- `src/main.ts` — app initialization: registers router, Vuetify (with dark theme default), and i18n
- `src/plugins/router.ts` — route definitions (direct imports, no lazy loading)
- `src/plugins/i18n.ts` — locale persistence via `LOCALE_STORAGE_KEY`, reads saved locale on init
- `src/constants/storage.ts` — centralized storage keys (`LOCALE_STORAGE_KEY`, `THEME_STORAGE_KEY`, `DEFAULT_THEME`)
- `src/components/AppNavbar.vue` — reference for `useI18n()`, `useTheme()`, and localStorage patterns
- `src/types/` — all TypeScript interfaces (reuse these; avoid inline types)

## Project-Specific Patterns

### Storage & Persistence

- All localStorage keys use `osrcharactermanager.` prefix (see `src/constants/storage.ts`)
- Theme persistence: read on mount in `AppNavbar.vue`, toggle via `useTheme()`, save to `THEME_STORAGE_KEY`
- Locale persistence: read in `src/plugins/i18n.ts` via `readSavedLocale()`, save on change to `LOCALE_STORAGE_KEY`
- Character data: stored as JSON arrays (e.g., `osrcharactermanager.levelZero.characters`)

### Internationalization

- **CRITICAL**: Always update both `src/locales/en.json` AND `src/locales/pt-BR.json` when adding UI text
- Use `useI18n()` composition API: `const { t, locale } = useI18n()`
- Translation keys follow nested structure: `manageLevelZero.pageTitle`, `attributes.strength`

### Routing

- Pages are `.vue` files under `src/pages/`
- Add routes by importing page in `src/plugins/router.ts` and adding to `routes` array
- Route names use PascalCase, paths use kebab-case: `{ path: '/manage-level-zero', name: 'ManageLevelZero', component: ManageLevelZero }`

### Component Architecture

- Use `<script setup lang="ts">` for all components
- Extract reusable logic to composables (`src/composables/`) — see `useDice.ts` for pattern
- Keep helpers pure (no side effects) — see `src/helpers/rollingTable.ts` and `nameGenerator.ts`
- Constants live in `src/constants/` (static data tables, storage keys)

### Type System

- All types in `src/types/` are canonical — import and use these
- `src/types/tables.ts` defines rolling table structure: `RollingTable<T>` with `diceType`, `entries[]`
- `src/types/character.ts` defines `LevelZeroCharacter` with structured `equipment: EquipmentItem[]`
- Equipment uses typed structure: `{ name: string, quantity?: number, unit?: string, observation?: string }`

### OSR-Specific Logic

- Level-zero character generation: `src/pages/ManageLevelZero.vue` + `src/constants/level-zero-characters.ts`
- Occupation tables use typed entries with min/max roll ranges (inclusive)
- Helper `findEntryByRoll()` in `src/helpers/rollingTable.ts` matches roll to table entry
- Attribute bonuses calculated inline (OSR standard: (score - 10) / 2, rounded down)

## Developer Workflows

```bash
npm run dev          # Start Vite dev server
npm run build        # Production build
npm run preview      # Preview production build locally
npm run format       # Format code with Prettier
npm run format:check # Check formatting
```

## Quick Reference Examples

### Add a new page:

1. Create `src/pages/MyFeature.vue` with `<script setup lang="ts">`
2. Import in `src/plugins/router.ts`: `import MyFeature from '../pages/MyFeature.vue'`
3. Add route: `{ path: '/my-feature', name: 'MyFeature', component: MyFeature }`

### Add UI text (internationalization):

```json
// src/locales/en.json
"myFeature": { "title": "My Feature" }

// src/locales/pt-BR.json
"myFeature": { "title": "Minha Funcionalidade" }
```

### Use theme toggling (see `AppNavbar.vue`):

```typescript
const theme = useTheme();
theme.global.name.value = readSavedTheme(); // on mount
localStorage.setItem(THEME_STORAGE_KEY, nextTheme); // on toggle
```

### Create a composable (see `useDice.ts`):

- Export a function that returns reactive refs and pure functions
- Keep side effects in the caller, not the composable

## Dependencies

- `uuid` for ID generation (v13+)
- `@mdi/font` for Material Design Icons (loaded in `src/main.ts`)
- Vuetify components auto-imported (no manual registration needed)

If unsure about patterns, reference: `src/components/AppNavbar.vue`, `src/pages/ManageLevelZero.vue`, `src/composables/useDice.ts`.
