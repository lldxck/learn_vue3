<template>
  <div>
    <my-slot-cpn>
      <button>按钮</button>
    </my-slot-cpn>
    <my-slot-cpn>
      <i>我是i标签</i>
    </my-slot-cpn>
    <my-slot-cpn></my-slot-cpn>
    <!-- 插入很多内容 -->
    <my-slot-cpn>
      <div>我是内容1</div>
      <div>我是内容2</div>
      <div>我是内容3</div>
    </my-slot-cpn>
  </div>
</template>

<script>
import MySlotCpn from "./MySlotCpn.vue";
export default {
  components: {
    MySlotCpn,
  },
};
</script>

<style scoped></style>
