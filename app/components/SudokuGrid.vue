<script setup lang="ts">
import { watch, onMounted, computed } from "vue";
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

const focusedCellIsInitial = computed(() =>
  focusedCell.value
    ? grid.value[focusedCell.value.row]?.[focusedCell.value.col]?.initial ?? false
    : false
);

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

    <div class="board-card" :class="{ 'board-won': isWon }">
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
            <span v-if="cell.value" :key="cell.value" class="cell-value">{{ cell.value }}</span>
          </div>
        </div>
      </div>
    </div>

    <Transition name="slide-up">
      <div v-if="focusedCell && !isLoading && !isWon" class="numpad">
        <button
          v-for="number in 9"
          :key="number"
          class="numpad-btn"
          :disabled="focusedCellIsInitial"
          @click="focusedCell && setCellValue(focusedCell.row, focusedCell.col, number)"
        >{{ number }}</button>
        <button
          class="numpad-btn numpad-clear"
          :disabled="focusedCellIsInitial"
          @click="focusedCell && setCellValue(focusedCell.row, focusedCell.col, null)"
        >⌫</button>
      </div>
    </Transition>

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
