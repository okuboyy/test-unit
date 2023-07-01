import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Props from "@/components/Props.vue";

it("test App Component", function () {
  const wrapper = mount(Props, {
    props: {
      msg: "World",
    },
  });
  expect(wrapper.text()).toBe("Hello World");
});
