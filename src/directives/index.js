import Vue from 'vue'
import validator from './validator'
import dropdown from './dropdown'


//注册全局指令需要使用 Vue.directive，第一个参数 'validator' 是指令名称，
//第二个参数 validator 是指令对象或者指令函数，我们这里是指令对象。
//全局注册的好处是，可以在实例内部的所有组件中使用，而不用在每个组件内部单独引用和注册。

const directives = {
  validator,
  dropdown
}

// 我们这里使用一个循环，来注册我们的所有指令
// Object.entries 返回给定对象的键值对数组
// 以 Object.entries(directives) 的返回为例
for (const [key, value] of Object.entries(directives)) {
  Vue.directive(key, value)
}
