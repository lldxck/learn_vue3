<template>
  <div>
    <div>当前计数：{{ counter }}</div>
    <button @click="increment">+1</button>

    <home message="hello" @increment="getCounter"></home>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Home from "./Home.vue";

const counter = ref(100);
const increment = () => counter.value++;

const getCounter = (payload) => {
  console.log(payload);
};
</script>

<style scoped></style>
