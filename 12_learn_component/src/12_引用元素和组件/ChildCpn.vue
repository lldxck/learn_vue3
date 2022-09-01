<template>
  <div>
    <div>我是子组件</div>
    <button @click="childBtn">子组件Btn获取</button>
    <button @click="getEl">子组件Btn获取$el</button>
  </div>
</template>

<script>
export default {
  name: "childCpn",
  data() {
    return {
      message: "哈哈哈",
    };
  },
  methods: {
    sayHello() {
      console.log("hello world");
    },
    childBtn() {
      console.log(this.$parent);
      console.log(this.$root);
    },
    getEl() {
      console.log(this.$el);
    },
  },
};
</script>

<style scoped></style>
