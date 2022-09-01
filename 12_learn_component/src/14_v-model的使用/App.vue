<template>
  <div>
    <!-- 组件上使用v-model -->
    <my-input v-model="message" v-model:title="title"></my-input>
    <!-- 相当于 -->
    <!-- <my-input
      :modelValue="message"
      @update:modelValue="(newValue) => (message = newValue)"
    ></my-input> -->
    <div>{{ message }}</div>
    <div>{{ title }}</div>
  </div>
</template>

<script>
import MyInput from "./MyInput.vue";
export default {
  data() {
    return {
      message: "hello world",
      title: "title",
    };
  },
  components: {
    MyInput,
  },
};
</script>

<style scoped></style>
