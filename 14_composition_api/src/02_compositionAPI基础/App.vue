<template>
  <div>
    <child-cpn message="哈哈哈" id="abc"></child-cpn>
  </div>
</template>

<script>
// import ChildCpn from "./01_setup的参数.vue";
// import ChildCpn from "./02_setup的返回值.vue";
// import ChildCpn from "./03_reactiveAPI的使用.vue";
// import ChildCpn from "./04_refAPI的使用.vue";
// import ChildCpn from "./05_ref的浅层解包.vue";
import ChildCpn from "./06_readonlyAPI的使用.vue";
export default {
  components: {
    ChildCpn,
  },
};
</script>

<style scoped></style>
