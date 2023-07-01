<script lang="ts">
export default {
  props: {
    msg: {
      type: String,
    },
  },
};
</script>

<template>
  <div>Hello {{ msg }}</div>
</template>
