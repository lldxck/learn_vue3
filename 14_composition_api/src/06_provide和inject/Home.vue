<template>
  <div>
    <div>{{ name }}</div>
    <div>{{ counter }}</div>
    <!-- 点击修改会报警告，该属性只读 -->
    <button @click="increment">home button</button>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const name = inject("name");
    const counter = inject("counter");

    const increment = () => counter.value++;

    return {
      name,
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
