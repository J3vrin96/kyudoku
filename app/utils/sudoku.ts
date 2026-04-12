export const isValidMove = (
  grid: (number | null)[][],
  row: number,
  col: number,
  value: number,
): boolean => {
  if (value === null) return true;

  for (let i = 0; i < 9; i++) {
    if (i !== col && grid[row][i] === value) return false;
    if (i !== row && grid[i][col] === value) return false;
  }

  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const curR = startRow + i;
      const curC = startCol + j;
      if ((curR !== row || curC !== col) && grid[curR][curC] === value)
        return false;
    }
  }
  return true;
};

export const isGridComplete = (grid: (number | null)[][]): boolean => {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = grid[r][c];
      if (val === null || !isValidMove(grid, r, c, val)) return false;
    }
  }
  return true;
};
