const homeModule = {
  // 命名空间
  namespaced: true,
  state() {
    return {
      homeCounter: 100,
    };
  },
  getters: {
    doubleHomeCounter(state, getters, rootState, rootGetters) {
      return state.homeCounter * 2;
    },
  },
  mutations: {
    // state 对象是模块的局部状态
    increment(state) {
      state.homeCounter++;
    },
  },
  actions: {
    incrementAction({
      commit,
      dispatch,
      state,
      rootState,
      getters,
      rootGetters,
    }) {
      console.log(state.homeCounter);
      console.log(rootState.rootCounter);
      commit("increment");
      commit("increment", null, { root: true });
    },
    // incrementAction(context) {
    //   console.log(context.state.homeCounter);
    //   console.log(context.rootState.rootCounter);
    //   context.commit("increment");
    // },
  },
};

export default homeModule;
