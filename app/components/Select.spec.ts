import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Select from "./Select.vue";

describe("Select", () => {
  it("should render select with options", () => {
    const options = [
      { label: "Easy", value: "easy" },
      { label: "Medium", value: "medium" },
      { label: "Hard", value: "hard" },
    ];

    const wrapper = mount(Select, {
      props: {
        modelValue: "easy",
        options,
      },
    });

    expect(wrapper.find("select").exists()).toBe(true);
    expect(wrapper.findAll("option")).toHaveLength(3);
  });

  it("should emit update:modelValue on change", async () => {
    const options = [
      { label: "Easy", value: "easy" },
      { label: "Medium", value: "medium" },
    ];

    const wrapper = mount(Select, {
      props: {
        modelValue: "easy",
        options,
      },
    });

    const select = wrapper.find("select");
    await select.setValue("medium");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["medium"]);
  });
});
