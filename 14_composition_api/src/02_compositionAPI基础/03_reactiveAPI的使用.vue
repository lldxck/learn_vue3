<template>
  <div>
    <div>当前计数:{{ data.counter }}</div>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      counter: 100,
    });
    const increment = () => {
      data.counter++;
    };
    return {
      data,
      increment,
    };
  },
};
</script>

<style scoped></style>
