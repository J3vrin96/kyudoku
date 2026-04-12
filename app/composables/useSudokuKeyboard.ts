import { onMounted, onUnmounted } from 'vue';
import type { Ref } from 'vue';
import type { FocusedCell } from '~/types/sudoku';

export const useSudokuKeyboard = (
  setCellValue: (row: number, col: number, value: number | null) => void,
  focusedCell: Ref<FocusedCell | null>,
  isWon: Ref<boolean>
) => {
  const handleKey = (e: KeyboardEvent) => {
    if (!focusedCell.value || isWon.value) return;

    const { row, col } = focusedCell.value;

  
    if (/^[1-9]$/.test(e.key)) {
      setCellValue(row, col, parseInt(e.key, 10));
      return;
    }

    if (e.key === 'Backspace' || e.key === 'Delete') {
      setCellValue(row, col, null);
      return;
    }
  };

  onMounted(() => {
    window.addEventListener('keydown', handleKey);
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKey);
  });
};
