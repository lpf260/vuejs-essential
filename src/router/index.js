import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [{
    path: "/auth/register",
    name: "Register",
    //使用下面的方法指定组件，可以实现路由懒加载，即当路由被访问时才加载对应的组件：
    component: () => import("@/views/auth/Register")
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    // 其他未配置的路由都跳转到首页
    path: '*',
    // 重定向
    redirect: '/'
  },
  {
    path: "/test/sync",
    name: "Sync",
    component: () => import("@/components/test/Test")
  }
];

const router = new Router({
  //路由模式，默认值 'hash' 使用井号（ # ）作路由，值 'history' 可利用 History API 来完成页面跳转且无须重新加载；
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  const auth = router.app.$options.store.state.auth;

  if (auth && to.path.indexOf('/auth/') !== -1) {
    // 如果当前用户已登录，且目标路由包含/auth/ 就跳转到首页
    next('/')
  } else {
    next()
  }
})

export default router;
