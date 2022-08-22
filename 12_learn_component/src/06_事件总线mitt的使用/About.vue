<template>
  <div>
    <h2>{{ info.name }}</h2>
    <h2>{{ info.age }}</h2>
  </div>
</template>

<script>
import emitter from "./utils/eventBus";
export default {
  data() {
    return {
      info: {},
    };
  },
  created() {
    // 监听事件
    emitter.on("btnClick", (data) => {
      console.log("btnClick事件", data);
      this.info = data;
    });
    emitter.on("btn", this.onBtn);
    emitter.on("*", (type, data) => {
      console.log("*", type, data);
    });

    // 某些情况下我们需要取消事件的监听
    // 取消emitter中的所有监听
    emitter.all.clear();
    //取消某个监听
    setTimeout(() => {
      emitter.off("btn", this.onBtn);
    }, 5000);
  },
  methods: {
    onBtn(data) {
      console.log("btn事件", data);
    },
  },
};
</script>

<style scoped></style>
