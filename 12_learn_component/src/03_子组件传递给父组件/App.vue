<template>
  <div>
    <div>当前计数：{{ counter }}</div>
    <counter-operation @add="add" @sub="sub" @addN="addN"></counter-operation>
  </div>
</template>

<script>
import CounterOperation from "./CounterOperation.vue";
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    sub() {
      this.counter--;
    },
    addN(num) {
      this.counter += num;
    },
  },
  components: {
    CounterOperation,
  },
};
</script>

<style scoped></style>
