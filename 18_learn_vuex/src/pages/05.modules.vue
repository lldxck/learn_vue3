<template>
  <div>modules</div>
  <div>root:{{ $store.state.rootCounter }}</div>
  <div>home:{{ $store.state.home.homeCounter }}</div>
  <div>user:{{ $store.state.user.userCounter }}</div>
  <hr />
  <!-- <button @click="homeIncrement">home+1</button>
  <div>{{ $store.getters["home/doubleHomeCounter"] }}</div>
  <button @click="homeIncrementAction">home+1</button> -->
  <div>home:{{ homeCounter }}</div>
  <div>home:{{ doubleHomeCounter }}</div>
  <button @click="increment">home+1</button>
  <button @click="incrementAction">home+1</button>
</template>

<script>
import {
  //   mapActions,
  //   mapGetters,
  //   mapMutations,
  //   mapState,
  createNamespacedHelpers,
} from "vuex";

import { useState, useGetters } from "../hooks";
const { mapActions, mapGetters, mapMutations, mapState } =
  createNamespacedHelpers("home");
export default {
  name: "modules",
  computed: {
    // // 写法一
    // ...mapState({
    //   homeCounter: (state) => state.home.homeCounter,
    // }),
    // ...mapGetters({
    //   doubleHomeCounter: "home/doubleHomeCounter",
    // }),
    // // 写法二
    // ...mapState("home", ["homeCounter"]),
    // ...mapGetters("home", ["doubleHomeCounter"]),
    // 写法三
    ...mapState(["homeCounter"]),
    ...mapGetters(["doubleHomeCounter"]),
  },
  methods: {
    // // 此时rootCounter 和 homeCounter都会变化
    // homeIncrement() {
    //   this.$store.commit("home/increment");
    // },
    // homeIncrementAction() {
    //   this.$store.dispatch("home/incrementAction");
    // },
    // // 写法一
    // ...mapMutations({
    //   increment: "home/increment",
    // }),
    // ...mapActions({
    //   incrementAction: "home/incrementAction",
    // }),
    // // 写法二
    // ...mapMutations("home", ["increment"]),
    // ...mapActions("home", ["incrementAction"]),
    // 写法三
    ...mapMutations(["increment"]),
    ...mapActions(["incrementAction"]),
  },
  setup() {
    const state = useState("home", ["homeCounter"]);
    const getters = useGetters("home", ["doubleHomeCounter"]);
    const mutations = mapMutations(["increment"]);
    const actions = mapActions(["incrementAction"]);
    return {
      ...state,
      ...getters,
      ...mutations,
      ...actions,
    };
  },
};
</script>
