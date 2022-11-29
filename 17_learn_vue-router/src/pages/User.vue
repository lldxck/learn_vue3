<template>
  <div>用户名称{{ $route.params.userName }}*id-{{ $route.params.id }}</div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.params.userName);
console.log(route.params.id);
</script>

<style lang="scss" scoped></style>
