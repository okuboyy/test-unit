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
    },
  },
};
</script>

<template>
  <p>Count is: {{ count }}</p>
  <button @click="increment">+</button>
</template>
