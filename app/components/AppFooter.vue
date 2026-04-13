<script setup lang="ts">
import { getCurrentYear } from "~/utils/date";

const currentYear = getCurrentYear();
</script>

<style scoped src="./AppFooter.css" />

<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__content-info">
        <p><strong>Kyudoku</strong> &copy; {{ currentYear }}</p>
        <span class="divider">/</span>
        <p>@J3vrin96</p>
      </div>

      <div class="footer__stack">
        <span class="footer__stack-tag">Nuxt 4</span>
        <span class="footer__stack-tag">TypeScript</span>
        <span class="footer__stack-tag">Vitest</span>
      </div>
    </div>
  </footer>
</template>
