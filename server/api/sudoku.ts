import type { Difficulty } from '~/types/sudoku';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { apiUrl, apiTimeout, validDifficulties } = config.sudoku;
  
  const query = getQuery(event);
  const difficulty = String(query.difficulty || "easy").toLowerCase() as Difficulty;

  try {
    if (!validDifficulties.includes(difficulty)) {
			throw createError({
				statusCode: 400,
				statusMessage: 'Invalid difficulty parameter',
			});
		}

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), apiTimeout);

    const response = await fetch(
      `${apiUrl}?difficulty=${difficulty}`,
      { signal: controller.signal }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error) {
			if (error.name === 'AbortError') {
				console.error(`[Sudoku API] Request timeout after ${apiTimeout}ms`);
			} else {
				console.error('[Sudoku API] Error:', error.message);
			}
		} else {
			console.error('[Sudoku API] Unknown error:', error);
		}

    return {
      board: [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9],
      ],
    };
  }
});
