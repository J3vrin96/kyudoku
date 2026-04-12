import { describe, it, expect, vi } from "vitest";
import { ref } from "vue";
import { useSudoku } from "./useSudoku";

vi.stubGlobal("useState", (key: string, init: () => void) => {
  return ref(init());
});

describe("useSudoku Composable", () => {
  it("should initialize with empty state", () => {
    const { grid, isWon } = useSudoku();
    expect(grid.value).toEqual([]);
    expect(isWon.value).toBe(false);
  });

  it("should update cell value correctly", () => {
    const { grid, setCellValue } = useSudoku();

    grid.value = Array(9)
      .fill(null)
      .map(() =>
        Array(9)
          .fill(null)
          .map(() => ({
            value: null,
            initial: false,
            isInvalid: false,
          })),
      );

    setCellValue(0, 0, 5);
    expect(grid.value[0][0].value).toBe(5);
  });

  it("should not update initial cells", () => {
    const { grid, setCellValue } = useSudoku();
    grid.value = [[{ value: 5, initial: true, isInvalid: false }]];

    setCellValue(0, 0, 9);
    expect(grid.value[0][0].value).toBe(5);
  });
});
