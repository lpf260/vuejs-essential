<template>
  <div>
    <input type="button" value="我是父组件中的按钮" @click="show">
    <child
      v-show="isShow"
      @update:isShow="function(bol){
        //console.log(bol)
        isShow = bol;
      }"
    />
  </div>
</template>
<script>
import Child from "@/components/test/Child";
export default {
  data() {
    return {
      isShow: false
    };
  },
  components: {
    Child
  },
  methods: {
    show() {
      this.isShow = true;
    }
  }
};
</script>