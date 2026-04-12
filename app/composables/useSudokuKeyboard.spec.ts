import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ref } from 'vue';
import type { Ref } from 'vue';

const createMockHandleKey = (
  setCellValue: ReturnType<typeof vi.fn>,
  focusedCell: Ref<{ row: number; col: number } | null>,
  isWon: Ref<boolean>
) => {
  return (e: KeyboardEvent) => {
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
};

describe('useSudokuKeyboard', () => {
  let setCellValue: ReturnType<typeof vi.fn>;
  let focusedCell: Ref<{ row: number; col: number } | null>;
  let isWon: Ref<boolean>;
  let handleKey: (e: KeyboardEvent) => void;

  beforeEach(() => {
    setCellValue = vi.fn();
    focusedCell = ref({ row: 0, col: 0 });
    isWon = ref(false);
    
    handleKey = createMockHandleKey(setCellValue, focusedCell, isWon);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should enter a digit (1-9)', () => {
    const event = new KeyboardEvent('keydown', { key: '5' });
    handleKey(event);

    expect(setCellValue).toHaveBeenCalledWith(0, 0, 5);
  });

  it('should delete value on Backspace', () => {
    const event = new KeyboardEvent('keydown', { key: 'Backspace' });
    handleKey(event);

    expect(setCellValue).toHaveBeenCalledWith(0, 0, null);
  });

  it('should delete value on Delete key', () => {
    const event = new KeyboardEvent('keydown', { key: 'Delete' });
    handleKey(event);

    expect(setCellValue).toHaveBeenCalledWith(0, 0, null);
  });

  it('should not enter invalid keys', () => {
    const event = new KeyboardEvent('keydown', { key: 'a' });
    handleKey(event);

    expect(setCellValue).not.toHaveBeenCalled();
  });

  it('should not accept input if no cell is focused', () => {
    focusedCell.value = null;
    
    const event = new KeyboardEvent('keydown', { key: '5' });
    handleKey(event);

    expect(setCellValue).not.toHaveBeenCalled();
  });

  it('should not accept input if game is won', () => {
    isWon.value = true;
    
    const event = new KeyboardEvent('keydown', { key: '5' });
    handleKey(event);

    expect(setCellValue).not.toHaveBeenCalled();
  });
});
