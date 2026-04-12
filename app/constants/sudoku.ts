import type { DifficultyOption } from "~/types/sudoku";

export const CELL_SIZE = 50;
export const MAX_WIDTH = 500;
export const GRID_COLUMNS = 9;
export const TIMEOUT_VALIDATION = 300;
export const difficultyOptions: DifficultyOption[] = [
	{
		label: 'Easy',
		value: 'easy',
	},
	{
		label: 'Medium',
		value: 'medium',
	},
	{
		label: 'Hard',
		value: 'hard',
	},
];
