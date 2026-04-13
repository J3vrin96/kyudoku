# 🧩 Kyudoku

A minimalist Sudoku application built with **Nuxt 4**, **TypeScript**, and **Vue 3**.

> Zen Logic Puzzle - Master the nine with focus and minimalist design.

## 🚀 Quick Start

**Install dependencies:**
```bash
npm install
```

**Development server:**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

**Testing:**
```bash
npm run test
```

## 🔌 Server-Side API

The application includes a backend layer that proxies requests to the **Sudoku API**:

- **Endpoint:** `/api/sudoku?difficulty=easy|medium|hard`
- **Features:** Input validation, timeout protection (15s), error handling
- **Configuration:** Runtime settings in `nuxt.config.ts`
- **Documentation:** See [docs/external_api_sudoku.md](docs/external_api_sudoku.md)

## 📐 Architecture

For detailed information about the project structure, state management, and component hierarchy, see [docs/architecture.md](docs/architecture.md).

## 🎨 Design

The application follows a **"Zen Minimalist"** aesthetic. See [docs/design_system.md](docs/design_system.md) for details.

## ☁️ Hosting

The project is hosted on Cloudflare Pages.
For deployment details, see [docs/hosting.md](docs/hosting.md).

## 🧪 Testing

Vitest + Vue Test Utils for component and utility testing.
