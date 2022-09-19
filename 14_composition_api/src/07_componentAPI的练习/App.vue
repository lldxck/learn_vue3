<template>
  <div>
    <div>当前计数:{{ counter }}</div>
    <button @click="increment">+1</button>
    <div>{{ message }}</div>
    <button @click="changeMsg">修改message</button>
  </div>
</template>

<script>
import { ref } from "vue";
import useCounter from "./hooks/useCounter";
export default {
  setup() {
    const message = ref("hello world");

    const changeMsg = () => {
      message.value = "jack";
    };
    const { counter, increment } = useCounter();

    return {
      counter,
      increment,
      message,
      changeMsg,
    };
  },
};
</script>

<style scoped></style>
