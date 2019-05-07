<template>
  <DashCardBase>
    
      <template v-slot:header>
        <slot name="header">
          DashCard
        </slot>
      </template>

    <template v-slot:default>
      <slot>
        <p>Default contents</p>
      </slot>
    </template>

  </DashCardBase>
</template>

<script>
import DashCardBase from "@/components/DashCardBase"
export default {
  components: { DashCardBase }
}
</script>

