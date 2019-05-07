<template>
  <DashCard>
    <template v-slot:header>
      <slot name="header">
        WideCard
      </slot>
    </template>

    <template v-slot:default>
      <slot name="left-section"></slot>
      <slot name="right-section"></slot>
      <slot/>
    </template>

  </DashCard>
</template>

<script>
import DashCard from "@/components/DashCard"
export default {
  components: { DashCard }
}
</script>

