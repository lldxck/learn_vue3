<template>
  <div>
    <div>当前计数:{{ counter }}</div>
    <div>2倍计数:{{ doubleCounter }}</div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <div class="content"></div>
    <div class="scroll">
      <div class="scroll-x">scrollX:{{ scrollX }}</div>
      <div class="scroll-y">scrollY:{{ scrollY }}</div>
    </div>
    <div class="mouse">
      <div>mouseX:{{ mouseX }}</div>
      <div>mouseY:{{ mouseY }}</div>
    </div>
  </div>
</template>

<script>
import {
  useCounter,
  useTitle,
  useScrollPosition,
  useMousePosition,
  useLocalStorage,
} from "./hooks";
export default {
  setup() {
    const { counter, doubleCounter, increment, decrement } = useCounter();

    const titleRef = useTitle();
    setTimeout(() => {
      titleRef.value = "哈哈哈";
    }, 1500);

    const { scrollX, scrollY } = useScrollPosition();

    const { mouseX, mouseY } = useMousePosition();

    const data = useLocalStorage("info", { name: "jack" });
    setTimeout(() => {
      data.value = "哈哈哈";
    }, 3000);

    return {
      counter,
      doubleCounter,
      increment,
      decrement,
      scrollX,
      scrollY,
      mouseX,
      mouseY,
    };
  },
};
</script>

<style scoped>
.content {
  width: 3000px;
  height: 5000px;
}
.scroll {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
.mouse {
  position: fixed;
  right: 30px;
  bottom: 100px;
}
</style>
