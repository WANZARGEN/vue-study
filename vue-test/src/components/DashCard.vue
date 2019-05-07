<template>
  <DashCardBase>
    <slot name="header">
      <template v-slot:header>
        DashCard
      </template>
    </slot>

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

