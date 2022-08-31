<template>
  <div>Home组件</div>
  <div>{{ name }}-{{ age }}</div>
  <button @click="pageClick">按钮</button>
</template>

<script>
export default {
  name: "home",
  emits: ["pageClick"],
  props: {
    name: String,
    age: Number,
  },
  methods: {
    pageClick() {
      this.$emit("pageClick");
    },
  },
};
</script>

<style scoped></style>
