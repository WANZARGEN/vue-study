<template>
  <DashCardBase>
    <template v-slot:header>
      DashCard
    </template>

    <template v-slot:default>
      <p>Default contents</p>
    </template>

  </DashCardBase>
</template>

<script>
import DashCardBase from "@/components/DashCardBase"
export default {
  components: { DashCardBase }
}
</script>

