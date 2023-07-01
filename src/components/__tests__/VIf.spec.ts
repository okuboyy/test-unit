import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import VIf from "@/components/VIf.vue";

describe("Terms", () => {
  it("test Terms Component", async () => {
    const wrapper = mount(VIf);
    await wrapper.setData({
      admin: true,
    });
    const admin = wrapper.find("#admin");
    expect(admin.exists()).toBe(true);
  });
});
