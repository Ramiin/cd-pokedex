# Pokedex

A single-page Pokedex built on top of the public [PokéAPI](https://pokeapi.co/). Originally built in 2022 as a technical-test project, fully refactored in 2026 to modern React best practices: layered architecture, Redux Toolkit async thunks, custom hooks, Vite, and a tested UI.

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Tech stack

- **UI:** React 18, React Router v6
- **State:** Redux Toolkit (async thunks)
- **Styling:** LESS with variable splits
- **Build:** Vite 5
- **Tests:** Vitest, React Testing Library
- **Quality:** ESLint, Prettier, Husky, lint-staged
- **CI:** GitHub Actions (lint + test + build on every push)

## Architecture

```
src/
├── config/       Constants (API base URL, page size, etc.)
├── services/     API client and pokemon service
├── store/        Redux store and slice
├── hooks/        Custom hooks (data fetching, pagination)
├── pages/        Route-level components
├── components/   Reusable UI
├── utils/        Pure helpers (pokemon response mapper)
├── styles/       LESS variables and global styles
└── assets/       Static images
```

**Design principles:**

- Components never call APIs directly. They compose hooks; hooks dispatch thunks; thunks call services.
- Pure mapping logic (`pokemonMapper`) is unit-tested in isolation.
- The slice exposes async thunks rather than hand-rolled reducers, which gives loading/error states for free.

## Getting started

**Requires Node.js 20+.**

```bash
npm install
npm run dev        # http://localhost:3000
```

### Available scripts

| Script | Description |
|---|---|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build (outputs to `build/`) |
| `npm run preview` | Preview the production build locally |
| `npm test` | Run unit tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Lint all source files |
| `npm run lint:fix` | Lint and auto-fix |
| `npm run format` | Format with Prettier |

## Testing

```bash
npm test
```

Covers:
- `pokemonMapper` pure helpers
- `pokemonsSlice` reducer and async thunk lifecycle
- `usePagination` hook (clamping, navigation)
- `PokemonCard`, `Pagination`, `Searchbar` (user-facing behavior)

## License

MIT — see [LICENSE](./LICENSE).
