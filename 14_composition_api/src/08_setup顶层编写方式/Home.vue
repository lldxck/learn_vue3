<template>
  <div>
    <div>{{ message }}</div>
    <button @click="emitEvent">发射事件</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  message: {
    type: String,
    default: "哈哈哈",
  },
});

const emit = defineEmits(["increment", "decrement"]);
const emitEvent = () => {
  emit("increment", 2);
};
</script>

<style scoped></style>
