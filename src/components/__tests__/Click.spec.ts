import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Click from "@/components/Click.vue";

describe("Click", () => {
  it("clcik button count up", async () => {
    const wrapper = mount(Click);
    await wrapper.get("button").trigger("click");
    expect(wrapper.text()).toContain("Count is: 1");
  });
});
