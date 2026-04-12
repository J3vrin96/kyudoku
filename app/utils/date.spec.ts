import { describe, expect, it } from "vitest";
import { getCurrentYear } from "./date";

describe("getCurrentYear", () => {
  it("should return the current year", () => {
    const currentYear = new Date().getFullYear();

    expect(getCurrentYear()).toBe(currentYear);
  });
});
