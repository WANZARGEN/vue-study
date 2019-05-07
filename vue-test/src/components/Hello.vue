<template>
  <div class="m_header">
    <div @click="clickAlert">메뉴3</div>
    <div>메뉴2</div>
    <div>메뉴1</div>
  </div>
</template>

<script>
import HelloBase from './HelloBase.vue'
export default {
  name: 'app',
  data: () => {
    return {
     a: 1
    }
  },
  mounted() {
    console.log("[Hello] arr: ", this.arr);
    console.log("[Hello] _data:", this._data);
  },
  extends: HelloBase 
}
</script>