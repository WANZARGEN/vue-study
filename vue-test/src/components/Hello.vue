<template>
  <div class="m_header">
    <button @click="clickAlert">눌러봐</button>
    <div>{{arr}}</div>
    <div>{{addedVal}}</div>
  </div>
</template>

<script>
import HelloBase from './HelloBase.vue'
export default {
  name: 'app',
  data: () => {
    return {
     addedVal: 1
    }
  },
  mounted() {
  },
  extends: HelloBase 
}
</script>