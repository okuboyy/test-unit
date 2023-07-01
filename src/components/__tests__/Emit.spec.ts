import { describe, it, expect } from "vitest";
import { VueWrapper, mount } from "@vue/test-utils";
import Emit from "@/components/Emit.vue";

describe("Emit", () => {
  it("click button count up", async () => {
    const wrapper = mount(Emit);
    wrapper.get("button").trigger("click");
    wrapper.get("button").trigger("click");
    console.log(wrapper.emitted("incrementCount"));
  });
});
