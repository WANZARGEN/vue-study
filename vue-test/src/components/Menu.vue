<template>
  <v-container>
    <h2>Home</h2>
    <ul>
      <li>
        <router-link to="/user-list">Go User List</router-link>
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
    </ul>
  </v-container>
</template>

<script>
  export default {
  }
</script>
