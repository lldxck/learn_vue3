<template>
  <div>Home:{{ $store.state.counter }}</div>
  <!-- <div>Home:{{ counter }}</div>
  <div>Home:{{ name }}</div>
  <div>Home:{{ age }}</div>
  <div>Home:{{ height }}</div> -->
  <div>Home:{{ storeState.counter }}</div>
  <div>Home:{{ storeState.name }}</div>
  <div>Home:{{ storeState.age }}</div>
  <div>Home:{{ storeState.height }}</div>
  <div>Home:{{ storeState2.sCounter }}</div>
</template>

<!-- optionsAPI -->
<!-- <script>
import { mapState } from "vuex";
export default {
  name: "home",
  computed: {
    // 传入数组
    ...mapState(["counter", "name", "age", "height"]),
    // 传入对象
    ...mapState({
      sCounter: (state) => state.counter,
    }),
  },
};
</script> -->
<!-- compositionAPI -->
<script setup name="home">
import { useState } from "../hooks/useState";

const storeState = useState(["counter", "name", "age", "height"]);
const storeState2 = useState({
  sCounter: (state) => state.counter,
});
</script>
<style lang="scss" scoped></style>
