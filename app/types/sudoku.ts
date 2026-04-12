import type { Option } from "./select";

export type Difficulty = 'easy' | 'medium' | 'hard';
export type DifficultyOption = Option<Difficulty>;
export type CellValue = number | null;
export type FocusedCell = {
	row: number;
	col: number;
}

export type SudokuCell = {
	value: CellValue;
	initial: boolean;
	isInvalid: boolean;
}

export type SudokuGrid = SudokuCell[][];

export type SudokuResponse = {
	board: number[][];
}
