<template>
  <div>
    <home></home>
    <button @click="add">添加</button>
  </div>
</template>

<script>
import Home from "./Home.vue";
import { computed } from "vue";
export default {
  //   provide: {
  //     name: "jack",
  //     age: 18,
  //   },
  provide() {
    return {
      name: "jack",
      age: 18,
      //   computed返回的是一个ref对象，需要取出其中的value来使用
      length: computed(() => this.fruits.length),
    };
  },
  data() {
    return {
      fruits: ["apple", "orange"],
    };
  },
  methods: {
    add() {
      this.fruits.push("banana");
    },
  },
  components: {
    Home,
  },
};
</script>

<style scoped></style>
