<template>
  <WideCard>

    <template v-slot:header>
      Region Card
    </template>

    <template v-slot:left-section>
      <v-progress-circular 
      :value="value" 
      :size="200"
      :width="15"
      >
        99%
      </v-progress-circular>
    </template>

    <template v-slot:right-section>
      right
    </template>

  </WideCard>
</template>

<script>
import WideCard from "@/components/WideCard"
export default {
  data() {
    return {
      value: 0
    }
  },
  components: { WideCard },
  mounted() {
    setTimeout(() => {
      this.value = 100;
    }, 300);
  }
}
</script>

<style lang="scss" scoped>

</style>


