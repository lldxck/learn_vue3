<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <div>
      <input type="number" v-model="num" />
    </div>
    <button @click="decrementN">+n</button>
  </div>
</template>

<script>
export default {
  // 数组写法
  //   emits: ["add", "sub", "addN"],
  //   对象写法--对传入的参数进行验证
  emits: {
    add: null,
    sub: null,
    addN: function (payload) {
      if (payload > 5) {
        return true;
      }
      return false;
    },
  },
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    increment() {
      this.$emit("add");
    },
    decrement() {
      this.$emit("sub");
    },
    decrementN() {
      this.$emit("addN", this.num);
    },
  },
};
</script>

<style scoped></style>
