<template>
  <v-container >
    <h2>Home</h2>
    <ul>
      <li>
        <router-link to="/user-list">Go User List</router-link>
      </li>
      <li>
        <router-link to="/user-tree">Go User Tree</router-link>
      </li>
      <li>
        <router-link to="/video">Go Video</router-link>
      </li>
      <li>
        <router-link to="/">Go Home</router-link>
      </li>
      <li>
        <router-link to="/hello">Go Hello</router-link>
      </li>
      <li>
        <router-link to="/dash-card">Go Dash Card</router-link>
      </li>
      <li>
        <router-link to="/wide-card">Go Wide Card</router-link>
      </li>
      <li>
        <router-link to="/region-card">Go Region Card</router-link>
      </li>
      <li>
        <!-- <router-link to="/service2">Go Service2</router-link> -->
        <a href="http://localhost:3000/service2">Go Service2</a>
      </li>
    </ul>
  </v-container>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
</style>

