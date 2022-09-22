<template>
  <div class="container">
    <!-- 数据会合并 -->
    <teleport to="#main">
      <div>数据展示</div>
      <button>按钮</button>
      <hello-world></hello-world>
    </teleport>
    <teleport to="#main" :disabled="true">
      <div>我是第二部分内容</div>
    </teleport>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  components: {
    HelloWorld,
  },
};
</script>

<style scoped></style>
