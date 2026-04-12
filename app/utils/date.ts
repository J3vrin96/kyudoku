/**
 * Get the current year
 * @returns {number} The current year as a number (e.g., 2026)
 */
export function getCurrentYear() {
  const date = new Date();

  return date.getFullYear();
}
