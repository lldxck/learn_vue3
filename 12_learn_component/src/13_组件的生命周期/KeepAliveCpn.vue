<template>
  <div>我是keepAlive组件</div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("keepAliveCpn beforeCreate");
  },
  created() {
    console.log("keepAliveCpn created");
  },
  activated() {
    console.log("keepAliveCpn activated");
  },
  deactivated() {
    console.log("keepAliveCpn deactivated");
  },
};
</script>

<style scoped></style>
