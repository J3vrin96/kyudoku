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

<style scoped>
.sudoku-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
}

/* Header & Inputs */
.board-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 24px;
}

.difficulty-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.difficulty-wrapper label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #64748b;
  letter-spacing: 0.05em;
}

/* The Grid Board */
.board-card {
  background: var(--surface-color);
  padding: 8px;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-light);
}

.board {
  display: flex;
  flex-direction: column;
  border: 2px solid var(--border-heavy);
  user-select: none;
}

.row {
  display: flex;
}

.cell {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--primary-accent); /* User input color */
  background: var(--surface-color);
  border: 0.5px solid var(--border-light);
  cursor: pointer;
  transition: all 0.15s ease;
}

@media (max-width: 500px) {
  .cell {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
}

/* Custom Borders for 3x3 Blocks */
.br-heavy {
  border-right: 2px solid var(--border-heavy);
}
.bb-heavy {
  border-bottom: 2px solid var(--border-heavy);
}

/* Cell States */
.cell:hover {
  background-color: #f1f5f9;
}
.is-active {
  background-color: #e0e7ff !important;
  box-shadow: inset 0 0 0 2px var(--primary-accent);
  z-index: 10;
}
.is-initial {
  color: var(--text-main);
  background-color: #f8fafc;
  font-weight: 700;
}
.is-error {
  color: var(--error-color);
  background-color: #fef2f2;
}

/* Footer & Buttons */
.game-footer {
  margin-top: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.btn-primary {
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: none;
  background: var(--text-main);
  color: white;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition:
    transform 0.1s,
    opacity 0.2s;
}

.btn-primary:active {
  transform: scale(0.98);
}
.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.btn-success {
  background: var(--success-color) !important;
}

.btn-icon {
  background: transparent;
  border: 1px solid var(--border-light);
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

/* Alerts */
.alert {
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  background: #fee2e2;
  color: var(--error-color);
  border: 1px solid #fecaca;
}
.alert-success {
  background: #d1fae5;
  color: var(--success-color);
  border: 1px solid #a7f3d0;
}

/* Animations */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.skeleton-grid {
  display: grid;
  grid-template-columns: repeat(9, 50px);
  gap: 1px;
  background: #e2e8f0;
}
.skeleton-cell {
  width: 50px;
  height: 50px;
  background: #f1f5f9;
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}
</style>
