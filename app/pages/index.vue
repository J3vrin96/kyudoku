<script setup lang="ts">
useSeoMeta({
  title: "Kyudoku | Zen Sudoku Experience",
  description:
    "Master the nine with Kyudoku, a minimalist Sudoku application built with Nuxt 4.",
});
</script>

<template>
  <div class="page-container">
    <!--TODO: implement sudoku grid -->
  </div>
</template>

<style scoped>
.page-container {
  width: 100%;
  display: flex;
  justify-content: center;
  animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
