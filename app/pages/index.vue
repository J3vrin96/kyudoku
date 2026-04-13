<script setup lang="ts">
import SudokuGrid from '~/components/SudokuGrid.vue';

useSeoMeta({
  title: "Kyudoku | Zen Sudoku Experience",
  description:
    "Master the nine with Kyudoku, a minimalist Sudoku application built with Nuxt 4.",
});
</script>

<style scoped src="./index.css" />

<template>
  <div class="page-container">
    <SudokuGrid />
  </div>
</template>
