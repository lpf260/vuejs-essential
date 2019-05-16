<template>
  <div v-show="show" :class="`alert alert-${type} alert-dismissible`">
    <button @click="close" type="button" class="close">
      <span>x</span>
    </button>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    // 是否显示消息框
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "success"
    },
    msg: {
      type: String,
      default: ""
    }
  },
  watch: {
    show(value) {
      if (value) {
        this.$nextTick(() => {
          //vm.$el
          //类型：Element
          //只读
          //详细：
          //Vue 实例使用的根 DOM 元素。
          this.$el.scrollIntoView(true);
        });
      }
    }
  },
  methods: {
    close() {
      this.$emit("update:show", false);
    }
  }
};
</script>

<style>
</style>
