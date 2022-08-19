<template>
  <div>
    <h2 :class="$attrs.class">{{ title }}</h2>
    <div>{{ content }}</div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  // 数组方式
  // props: ["title", "content"],
  //   对象方式
  props: {
    // title: String,
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      default: "123",
    },
    counter: {
      type: Number,
    },
    info: {
      type: Object,
      default() {
        return { name: "jack" };
      },
    },
    defaultContent: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
