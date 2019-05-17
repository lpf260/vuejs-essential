// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

//我们通过引入 ./directives/index.js，运行其中的代码，就可以使用其内部注册的所有指令了。
import './directives'
import './components'

// 引入store
import store from './store'

// 引入插件
import VueSweetalert2 from './plugins/vue-sweetalert2'

// 使用插件
Vue.use(VueSweetalert2)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  //注入store
  store,
  components: {
    App
  },
  template: "<App/>"
});
