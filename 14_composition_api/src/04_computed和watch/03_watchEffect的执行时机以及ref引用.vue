<template>
  <div>
    <div ref="title">哈哈哈</div>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  setup() {
    const title = ref(null);
    // 参数二：是一个可选项，可以用来调整副作用的刷新时机或调试副作用的依赖。
    watchEffect(
      () => {
        console.log(title.value);
      },
      {
        // 会将侦听期延迟到组件渲染之后在执行。
        flush: "post",
      }
    );
    return {
      title,
    };
  },
};
</script>

<style scoped></style>
