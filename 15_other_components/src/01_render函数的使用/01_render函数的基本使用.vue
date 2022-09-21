<script>
import { h } from "vue";
export default {
  // 在render函数中使用
  // render() {
  //   return h("div", { class: "active" }, "hello world");
  // },
  setup() {
    return () => h("div", { class: "title" }, "hello setup");
  },
};
</script>

<style scoped></style>
