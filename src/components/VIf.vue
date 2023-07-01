<script lang="ts">
export default {
  data() {
    return {
      admin: false,
    };
  },
};
</script>

<template>
  <nav>
    <a id="profile" href="/profile">My Profile</a>
    <a v-if="admin" id="admin" href="/admin">Admin</a>
  </nav>
</template>
