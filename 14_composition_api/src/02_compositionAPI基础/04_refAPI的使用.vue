<template>
  <div>
    <!-- template模板中的ref对象 它会自动进行解包 -->
    <div>当前计数：{{ counter }}</div>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(100);

    const increment = () => {
      counter.value++;
    };

    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
