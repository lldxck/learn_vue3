<template>
  <div>
    <button @click="add">添加</button>
    <button @click="remove">移除</button>
    <button @click="shuffle">数字洗牌</button>
    <transition-group name="demo" tag="div">
      <span v-for="item in numbers" :key="item">{{ item }}</span>
    </transition-group>
  </div>
</template>
<script>
import _ from "lodash";
export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      counter: 10,
    };
  },
  methods: {
    add() {
      this.numbers.splice(this.randomIndex(), 0, this.counter++);
    },
    remove() {
      this.numbers.splice(this.randomIndex(), 1);
    },
    shuffle() {
      this.numbers = _.shuffle(this.numbers);
    },
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length);
    },
  },
};
</script>
<style scoped>
span {
  display: inline-block;
  margin: 10px;
}
.demo-enter-from,
.demo-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
/* demo-move 对移动中的元素应用的过渡 */
.demo-move,
.demo-enter-active,
.demo-leave-active {
  transition: all 0.5s ease-in;
}
/* 使元素脱离文档流，以便能够正确的计算移动的动画 */
.demo-leave-active {
  position: absolute;
}
</style>
