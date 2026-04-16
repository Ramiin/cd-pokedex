# Contributing

## Setup

```bash
git clone <repo>
cd cd-pokedex
npm install
npm run dev
```

## Workflow

1. Create a feature branch: `git checkout -b feat/<short-description>`
2. Make changes — pre-commit hook will lint and format staged files.
3. Add or update tests for any logic changes.
4. Run locally before pushing:
   ```bash
   npm run lint
   npm test
   npm run build
   ```
5. Open a pull request against `main`.

## Commit convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` new user-facing feature
- `fix:` bug fix
- `refactor:` code change that is neither a feature nor a fix
- `test:` adding or updating tests
- `docs:` documentation-only changes
- `chore:` tooling, config, dependency updates
- `style:` formatting, CSS-only
- `build:` build system / bundler changes
- `ci:` CI configuration changes

Keep the subject under 72 characters, imperative mood, lowercase.

## Code style

- Prettier enforces formatting (run `npm run format`).
- ESLint enforces React, hooks, and a11y best practices (`npm run lint`).
- Components must declare `PropTypes` for all props.
- Prefer custom hooks over component-level data fetching.
