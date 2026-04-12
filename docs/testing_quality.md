# Testing & Quality

This project uses automated checks to guarantee code quality and prevent regressions.

## Tooling

- Test runner: Vitest
- Component testing: Vue Test Utils
- Linting: ESLint
- Type safety: TypeScript
- CI: GitHub Actions

## Test Scope

Tests are organized by feature and file responsibility.

- Components:
  - [app/components/AppHeader.spec.ts](app/components/AppHeader.spec.ts)
  - [app/components/AppFooter.spec.ts](app/components/AppFooter.spec.ts)
  - [app/components/Select.spec.ts](app/components/Select.spec.ts)
  - [app/components/SudokuGrid.spec.ts](app/components/SudokuGrid.spec.ts)
- Composables:
  - [app/composables/useSudoku.spec.ts](app/composables/useSudoku.spec.ts)
  - [app/composables/useSudokuKeyboard.spec.ts](app/composables/useSudokuKeyboard.spec.ts)
- Utilities:
  - [app/utils/sudoku.spec.ts](app/utils/sudoku.spec.ts)
  - [app/utils/date.spec.ts](app/utils/date.spec.ts)
- Server API:
  - [server/api/sudoku.test.ts](server/api/sudoku.test.ts)

## Local Commands

Run quality checks locally before pushing:

```bash
npm run lint
npm run test -- --run
npm run build
```

Notes:
- `npm run test` launches Vitest in watch mode.
- `npm run test -- --run` is the one-shot mode used by CI.

## CI Pipeline

The CI workflow is defined in [/.github/workflows/ci.yml](.github/workflows/ci.yml).

It runs on push and pull requests and executes:

1. `npm ci`
2. `npm run lint`
3. `npm run test -- --run`
4. `npm run build`

If any step fails, the pipeline fails.

## Quality Principles

- Keep logic in pure utility functions when possible for easier testing.
- Test behavior, not implementation details.
- Prefer explicit and readable variable names.
- Update related tests when changing composables or component contracts.
