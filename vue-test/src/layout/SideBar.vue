<template>
  <div class='side-bar'>
    Side Bar!
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

.side-bar {
    position: absolute;
    display: inline-block;
    left: 0;
    top: $top-bar-h;
    width: $side-bar-w;
    height: calc(100vh - #{$top-bar-h});
    border: 1px solid black;
}
</style>
