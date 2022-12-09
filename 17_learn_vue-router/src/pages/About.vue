<template>
  <div>
    <h2>我是About组件</h2>
    <!-- 获取参数 -->
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.query);
</script>
