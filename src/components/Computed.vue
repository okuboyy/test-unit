<script lang="ts">
export default {
  data() {
    return {
      name: "John",
    };
  },
  computed: {
    upperCaseName() {
      return this.name.toUpperCase();
    },
  },
};
</script>

<template>
  <div>{{ upperCaseName }}</div>
</template>
