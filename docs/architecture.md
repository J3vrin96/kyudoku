# Architecture

## 🏗️ Software Architecture

Kyudoku is built with **Nuxt 4**, **TypeScript**, and **Vue 3 Composition API**. The architecture prioritizes **modularity**, **testability**, and **minimalism**.

## 📂 Project Structure

```
app/
├── components/          # Vue components
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   ├── SudokuGrid.vue   # Main game board
│   ├── Select.vue       # Reusable select component
│   └── *.spec.ts        # Component tests
├── composables/         # Reusable logic (Vue Composition API)
│   ├── useSudoku.ts     # Game state & validation
│   ├── useSudokuKeyboard.ts  # Keyboard input handler
│   └── *.spec.ts        # Composable tests
├── utils/               # Pure utility functions
│   ├── sudoku.ts        # Game logic (isValidMove, isGridComplete)
│   ├── date.ts          # Date utilities
│   └── *.spec.ts        # Utility tests
├── types/               # TypeScript definitions
│   ├── sudoku.ts        # Game types
│   └── select.ts        # Component types
├── constants/           # Application constants
│   └── sudoku.ts        # DIFFICULTY_OPTIONS, layout constants
├── assets/css/
│   └── main.css         # Global styles & CSS variables
└── layouts/             # App layouts

server/
├── api/
│   ├── sudoku.ts        # Sudoku API endpoint (proxies to Sugoku API)
│   └── sudoku.test.ts   # API endpoint tests

docs/                    # Documentation
├── architecture.md      # This file
├── design_system.md     # Design tokens & visual guidelines
└── external_api_sudoku.md  # API integration docs
```

## 🧬 Core Concepts

### State Management

Uses **Vue's `useState`** (Nuxt composable) for server-side state management. This keeps the application lightweight and avoids heavy stores like Pinia.

**State keys:**
- `sudoku-grid`: Game board state
- `sudoku-won`: Game completion flag
- `sudoku-loading`: Loading state during API calls
- `sudoku-diff`: Selected difficulty
- `sudoku-msg`: Validation messages
- `sudoku-focus`: Currently focused cell

### Composables

**`useSudoku.ts`** - The "brain" of the application
- Manages reactive game state via `useState`
- Handles API calls to `/api/sudoku`
- Validates moves and checks for completion
- Provides methods: `loadGame()`, `setCellValue()`, `validateFullGrid()`

**`useSudokuKeyboard.ts`** - Keyboard input handler
- Listens for 1-9, Backspace, Delete keys
- Updates focused cell value
- Prevents input when game is won

### Components

**`SudokuGrid.vue`** - Main game board
- Renders 9×9 grid of cells
- Handles cell selection (click events)
- Displays difficulty selector & validation messages
- Integrates `useSudoku` and `useSudokuKeyboard`

**`Select.vue`** - Generic select component
- Reusable with TypeScript generics
- Supports v-model binding
- Used for difficulty selection

### Utilities

**`sudoku.ts`** - Pure functions
- `isValidMove(grid, row, col, value)`: Checks Sudoku rules
- `isGridComplete(grid)`: Validates complete solution

### Backend Integration

**`/api/sudoku`** endpoint
- Proxies requests to [Sugoku API](https://sugoku.onrender.com)
- Input validation (validates difficulty)
- Timeout protection (30s for cold starts)
- Comprehensive error handling with specific error types
- Runtime configuration via `nuxt.config.ts`

## 🔄 Data Flow

```
SudokuGrid.vue (UI)
    ↓
useSudoku (state)
    ↓
/api/sudoku (backend)
    ↓
Sugoku API (puzzle generation)
```

**User interaction:**
1. User clicks a cell → `focusedCell` updated
2. User presses 1-9 → `useSudokuKeyboard` calls `setCellValue(row, col, value)`
3. `setCellValue` validates move with `isValidMove()`
4. Grid updates reactively
5. User clicks "Check Solution" → `validateFullGrid()` checks completion

## 🧪 Testing Strategy

- **Component tests**: Vue Test Utils + Vitest
- **Utility tests**: Pure function testing
- **Composable tests**: Mock-based testing
- **API tests**: Endpoint validation

All test files follow the `*.spec.ts` naming convention.

## 🎨 Design System

See [design_system.md](design_system.md) for:
- CSS custom properties
- Color palette
- Responsive breakpoints
- Typography

## 🔌 API Integration

See [external_api_sudoku.md](external_api_sudoku.md) for:
- Sudoku API documentation
- Error handling strategy
- Runtime configuration
