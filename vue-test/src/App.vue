<template>
  <v-app class="app">
    <v-content>
      <router-view name="SideBar"/>
      <router-view name="TopBar"/>
      <router-view/>
    </v-content>
  </v-app>
</template>

<style lang="scss">
@import './styles/common';

.app {
  position: relative;
}
</style>

