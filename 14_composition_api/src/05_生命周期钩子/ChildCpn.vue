<template>
  <div>子组件</div>
</template>

<script>
import { onMounted, onUnmounted } from "vue";
export default {
  props: ["message"],
  setup() {
    onMounted(() => {
      console.log("childCpn onMounted");
    });
    onUnmounted(() => {
      console.log("childCpn onUnmounted");
    });
  },
};
</script>

<style scoped></style>
