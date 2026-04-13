# Design System

Kyudoku follows an **minimalist & Japanese-inspired** design philosophy — a pared-down aesthetic inspired by Japanese minimalism, combining high contrast with generous whitespace and a muted natural palette.

## CSS Custom Properties

All design tokens are defined as CSS variables in [`app/assets/css/main.css`](../app/assets/css/main.css).

```css
:root {
  --font-primary: "Inter", sans-serif;
  --bg-color: #f4f4f0;
  --surface-color: #ffffff;
  --header-bg: #111112;
  --header-text: #f4f4f0;
  --primary-accent: #3730a3;
  --success-color: #166534;
  --error-color: #b91c1c;
  --text-main: #111112;
  --text-muted: #71717a;
  --border-heavy: #111112;
  --border-light: #e2e2da;
  --shadow-md: 0 2px 12px rgba(17,17,18,0.06), 0 6px 24px rgba(17,17,18,0.04);
}
```

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-color` | `#f4f4f0` | Main page background — off-white, warm tint |
| `--surface-color` | `#ffffff` | Game board and card containers |
| `--header-bg` | `#111112` | Header background — near-black |
| `--header-text` | `#f4f4f0` | Header text and icon color |
| `--primary-accent` | `#3730a3` | User-entered numbers, interactive elements (Indigo-800) |
| `--success-color` | `#166534` | Completion feedback, valid states (Green-800) |
| `--error-color` | `#b91c1c` | Invalid cell values, validation errors (Red-700) |
| `--text-main` | `#111112` | Primary text — near-black, high contrast |
| `--text-muted` | `#71717a` | Secondary text, labels, captions (Zinc-500) |
| `--border-heavy` | `#111112` | 3×3 Sudoku block separators |
| `--border-light` | `#e2e2da` | Individual cell borders, dividers |
| `--shadow-md` | — | Subtle layered box-shadow for cards |

## Typography

**Font:** Inter (Google Fonts), weights 400–900.

```
https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap
```

Inter is a geometric sans-serif optimized for screen legibility, especially with numeric content. Heavy weights (800–900) are used for headings and the logo to create visual anchoring.

## Header

The header uses a full-width dark band (`--header-bg`) creating a strong visual break from the content area. The logo combines a 3×3 SVG grid icon (referencing the Sudoku board) with the app name in `font-weight: 900`. The GitHub link is styled as a ghost button with a light border on the dark background.

## Layout & Spacing

- **Main content padding:** `2rem 1rem` — ensures horizontal breathing room on all screen sizes including mobile
- **Game container max-width:** `500px` — constrains the board to a comfortable reading width
- **Board card padding:** `8px` with `border-radius: 12px` and `--shadow-md`
- **Flexbox-first** layout throughout

## Responsive Grid

Cell sizes scale fluidly using CSS `min()` — no breakpoints needed:

```css
.cell {
  width: min(50px, calc((100vw - 52px) / 9));
  height: min(50px, calc((100vw - 52px) / 9));
  font-size: clamp(0.85rem, 3.5vw, 1.25rem);
}
```

The `52px` offset accounts for cumulative paddings (layout `1rem × 2`, board-card `8px × 2`, board border `2px × 2`). This ensures the grid never overflows on narrow screens (e.g. 375px → ~36px/cell).

## Interactive Elements

- **Hover:** Subtle tint (`#ebebea` background)
- **Active cell:** Indigo tint (`#e0e7ff`) with inset `2px` accent border
- **Initial cells:** Bold weight on `#f2f2ef` background — visually distinct from user input
- **Error cells:** Red text on `#fef2f2` background
- **Transitions:** `0.15s ease` on all interactive cells; `0.18s ease` on buttons

## Animations

Animate.css is imported globally for entrance animations. The win/error alert uses a custom `slide-up` Vue transition (`translateY(10px)` enter, `translateY(-10px)` leave).

## Key Principles

- **High contrast** between text and background for readability (WCAG AA)
- **No decorative color** — accent colors carry semantic meaning only
- **Fluid sizing** over breakpoints — components adapt without media query steps
- **Centralized tokens** — all colors and shadows defined once in `main.css`
