import Vue from 'vue';
import Vuex from 'vuex';

import ls from '../utils/localStorage';
import router from '../router';

Vue.use(Vuex);

const state = {
  // 用户信息， 初始值从本地localStore获取
  user: ls.getItem('user'),
  // 添加 auth 来保存当前用户的登录状态
  auth: ls.getItem('auth')
}

const mutations = {
  // UPDATE_USER是事件类型名称，大小写不是必须的，后期可以使用常量代替事件类型。参数state是当前仓库的state
  // user是用户传入的参数，多参数的时候应该使用一个对象
  UPDATE_USER(state, user) {
    // 改变user的值
    state.user = user;
    // 将改变后的值存入localStorage
    ls.setItem('user', user);
  },
  // 添加UPDATE_AUTH来更改当前用户的登录状态
  UPDATE_AUTH(state, auth) {
    state.auth = auth;
    ls.setItem('auth', auth)
  }
}

const actions = {
  login({
    commit
  }, user) {
    if (user) commit('UPDATE_USER', user)
    // 更新当前用户的登录状态为已登录
    // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
    // 因此你可以调用 context.commit 提交一个 mutation
    commit('UPDATE_AUTH', true);
    router.push('/')
  },
  logout({
    commit
  }) {
    commit('UPDATE_AUTH', false)
    router.push({
      name: 'Home',
      params: {
        logout: true
      }
    })
  },
  updateUser({
    state,
    commit
  }, user) {
    // 获取仓库的个人信息
    const stateUser = state.user;

    // 简单的数据类型判断
    if (stateUser && typeof stateUser === 'object') {
      // 合并新旧个人信息，等价于user = Object.assign({}, stateUser, user)
      user = {
        ...stateUser,
        ...user
      }
    }

    commit('UPDATE_USER', user)
  }
}

// new Vuex.Store()创建仓库实例
const store = new Vuex.Store({
  // 共享的状态，我们不能直接更改状态，但是可以像store.state.user这样访问一个状态
  state,

  // 更改状态的方法，我们可以在这里更改状态，调用方法是像store.commit('UPDATE_USER', user)这样提交一个事件类型，这里不能包含异步操作
  mutations,

  // 类似于mutations，但我们不能再这里直接更改状态，而是提交前面的mutation，调用方法是像store.dispatch('login')这样分发一个事件，这里可以包含异步操作
  actions
})

export default store
