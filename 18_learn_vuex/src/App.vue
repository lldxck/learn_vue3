<template>
  <home />
  <div>App:{{ $store.state.counter }}</div>
  <div>App:{{ store.state.counter }}</div>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<!-- optionsAPI -->
<!-- <script>
import Home from "./pages/Home.vue";
export default {
  name: "App",
  components: { Home },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
  },
};
</script> -->
<!-- compositionsAPI -->
<script setup>
import { useStore } from "vuex";
import Home from './pages/Home.vue'
const store = useStore();
const increment = () => {
  store.commit("increment");
};

const decrement = () => {
  store.commit("decrement");
};
</script>

<style></style>
