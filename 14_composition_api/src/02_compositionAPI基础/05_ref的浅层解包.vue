<template>
  <div>
    <!-- template中直接使用ref对象，它会自动进行解包 -->
    <div>counter:{{ counter }}</div>
    <!-- ref解包只是一个浅层解包，info是个普通对象 -->
    <div>info:{{ info.counter.value }}</div>
    <!-- 当最外层包裹的是一个reactive可响应式对象，那么内容的ref会自动进行解包 -->
    <div>reactiveInfo:{{ reactiveInfo.counter }}</div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    const counter = ref(100);

    const info = {
      counter,
    };

    const reactiveInfo = reactive({ counter });
    return {
      counter,
      info,
      reactiveInfo,
    };
  },
};
</script>

<style scoped></style>
