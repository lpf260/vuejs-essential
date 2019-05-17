export default [{
    path: "/auth/register",
    name: "Register",
    //使用下面的方法指定组件，可以实现路由懒加载，即当路由被访问时才加载对应的组件：
    component: () => import("@/views/auth/Register")
  },
  {
    path: "/auth/login",
    name: "Login",
    component: () => import("@/views/auth/Login")
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/users/1/edit',
    name: 'UserEdit',
    component: () => import('@/views/users/Edit')
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
