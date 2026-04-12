// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { isValidMove, isGridComplete } from "~/utils/sudoku";

describe("Sudoku Engine Logic", () => {
  const mockGrid = [
    [5, 3, null, null, 7, null, null, null, null],
    [6, null, null, 1, 9, 5, null, null, null],
    [null, 9, 8, null, null, null, null, 6, null],
    [8, null, null, null, 6, null, null, null, 3],
    [4, null, null, 8, null, 3, null, null, 1],
    [7, null, null, null, 2, null, null, null, 6],
    [null, 6, null, null, null, null, 2, 8, null],
    [null, null, null, 4, 1, 9, null, null, 5],
    [null, null, null, null, 8, null, null, 7, 9],
  ];

  it("should invalidate duplicate in a row", () => {
    expect(isValidMove(mockGrid, 0, 2, 5)).toBe(false);
  });

  it("should invalidate duplicate in a column", () => {
    expect(isValidMove(mockGrid, 2, 0, 6)).toBe(false);
  });

  it("should invalidate duplicate in a 3x3 block", () => {
    expect(isValidMove(mockGrid, 0, 2, 9)).toBe(false);
  });

  it("should validate a correct move", () => {
    expect(isValidMove(mockGrid, 0, 2, 1)).toBe(true);
  });

  it("should identify an incomplete grid", () => {
    expect(isGridComplete(mockGrid)).toBe(false);
  });
});
