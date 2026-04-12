import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import DefaultLayout from "~/layouts/default.vue";

describe("Default Layout", () => {
  it("should return the header, footer, and content of the slot", () => {
    const wrapper = mount(DefaultLayout, {
      slots: {
        default: '<div id="test-content">Page content</div>',
      },
      global: {
        stubs: { AppHeader: true, AppFooter: true },
      },
    });

    expect(wrapper.findComponent({ name: "AppHeader" })).toBeTruthy();
    expect(wrapper.find("#test-content").text()).toBe("Page content");
    expect(wrapper.findComponent({ name: "AppFooter" })).toBeTruthy();
  });
});
