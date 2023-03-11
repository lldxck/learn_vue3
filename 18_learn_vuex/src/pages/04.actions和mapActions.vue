<template>
  <div>actions</div>
  <div>当前计数:{{ $store.state.counter }}</div>
  <!-- <button @click="increment">+1</button>
  <button @click="decrement">-1</button> -->
  <button @click="incrementAction(10)">+1</button>
  <button @click="add(10)">+1</button>
  <button @click="sub">-1</button>
  <button @click="decrementAction">-1</button>
</template>

<!-- <script>
// import axios from "axios";
export default {
  name: "actions",
  mounted() {
    // axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
    //   console.log(res.data.data.banner.list);
    //   this.$store.commit("addBannerData", res.data.data.banner.list);
    // });
    this.$store.dispatch("getHomeMultiData");
  },
  methods: {
    increment() {
      this.$store.dispatch("incrementAction", { n: 10 });
    },
    decrement() {
      //   this.$store.dispatch("decrementAction");
      this.$store.dispatch({
        type: "decrementAction",
      });
    },
  },
};
</script> -->
<script>
import { mapActions } from "vuex";
export default {
  name: "actions",
  mounted() {
    this.$store
      .dispatch("getHomeMultiData")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  //   methods: {
  //     ...mapActions(["incrementAction", "decrementAction"]),
  //     ...mapActions({
  //       add: "incrementAction",
  //       sub: "decrementAction",
  //     }),
  //   },

  setup() {
    const storeActions = mapActions(["incrementAction", "decrementAction"]);

    const storeActionsObj = mapActions({
      add: "incrementAction",
      sub: "decrementAction",
    });

    return {
      ...storeActions,
      ...storeActionsObj,
    };
  },
};
</script>
