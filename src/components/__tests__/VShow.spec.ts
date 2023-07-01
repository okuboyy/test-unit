import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import VShow from "@/components/VShow.vue";

describe("VShow", () => {
  it("test VShow Component", () => {
    const wrapper = mount(VShow);
    const admin = wrapper.get("#admin");
    expect(admin.isVisible()).toBe(false);
  });
});
