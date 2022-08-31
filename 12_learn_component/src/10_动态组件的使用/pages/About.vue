<template>
  <div>About组件</div>
  <button @click="click">{{ counter }}</button>
</template>

<script>
export default {
  name: "about",
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
