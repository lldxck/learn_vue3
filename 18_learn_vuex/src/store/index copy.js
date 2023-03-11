import { createStore } from "vuex";
import axios from "axios";
import { INCREMENT_N } from "./mutation-types";

// 创建store实例
const store = createStore({
  state() {
    return {
      counter: 0,
      name: "Jack",
      age: 18,
      height: 1.88,
      books: [
        {
          name: "javaScript",
          price: 128,
          count: 2,
        },
        {
          name: "vue.js",
          price: 98,
          count: 5,
        },
        {
          name: "react.js",
          price: 189,
          count: 3,
        },
        {
          name: "python",
          price: 85,
          count: 1,
        },
      ],
      discount: 0.6,
      banners: [],
    };
  },
  getters: {
    totalPrice(state) {
      let totalPrice = 0;
      for (const book of state.books) {
        totalPrice += book.price * book.count;
      }

      return totalPrice;
    },
    currentDiscount(state) {
      return state.discount * 0.9;
    },
    totalPriceCountGreaterN(state, getters) {
      return function (n) {
        let totalPrice = 0;
        for (const book of state.books) {
          if (book.count > n) {
            totalPrice += book.price * book.count;
          }
        }

        return totalPrice * getters.currentDiscount;
      };
    },
    nameInfo(state) {
      return `name:${state.name}`;
    },
    ageInfo(state) {
      return `age:${state.age}`;
    },
    heightInfo(state) {
      return `height:${state.height}`;
    },
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    // incrementN(state, payload) {
    [INCREMENT_N](state, payload) {
      state.counter += payload;
    },
    incrementNObj(state, payload) {
      state.counter += payload.n;
    },
    addBannerData(state, payload) {
      state.banners = payload;
    },
  },
  actions: {
    incrementAction(context, payload) {
      console.log(payload);
      setTimeout(() => {
        context.commit("increment");
      }, 1000);
    },
    decrementAction({
      commit,
      dispatch,
      state,
      rootState,
      getters,
      rootGetters,
    }) {
      console.log("action decrement");
      commit("decrement");
    },
    getHomeMultiData(context) {
      // 返回一个promise方式
      return new Promise((resolve, reject) => {
        axios
          .get("http://123.207.32.32:8000/home/multidata")
          .then((res) => {
            context.commit("addBannerData", res.data.data.banner.list);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});

export default store;
