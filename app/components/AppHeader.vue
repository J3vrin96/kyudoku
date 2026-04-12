<template>
  <header class="header">
    <div class="header-content">
      <div class="logo">
        <span class="logo-icon animate__animated animate__rotateIn">🧩</span>
        <div class="logo-text">
          <h1>Kyudoku</h1>
          <p>Zen Logic Puzzle</p>
        </div>
      </div>

      <nav class="header-nav">
        <a
          href="https://github.com/J3vrin96/kyudoku"
          target="_blank"
          rel="noopener noreferrer"
          class="github-link"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
          <span>View on GitHub</span>
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  background: var(--surface-color);
  border-bottom: 1px solid var(--border-light);
  padding: 1.25rem 0;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.logo-icon {
  font-size: 1.8rem;
}

.logo-text h1 {
  font-family: var(--font-secondary);
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1;
  color: var(--text-main);
  letter-spacing: -0.02em;
}

.logo-text p {
  font-size: 0.7rem;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.github-link {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-main);
  text-decoration: none;
  background: #f1f5f9;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid var(--border-light);
  transition: all 0.2s ease;
}

.github-link:hover {
  background: #e2e8f0;
  border-color: #cbd5e1;
  transform: translateY(-1px);
}

.github-link svg {
  color: #1e293b;
}

@media (max-width: 480px) {
  .github-link span {
    display: none;
  }
}
</style>
