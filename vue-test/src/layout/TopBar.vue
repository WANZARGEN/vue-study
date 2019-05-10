<template>
  <div class="top-bar">
    <router-link to="/">Home</router-link>
    <span> Total: {{total}}</span>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('counter');
  export default {
    data: () => ({
    }),
    computed: {
        ...mapState({
            total: state => state.total
        })
    }
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
