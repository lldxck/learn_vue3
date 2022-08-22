<template>
  <div>
    <button @click="btnClick">发出事件</button>
  </div>
</template>

<script>
import emitter from "./utils/eventBus";
export default {
  methods: {
    btnClick() {
      emitter.emit("btnClick", { name: "tom", age: 15 });
      emitter.emit("btn", { name: "jack", age: 18 });
    },
  },
};
</script>

<style scoped></style>
