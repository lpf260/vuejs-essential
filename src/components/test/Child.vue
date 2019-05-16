<template>
  <div>
    我是一个子组件，我在红色的海洋里！
    <input
      type="button"
      value="点我隐藏"
      class="btn btn-xs btn-primary"
      @click="upIsShow"
    >
  </div>
</template>

<script>
export default {
  name: "Child",
  data() {
    return {};
  },
  methods: {
    upIsShow() {
      this.$emit("update:isShow", false);
    }
  }
};
</script>

<style scoped>
div {
  background: yellowgreen;
  width: 200px;
  height: 200px;
  color: aliceblue;
  margin: 20px 0;
  padding: 20px;
}
</style>