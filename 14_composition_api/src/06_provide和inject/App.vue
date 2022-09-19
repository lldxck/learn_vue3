<template>
  <div>
    <div>{{ name }}</div>
    <div>{{ counter }}</div>
    <button @click="increment">App button</button>
    <home></home>
  </div>
</template>

<script>
import { provide, ref, readonly } from "vue";
import Home from "./Home.vue";
export default {
  components: {
    Home,
  },
  setup() {
    const name = ref("jack");
    const counter = ref(100);
    // 遵循单项数据流，为避免子组件修改数据，传入到子组件的为只读
    provide("name", readonly(name));
    provide("counter", readonly(counter));

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
