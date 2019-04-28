<template>
  <div class="navbar navbar-default topnav">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">
          <span class="title">{{logo.title}}</span>
          <img :src="logo.src" :alt="logo.title">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader", // 组件的名称
  data() {
    return {
      logo: {
        src: `${this.uploadsUrl}sites/ByvFbNlQYVwhvTyBgLdqitchoacDNznN.jpg`,
        title: "VuejsCaff"
      }
    };
  },
  beforeCreate() {
    // 生命周期钩子的一部分，在实例初始化之后，数据观测之前被调用
    //在当前实例上添加一个uploadsUrl属性
    this.uploadsUrl = "https://vuejscaffcdn.phphub.org/uploads/";
  }
};
</script >

<style scoped>
.title {
  display: none;
}
</style>
