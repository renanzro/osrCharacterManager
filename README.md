# OSR Character Creator (Test Project)

This is a small test project I use to learn Vue and to experiment with code-assisted development.
It aims to be a general manager for traditional Old School Renaissance (OSR) tabletop RPG systems, suitable for both players and GMs.

Recommended systems:

- [d20Age](https://caramelojogos.itch.io/d20age-rpg) by Quiral Alquimista — Brazilian, available in Portuguese.
- [Basic Fantasy RPG](https://www.basicfantasy.org/) by Chris Gonnerman — free and available in multiple languages.
- [Old-School Essentials](https://necroticgnome.com/pages/about-old-school-essentials) by Necrotic Gnome — commercial, a polished modern presentation of classic OSR rules.

## Technical details

- Tech stack: Vue 3 (SFC + TypeScript) + Vite, Vuetify 3, Vue Router, vue‑i18n
- Status: The only fully implemented feature is level‑zero character generation for funnel adventures.

## Getting started

Install dependencies and run the dev server:

```bash
npm install
npm run dev       # start dev server (Vite)
```

Build and preview:

```bash
npm run build
npm run preview
```

Formatting:

```bash
npm run format
```

## Status

- Implemented:
  - Level‑zero character generation using a 1d100 occupation table and structured equipment.
- Planned:
  - Testing;
  - Printable character sheets;
  - Full character creator/editor;
  - Iimportable random tables & equipment lists, and API fetching (e.g., Open5e).

## Persistence

The app stores some data in localStorage. Example keys include `osrcharactermanager.levelZero.characters`. See `src/constants/storage.ts` for other storage keys.

## Usage Overview

- Home and quick dice roll: [src/pages/Home.vue](src/pages/Home.vue) (uses the `useDice` composable in `src/composables/useDice.ts`).
- Level‑zero characters: [src/pages/ManageLevelZero.vue](src/pages/ManageLevelZero.vue)
  - Generates attributes, rolls an occupation from the 1d100 table, and assembles structured equipment.
  - Persists data in localStorage under `osrcharactermanager.levelZero.characters`.
- i18n: configured in [src/plugins/i18n.ts](src/plugins/i18n.ts) with messages in [src/locales/en.json](src/locales/en.json) and [src/locales/pt-BR.json](src/locales/pt-BR.json).
- Theming: toggled via Vuetify’s `useTheme()` and persisted to localStorage (see `src/components/AppNavbar.vue` and keys in `src/constants/storage.ts`).

## Development Notes

- Pages are registered in the router via direct imports: see `src/plugins/router.ts`.
- Add new UI text to both locale files.
- Theme and locale persistence keys: see `src/constants/storage.ts`.
- Types live under `src/types` and should be reused across modules.

## Contributing

Contributions are welcome. Open issues or pull requests for bugs, features, or documentation improvements. Please run `npm run format` before submitting a PR.
