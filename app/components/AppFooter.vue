<script setup lang="ts">
import { getCurrentYear } from "~/utils/date";

const currentYear = getCurrentYear();
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__content-info">
        <p><strong>Kyudoku</strong> &copy; {{ currentYear }}</p>
        <span class="divider">/</span>
        <p>Frontend Developer Assessment</p>
      </div>

      <div class="footer__stack">
        <span class="footer__stack-tag">Nuxt 4</span>
        <span class="footer__stack-tag">TypeScript</span>
        <span class="footer__stack-tag">Vitest</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  margin-top: auto;
  padding: 2.5rem 0;
  border-top: 1px solid var(--border-light);
  color: #94a3b8;
}

.footer__content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer__content-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
}

.divider {
  opacity: 0.5;
}

.footer__stack {
  display: flex;
  gap: 0.5rem;
}

.footer__stack-tag {
  font-size: 0.7rem;
  background: #f1f5f9;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 600;
  color: #64748b;
}
</style>
