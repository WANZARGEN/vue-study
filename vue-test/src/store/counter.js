export default {
    namespaced: true,
    state: {
      count: [].fill(0),
      total: 0
    },
    mutations: {
      increment (state, idx) {
        state.count.splice(idx, 1, state.count[idx] + 1)
        state.total++;
      }
    },
    actions: {
      increment (context, idx) {
        context.commit('increment', idx)
      }
    }
  }