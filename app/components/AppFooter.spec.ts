import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import AppFooter from "~/components/AppFooter.vue";
import { getCurrentYear } from "~/utils/date";

describe("AppFooter", () => {
  it("should display the copyright notice with Kyudoku and current year", () => {
    const wrapper = mount(AppFooter);
    const currentYear = getCurrentYear();

    expect(wrapper.text()).toContain("Kyudoku");
    expect(wrapper.text()).toContain(currentYear.toString());
  });

  it("should display the technology badges", () => {
    const wrapper = mount(AppFooter);
    const tags = wrapper.findAll(".footer__stack-tag");
    const techNames = tags.map((tag) => tag.text());

    expect(techNames).toContain("Nuxt 4");
    expect(techNames).toContain("TypeScript");
    expect(techNames).toContain("Vitest");
  });

  it("should display the project description", () => {
    const wrapper = mount(AppFooter);

    expect(wrapper.text()).toContain('@J3vrin96');
  });
});
