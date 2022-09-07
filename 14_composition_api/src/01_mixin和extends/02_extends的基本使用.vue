<template>
  <div>
    <div>{{ message }}</div>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
import Base from "./pages/Base.vue";
export default {
  extends: Base,
};
</script>

<style scoped></style>
