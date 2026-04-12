import { isValidMove, isGridComplete } from "~/utils/sudoku";
import type { SudokuGrid, SudokuResponse, CellValue } from "~/types/sudoku";

export const useSudoku = () => {
  const grid = useState<SudokuGrid>("sudoku-grid", () => []);
  const isWon = useState<boolean>("sudoku-won", () => false);
  const isLoading = useState<boolean>("sudoku-loading", () => false);
  const difficulty = useState<string>("sudoku-diff", () => "easy");
  const validationMessage = useState<string | null>("sudoku-msg", () => null);
  const focusedCell = useState<{ row: number; col: number } | null>(
    "sudoku-focus",
    () => null,
  );

  const loadGame = async () => {
    isLoading.value = true;
    validationMessage.value = null;
    isWon.value = false;
    try {
      const data = await $fetch<SudokuResponse>("/api/sudoku", {
        query: { difficulty: difficulty.value },
      });
      grid.value = data.board.map((row) =>
        row.map((cellValue) => ({
          value: cellValue === 0 ? null : cellValue,
          initial: cellValue !== 0,
          isInvalid: false,
        })),
      );
    } catch (error) {
      console.error("Erreur API:", error);
    } finally {
      isLoading.value = false;
    }
  };

  const setCellValue = (row: number, col: number, value: CellValue) => {
    if (grid.value[row][col].initial || isWon.value) return;

    grid.value[row][col].value = value;
    validationMessage.value = null;

    const currentValues = grid.value.map((row) =>
      row.map((cell) => cell.value),
    );
    grid.value.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        cell.isInvalid =
          cell.value !== null &&
          !isValidMove(currentValues, rowIndex, colIndex, cell.value);
      });
    });
  };

  const validateFullGrid = () => {
    const values = grid.value.map((row) => row.map((cell) => cell.value));
    const complete = values.every((row) => row.every((cellValue) => cellValue !== null));

    if (!complete) {
      validationMessage.value = 'Incomplete grid.';
      return;
    }

    if (isGridComplete(values)) {
      isWon.value = true;
      validationMessage.value = "Congratulations ! You win.";
    } else {
      validationMessage.value = "Incorrect solution.";
    }
  };

  return {
    grid,
    isWon,
    isLoading,
    difficulty,
    validationMessage,
    focusedCell,
    loadGame,
    setCellValue,
    validateFullGrid,
  };
};
