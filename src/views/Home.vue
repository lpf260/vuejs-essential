<template>
  <div>
    <Message :show.sync="msgShow" :type="msgType" :msg="msg"/>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "", // 消息
      msgType: "", //消息类型
      msgShow: false //是否显示消息，默认不显示
    };
  },
  // beforeRouteEnter 是组件内的路由导航守卫，
  // 在确认渲染该组件的对应路由前调用。
  // 该守卫不能访问 this，但我们通过传一个回调给 next，
  // 就可以使用上面的 vm 来访问组件实例。守卫的参数说明如下：
  // to 即将要进入的目标路由
  // from 当前导航正要离开的路由 from.name 是路由的名称，对应路由配置中的 name
  // next 一个用来resolve当前钩子的方法，需要调用该方法来确认或者中断导航；
  beforeRouterEnter(to, from, next) {
    // 路由的名称，对应路由配置中的name
    const fromName = from.name;
    const logout = to.params.logout;

    // 确认导航
    next(vm => {
      // 通过vm参数访问组件实例，已登录时，评估路由名称
      if (vm.$store.state.auth) {
        switch (fromName) {
          // 如果从注册页面跳转过来
          case "Register":
            // 显示注册成功
            vm.showMsg("注册成功");
            break;
        }
      } else if (logout) {
        vm.showMsg("操作成功");
      }
    });
  },
  computed: {
    // 用户登录状态 这里的方法就会生成出一个新的属性auth
    auth() {
      return this.$store.state.auth;
    }
  },
  watch: {
    // 监听auth（就是上面computed出来的auth）, 当它的值变为false时，显示退出成功
    auth(value) {
      if (!value) {
        this.showMsg("操作成功");
      }
    }
  },
  methods: {
    showMsg(msg, type = "success") {
      this.msg = msg;
      this.msgType = type;
      this.msgShow = true;
    }
  }
};
</script>

<style>
</style>
