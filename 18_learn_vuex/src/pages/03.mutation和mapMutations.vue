<template>
  <div>mutation</div>
  <div>当前计数：{{ $store.state.counter }}</div>
  <!-- <button @click="$store.commit('increment')">+1</button>
  <button @click="$store.commit('decrement')">-1</button>
  <button @click="addTen">+10</button> -->
  <button @click="increment">+1</button>
  <button @click="add">+1</button>
  <button @click="decrement">-1</button>
  <button @click="increment_n(10)">+10</button>
</template>

<!-- <script>
import { mapMutations } from 'vuex';
import {INCREMENT_N} from '../store/mutation-types'
export default {
  name: "mutation",
  methods: {
    addTen() {
      // 提交方式一
      //   this.$store.commit("incrementN", 10);
      //   this.$store.commit("incrementNObj", { n: 10, name: "jack", age: 18 });
      // 提交方式二
      this.$store.commit({
        type: "incrementNObj",
        n: 10,
        name: "jack",
        age: 18,
      });
    },
    ...mapMutations(['increment','decrement',INCREMENT_N]),
    ...mapMutations({
        add:'increment'
    })
  },
};
</script> -->

<script>
import { mapMutations } from "vuex";
import { INCREMENT_N } from "../store/mutation-types";
export default {
  setup() {
    const storeMutations = mapMutations([
      "increment",
      "decrement",
      INCREMENT_N,
    ]);
    const storeMutationsObj = mapMutations({
      add: "increment",
    });
    return {
      ...storeMutations,
      ...storeMutationsObj,
    };
  },
};
</script>
