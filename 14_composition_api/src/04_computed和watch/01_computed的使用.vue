<template>
  <div>
    <div>{{ firstName }}-{{ lastName }}</div>
    <div>{{ fullName }}</div>
    <button @click="change">修改</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const firstName = ref("哈哈哈");
    const lastName = ref("hello");

    // 方式一：传入一个getter函数，computed返回值是一个ref对象，该对象是只读对象
    // const fullName = computed(() => `${firstName.value}-${lastName.value}`);

    // 方式二：传入一个含有get和set函数的对象
    const fullName = computed({
      get() {
        return `${firstName.value}-${lastName.value}`;
      },
      set(newValue) {
        const names = newValue.split("-");
        firstName.value = names[0];
        lastName.value = names[1];
      },
    });

    const change = () => {
      //方式一不能进行修改，此时是只读的,方式二能修改
      fullName.value = "嘎嘎嘎-hi";
      // 数据修改
      //   firstName.value = "啦啦啦";
    };

    return {
      firstName,
      lastName,
      fullName,
      change,
    };
  },
};
</script>

<style scoped></style>
