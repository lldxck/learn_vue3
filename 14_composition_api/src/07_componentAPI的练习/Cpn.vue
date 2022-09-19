<template>
  <div>
    <div>当前计数:{{ counter }}</div>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import useCounter from "./hooks/useCounter";
export default {
  setup() {
    const { counter, increment } = useCounter();
    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
