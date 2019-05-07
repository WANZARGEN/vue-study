<template>
  <v-container>
    <v-layout>

      <v-flex>
        <v-sheet class="flex-child" color="grey lighten-3" height="424">
          <sheet-footer>
            <slot name="header">Base Header</slot>
          </sheet-footer>
          <div class="card-contents">
            <slot />
          </div>
        </v-sheet>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {
    SheetFooter: {
      functional: true,

      render (h, { children }) {
        return h('v-sheet', {
          staticClass: 'align-center justify-center d-flex',
          props: {
            color: 'rgba(0, 0, 0, .36)',
            dark: true,
            height: 50
          }
        }, children)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-contents {
  border: 1px solid red;
  height: calc(100% - 50px);
}
</style>


