<template>
  <div>
    <template v-if="show"
      ><child-cpn @update="updateTitle" :title="title"></child-cpn>
    </template>
    <keep-alive>
      <keep-alive-cpn v-if="show"></keep-alive-cpn>
    </keep-alive>
  </div>
  <button @click="btnClick">{{ message }}</button>
</template>

<script>
import ChildCpn from "./ChildCpn.vue";
import KeepAliveCpn from "./KeepAliveCpn.vue";
export default {
  data() {
    return {
      message: "显示",
      show: true,
      title: "嘎嘎嘎",
    };
  },
  methods: {
    btnClick() {
      this.show = !this.show;
      this.message = this.show ? "隐藏" : "显示";
    },
    updateTitle(msg) {
      this.title = msg;
    },
  },
  components: {
    ChildCpn,
    KeepAliveCpn,
  },
};
</script>

<style scoped></style>
