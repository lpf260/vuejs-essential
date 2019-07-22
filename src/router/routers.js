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
    component: () => import('@/views/users/Edit'),
    children: [{
      path: '', // 子路由的path为空值''， 表示该页面作为默认子路由， 在导航到父级路由(/users/1/edit)时，就开始加载
      name: 'EditProfile', // 如果当前路由含有默认子路由，则不需要为当前路由制定name，要导航到当前路由，可以使用默认子路由的name, 如router.push({name: "EditProfile"})
      component: () => import('@/views/users/Profile.vue'),
      meta: {
        auth: true // 使用meta选项配置路由的元信息，其值可以是任意类型的数据，我们可以从路由对象中访问该值，如to.meta.auth
      }
    }]
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
  }, {
    path: "/test/next",
    name: "next",
    component: () => import("@/components/test/next")
  }
];
