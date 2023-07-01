import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Computed from "@/components/Computed.vue";

describe("Computed", () => {
  it("computed property upper case", () => {
    const wrapper = mount(Computed);
    expect(wrapper.text()).toBe("JOHN");
  });
});
