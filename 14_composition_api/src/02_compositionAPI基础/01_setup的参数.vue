<template>
  <div>
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
  // 参数一：props 父组件传递过来的数据
  // 参数二：context
  //   setup(props, context) {
  // 解构方式
  setup(props, { attrs, slots, emit }) {
    console.log(this); //undefined
    console.log(props.message);
    // console.log(context.attrs.id);
    console.log(attrs.id);
  },
};
</script>

<style scoped></style>
