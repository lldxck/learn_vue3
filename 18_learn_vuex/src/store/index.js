import { createStore } from "vuex";

import home from "./modules/home";
import user from "./modules/user";

const store = createStore({
  state() {
    return {
      rootCounter: 0,
    };
  },
  mutations: {
    // state 对象是模块的局部状态
    increment(state) {
      state.rootCounter++;
    },
  },
  modules: {
    home,
    user,
  },
});

export default store;
