<script lang="ts">
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
      this.$emit("incrementCount", this.count, "test");
    },
  },
};
</script>

<template>
  <button @click="increment">+</button>
</template>
