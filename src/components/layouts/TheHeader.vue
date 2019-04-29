<template>
  <div class="navbar navbar-default topnav">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" @click="toggleNav">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <a class="navbar-brand" href="/">
          <span class="title">{{logo.title}}</span>
          <img :src="logo.src" :alt="logo.title">
        </a>
      </div>

      <div id="top-navbar-collapse" :class="['collapse','navbar-collapse', {in: showCollapsedNav}]">
        <ul class="nav navbar-nav">
          <li
            v-for="(item,index) in navList"
            v-bind:key="index"
            :class="{active: index === activeNavIndex}"
          >
            <!--我们使用对象语法对 class 进行了绑定，上面的语法表示当 index === activeNavIndex 返回 true 时添加 'active' 这个类名；-->
            <a href="#" @click="changeNavIndex(index)">{{item}}</a>
          </li>
        </ul>
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
      },
      navList: ["社区", "头条", "问答", "教程"],
      activeNavIndex: 0,
      showCollapsedNav: false
    };
  },
  beforeCreate() {
    // 生命周期钩子的一部分，在实例初始化之后，数据观测之前被调用
    //在当前实例上添加一个uploadsUrl属性
    this.uploadsUrl = "https://vuejscaffcdn.phphub.org/uploads/";
  },
  methods: {
    changeNavIndex(index) {
      this.activeNavIndex = index;
    },
    toggleNav() {
      this.showCollapsedNav = !this.showCollapsedNav;
    }
  }
};
</script >

<style scoped>
.title {
  display: none;
}
.navbar-default .navbar-nav > .active > a {
  background: rgba(0, 0, 0, 0.03);
}
</style>
