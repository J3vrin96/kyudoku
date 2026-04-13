<script setup lang="ts">
import { watch, onMounted } from "vue";
import { difficultyOptions } from "~/constants/sudoku";
import { useSudoku } from "~/composables/useSudoku";
import { useSudokuKeyboard } from "~/composables/useSudokuKeyboard";

const {
  grid,
  isWon,
  isLoading,
  difficulty,
  validationMessage,
  focusedCell,
  loadGame,
  setCellValue,
  validateFullGrid,
} = useSudoku();

useSudokuKeyboard(setCellValue, focusedCell, isWon);

watch(difficulty, () => {
  loadGame();
});

onMounted(() => {
  loadGame();
});
</script>

<style scoped src="./SudokuGrid.css" />

<template>
  <div class="sudoku-container animate__animated animate__fadeIn">
    <div class="board-header">
      <div class="difficulty-wrapper">
        <Select
          label="Difficulty level"
          :options="difficultyOptions"
          v-model="difficulty"
        />
      </div>

      <button
        @click="loadGame"
        class="btn-icon"
        title="New Game"
        :disabled="isLoading"
      >
        <span v-if="!isLoading">New Game</span>
        <span v-else>Loading...</span>
      </button>
    </div>

    <div class="board-card">
      <div v-if="isLoading" class="skeleton-grid">
        <div v-for="i in 81" :key="i" class="skeleton-cell"></div>
      </div>

      <div v-else class="board">
        <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="row">
          <div
            v-for="(cell, colIndex) in row"
            :key="colIndex"
            class="cell"
            :class="{
              'is-initial': cell.initial,
              'is-error': cell.isInvalid,
              'is-active': focusedCell?.row === rowIndex && focusedCell?.col === colIndex,
              'bb-heavy': (rowIndex + 1) % 3 === 0 && rowIndex < 8,
              'br-heavy': (colIndex + 1) % 3 === 0 && colIndex < 8,
            }"
            @click="focusedCell = { row: rowIndex, col: colIndex }"
          >
            {{ cell.value ?? "" }}
          </div>
        </div>
      </div>
    </div>

    <div class="game-footer">
      <button
        @click="validateFullGrid"
        class="btn-primary"
        :class="{ 'btn-success': isWon }"
        :disabled="isLoading || isWon"
      >
        {{ isWon ? "Completed!" : "Check Solution" }}
      </button>

      <Transition name="slide-up">
        <div
          v-if="validationMessage"
          :class="['alert', { 'alert-success': isWon }]"
        >
          {{ validationMessage }}
        </div>
      </Transition>
    </div>
  </div>
</template>
