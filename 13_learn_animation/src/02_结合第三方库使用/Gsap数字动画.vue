<template>
  <div>
    <input type="number" step="50" v-model="counter" />
    <div>当前计数：{{ changeNumber.toFixed(0) }}</div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      counter: 0,
      changeNumber: 0,
    };
  },
  watch: {
    counter(newValue) {
      gsap.to(this, {
        duration: 1,
        changeNumber: newValue,
      });
    },
  },
};
</script>

<style scoped></style>
