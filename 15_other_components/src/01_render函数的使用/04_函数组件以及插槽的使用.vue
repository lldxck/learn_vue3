<script>
import { h } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
export default {
  render() {
    // HelloWorld组件展示
    return h(HelloWorld, null, {
      // 传入插槽
      default: (props) => h("div", null, `父组件内容${props.name}`),
    });
  },
};
</script>

<style scoped></style>
