<template>
  <div class="m_header">
    HelloBase
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => {
    return {
      arr: [1,2,3]
    }
  },
  mounted () {
    console.log("[HelloBase] arr: ", this.arr);
    console.log("[HelloBase] _data: ", this._data);
  },
  methods: {
    clickAlert() {
      alert(1);
    }
  }
}
</script>