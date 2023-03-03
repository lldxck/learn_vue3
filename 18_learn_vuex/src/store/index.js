import { createStore } from "vuex";

// 创建store实例
const store = createStore({
  state() {
    return {
      counter: 0,
      name: "Jack",
      age: 18,
      height: 1.88,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
});

export default store;
