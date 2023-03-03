<template>
  <div>Home:{{ $store.state.counter }}</div>
  <!-- <div>Home:{{ counter }}</div>
  <div>Home:{{ name }}</div>
  <div>Home:{{ age }}</div>
  <div>Home:{{ height }}</div> -->
  <div>Home:{{ sCounter }}</div>
  <div>Home:{{ storeState.counter }}</div>
  <div>Home:{{ storeState.name }}</div>
  <div>Home:{{ storeState.age }}</div>
  <div>Home:{{ storeState.height }}</div>
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
import { computed } from "vue";
import { useStore, mapState } from "vuex";

const store = useStore();

const sCounter = computed(() => store.state.counter);

const storeStateFns = mapState(["counter", "name", "age", "height"]);
const storeState = {};
Object.keys(storeStateFns).forEach((fnKey) => {
  const fn = storeStateFns[fnKey].bind({ $store: store });
  storeState[fnKey] = computed(fn);
});
</script>
<style lang="scss" scoped></style>
