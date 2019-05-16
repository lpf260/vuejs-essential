import Vue from 'vue';
import Message from './Message'

// 注册全局组件需要使用 Vue.component，第一个参数 'Message' 是组件名称，
// 第二个参数 Message 是一个对象或者函数，我们这里是一个对象。
Vue.component('Message', Message)
