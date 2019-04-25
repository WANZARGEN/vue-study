export default {
    namespaced: true,
    state: {
      count: new Array(10).fill(0)
    },
    mutations: {
      increment (state, idx) {
        state.count.splice(idx, 1, state.count[idx] + 1)
      }
    },
    actions: {
      increment (context, idx) {
        context.commit('increment', idx)
      }
    }
  }