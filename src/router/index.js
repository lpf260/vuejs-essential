import Vue from "vue";
import Router from "vue-router";
import routes from "./routers"

Vue.use(Router);



const router = new Router({
  //路由模式，默认值 'hash' 使用井号（ # ）作路由，值 'history' 可利用 History API 来完成页面跳转且无须重新加载；
  mode: "history",
  linkExactActiveClass: 'active',
  routes
});

router.beforeEach((to, from, next) => {
  const auth = router.app.$options.store.state.auth;

  if ((auth && to.path.indexOf('/auth/') !== -1) || (!auth && to.meta.auth)) {
    // 如果当前用户已登录，且目标路由包含/auth/ 就跳转到首页
    next('/')
  } else {
    next()
  }
})

export default router;
