<template>
  <v-app class="app">
    <v-content>
      <TopBar/>
      <SideBar/>
      <Home class="content-container"/>
    </v-content>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    TopBar,
    SideBar,
    Home
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import './styles/common';

.app {
  position: relative;

  .content-container {
    position: absolute;
    left: $side-bar-w;
    top: $top-bar-h;
    height: calc(100vh - #{$top-bar-h});
    width: calc(100vw - #{$side-bar-w});
    border: 1px solid red;
  }
}
</style>

