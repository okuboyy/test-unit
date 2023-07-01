import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Submit from "@/components/Submit.vue";

describe("Submit", () => {
  it("receive name form Emit form", () => {
    const wrapper = mount(Submit);
    const input = wrapper.get("input");
    input.setValue("John Doe");
    wrapper.trigger("submit");
    expect(wrapper.emitted("submitted")[0][0]).toEqual({
      name: "John Doe",
    });
  });
});
