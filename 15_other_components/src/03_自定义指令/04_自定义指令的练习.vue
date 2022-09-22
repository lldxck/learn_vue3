<template>
  <div>
    <div v-format-time="'YYYY / MM / DD'">{{ timestamp }}</div>
  </div>
</template>

<script>
export default {
  setup() {
    const timestamp = 1663831976;
    return {
      timestamp,
    };
  },
};
</script>

<style scoped></style>
