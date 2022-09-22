<template>
  <div>
    <button v-if="counter < 2" v-counter.aaa.bbb="'hello'" @click="increment">
      当前计数：{{ counter }}
    </button>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(0);
    const increment = () => counter.value++;
    return {
      counter,
      increment,
    };
  },
  directives: {
    counter: {
      // 在绑定元素的 attribute 前或事件监听器应用前调用
      created(el, binding, vnode, prevVnode) {
        console.log("created");
        console.log(binding);
        console.log(binding.value); //hello
        console.log(binding.modifiers); //{aaa: true, bbb: true}
      },
      // 在元素被插入到 DOM 前调用
      beforeMount(el, binding, vnode, prevVnode) {
        console.log("beforeMount");
      },
      //   在绑定元素的父组件及他自己的所有子节点都挂在完成后调用
      mounted(el, binding, vnode, prevVnode) {
        console.log("mounted");
      },
      //   绑定元素的父组件更新前调用
      beforeUpdate(el, binding, vnode, prevVnode) {
        console.log("beforeUpdate");
      },
      //   绑定元素的父组件以及他自己的所有子节点都更新后调用
      updated(el, binding, vnode, prevVnode) {
        console.log("updated");
      },
      //   绑定元素的父组件卸载前调用
      beforeUnmount(el, binding, vnode, prevVnode) {
        console.log("beforeUnmount");
      },
      //   绑定元素的父组件卸载后调用
      unmounted(el, binding, vnode, prevVnode) {
        console.log("unmounted");
      },
    },
  },
};
</script>

<style scoped></style>
