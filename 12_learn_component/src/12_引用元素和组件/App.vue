<template>
  <div>
    <h2 ref="title">我是app组件</h2>
    <child-cpn ref="child"></child-cpn>
    <button @click="btnClick">获取元素</button>
  </div>
</template>

<script>
import ChildCpn from "./ChildCpn.vue";
export default {
  components: {
    ChildCpn,
  },
  methods: {
    btnClick() {
      console.log(this.$refs.title);
      console.log(this.$refs.child);
      console.log(this.$refs.child.message);
      this.$refs.child.sayHello();
    },
  },
};
</script>

<style scoped></style>
