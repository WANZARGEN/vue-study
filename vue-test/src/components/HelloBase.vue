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
  },
  methods: {
    clickAlert() {
      alert(`addedVal: ${this.addedVal}`);
    }
  }
}
</script>