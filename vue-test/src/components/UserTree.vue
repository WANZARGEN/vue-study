
<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-sheet class="pa-3 primary lighten-2">
      <v-text-field
        v-model="search"
        label="Search Company Directory"
        dark
        flat
        open-all
        solo-inverted
        hide-details
        clearable
        clear-icon="mdi-close-circle-outline"
      ></v-text-field>
      <v-checkbox
        v-model="caseSensitive"
        dark
        hide-details
        label="Case sensitive search"
      ></v-checkbox>
    </v-sheet>
    <v-card-text>
      <v-treeview
        :items="items"
        :search="search"
        :filter="filter"
        :open.sync="open"
        :open-all="true"
      >
        <template v-slot:prepend="{ item }">
          <v-icon
            v-if="item.children"
            v-text="`mdi-${item.id === 1 ? 'home-variant' : 'folder-network'}`"
          ></v-icon>
        </template>
      </v-treeview>
    </v-card-text>
  </v-card>
</template>

<script>
import userApi from '@/services/user';

export default {
  data: () => ({
    items: [],
    open: [1, 2],
    search: null,
    caseSensitive: false
  }),
  computed: {
    filter () {
      console.log('filter')
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined
    }
  },
  methods: {
    getUserTree: function() {
      userApi.listTree()
      .then((res) => {
        this.items = res.data
      })
      .catch((err) => {
        console.error(err);
      })
    }
  },
  created() {
    this.getUserTree()
  }
}
</script>
