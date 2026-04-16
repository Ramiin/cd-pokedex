# Changelog

All notable changes to this project are documented in this file.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [2.0.0] — 2026-04-15

### Added
- Vite 5 build pipeline (replaces Create React App).
- Layered architecture: `services/`, `store/`, `hooks/`, `pages/`, `components/`, `utils/`.
- Custom hooks: `usePokemonList`, `usePokemonDetails`, `usePagination`, `useRandomPokemon`.
- Redux Toolkit async thunks with loading and error state.
- `LoadingSpinner` and `ErrorMessage` components.
- PropTypes validation across all components.
- Vitest + React Testing Library setup with unit tests for service, slice, hook, and UI.
- ESLint (react, react-hooks, jsx-a11y, prettier), Prettier, EditorConfig.
- Husky pre-commit hook running lint-staged.
- GitHub Actions CI workflow (lint + test + build).
- Accessibility improvements: ARIA labels, keyboard navigation on cards, disabled states on pagination.

### Changed
- Replaced `window.location.href` navigation with `useNavigate`.
- Centralized configuration constants (API base URL, page size, totals).
- Axios calls isolated behind a `pokemonService` module with a shared `apiClient`.
- LESS split into `variables.less` and `global.less`.

### Fixed
- Duplicate stylesheet import in `App`.
- `NavigationBar` function previously named `First`.
- `Pagination` export previously misspelled as `Pgination`.
- `chargeAllTypes` thunk previously dispatched the wrong reducer.
- `console.log` left in `Details` page.

### Removed
- Dead code: `Hero.jsx`, `Original.css`, default `logo.svg`, duplicate compiled `Global.css`.
- Personal photo assets (project is now fully portable).

## [1.0.0] — 2022

Initial technical-test submission: React + Redux + LESS Pokedex with pagination, search, and routing.
