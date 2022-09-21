<script>
export default {
  render() {
    return (
      <div>
        <div>hello world</div>
        {this.$slots.default ? (
          this.$slots.default({ name: "jack" })
        ) : (
          <div>我是默认内容</div>
        )}
      </div>
    );
  },
};
</script>

<style scoped></style>
