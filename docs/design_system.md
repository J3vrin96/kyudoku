# 🎨 Design System

The Kyudoku application follows a **"Zen Minimalist"** design philosophy, prioritizing clarity and focus on gameplay while maintaining a clean, modern aesthetic.

## CSS Custom Properties

All design tokens are defined as CSS variables in [`app/assets/css/main.css`](../app/assets/css/main.css) for easy theming and maintainability.

```css
:root {
  --font-primary: "Inter", sans-serif;
  --font-secondary: "Inter", sans-serif;
  --bg-color: #f8fafc;
  --surface-color: #ffffff;
  --primary-accent: #2563eb;
  --success-color: #10b981;
  --error-color: #ef4444;
  --text-main: #1e293b;
  --border-heavy: #1e293b;
  --border-light: #cbd5e1;
}
```

## Color Palette

| Token | Color | Hex | Usage |
|-------|-------|-----|-------|
| **Background** | Off-white | `#F8FAFC` | Main page background - reduces eye strain |
| **Surface** | Pure white | `#FFFFFF` | Game board and card containers |
| **Primary Accent** | Blue-600 | `#2563EB` | User-entered numbers, interactive elements |
| **Success** | Emerald-500 | `#10B981` | Completion feedback, valid states |
| **Error** | Red-500 | `#EF4444` | Invalid cell values, validation errors |
| **Text** | Slate-900 | `#1E293B` | Primary text content |
| **Border Heavy** | Slate-900 | `#1E293B` | 3x3 Sudoku block separators |
| **Border Light** | Slate-300 | `#CBD5E1` | Individual cell borders |

## Typography

| Type | Font | Weight | Use Case |
|------|------|--------|----------|
| Primary | Inter | 400, 600, 700 | All text content |
| Secondary | Inter | 400, 600, 700 | Alternative hierarchy |

**Rationale:** Inter is a modern, geometric sans-serif optimized for screen legibility, especially with numeric content at various scales.

**Font Import:** [Google Fonts](https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap)

## Layout & Spacing

- **Container Max-Width:** `1200px` - Optimal for content at all device sizes
- **Padding Strategy:** Responsive padding (20px on mobile, 40px on desktop)
- **Flexbox-first:** Modern layout system for responsive design
- **Box-sizing:** `border-box` - Intuitive dimension calculations

## Interactive Elements

- **Hover States:** Subtle transitions guide user interactions
- **Focus States:** Clear visual indicators for keyboard navigation
- **Touch Support:** Optimized for both keyboard and touch input
- **Animations:** Smooth fade-in and transitions using Animate.css

## Key Features

✅ **Accessibility:** High contrast ratios for readability (WCAG compliant)  
✅ **Responsiveness:** Mobile-first approach with fluid scaling  
✅ **Performance:** CSS variables for efficient theming  
✅ **Consistency:** Centralized token definitions prevent style drift
