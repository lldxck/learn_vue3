<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  render() {
    return (
      <div>
        <HelloWorld>
          {{ default: (props) => <button>按钮{props.name}</button> }}
        </HelloWorld>
      </div>
    );
  },
};
</script>

<style scoped></style>
