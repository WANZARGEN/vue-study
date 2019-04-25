<template>
  <div class="top-bar">
    <router-link to="/">Menu</router-link>
  </div>
</template>

<script>
  export default {
    data: () => ({
    })
  }
</script>

<style lang="scss" scoped>
@import '../styles/common';

.top-bar {
    height: $top-bar-h;
    width: 100vw;
    color: white;
    background-color: #4c5667;

    .link {
        color: white;
        font-weight: 800;
    }
}
</style>
