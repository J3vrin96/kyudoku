import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import AppHeader from "~/components/AppHeader.vue";

describe("AppHeader", () => {
  it("should display the name of the applicatin - Kyudoku", () => {
    const wrapper = mount(AppHeader);

    expect(wrapper.text()).toContain("Kyudoku");
  });

  it("should contain the correct link to the GitHub repository", () => {
    const wrapper = mount(AppHeader);
    const githubLink = wrapper.find("a.github-link");

    expect(githubLink.exists()).toBe(true);
    expect(githubLink.attributes("href")).toBe(
      "https://github.com/J3vrin96/kyudoku",
    );
    expect(githubLink.attributes("target")).toBe("_blank");
  });

  it("should display the Zen Logic Puzzle slogan", () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.text()).toContain("Zen Logic Puzzle");
  });
});
