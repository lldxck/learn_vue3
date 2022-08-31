<template>
  <div>Category组件</div>
  <button @click="click">{{ counter }}</button>
</template>

<script>
export default {
  name: "category",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    click() {
      this.counter++;
    },
  },
};
</script>

<style scoped></style>
