<script>
import { ref, h } from "vue";
export default {
  setup() {
    const counter = ref(0);
    return {
      counter,
    };
  },
  //   render函数可以访问同一个this组件实例
  render() {
    return h("div", null, [
      h("div", null, `当前计数：${this.counter}`),
      h("button", { onClick: () => this.counter++ }, "+1"),
      h("button", { onClick: () => this.counter-- }, "-1"),
    ]);
  },
};
</script>

<style scoped></style>
