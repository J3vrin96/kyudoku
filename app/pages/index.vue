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
    <div class="page-intro">
      <h1>九独</h1>
      <p>Fill the grid. Nine rows, nine columns, nine boxes — each must contain every digit from 1 to 9. No repeats, no shortcuts.</p>
    </div>
    <SudokuGrid />
  </div>
</template>
