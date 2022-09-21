<script>
import { h } from "vue";
export default {
  render() {
    return h("div", null, [
      h("div", null, "hello world"),
      this.$slots.default
        ? this.$slots.default({ name: "jack" })
        : h("div", null, "我是默认内容"),
    ]);
  },
};
</script>

<style scoped></style>
