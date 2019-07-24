import MessageComponent from '../components/Message'

export default {
  // 插件的公开方法install
  install: (Vue) => {

    // Vue.extend用来创建一个新【子类】，其参数是一个包含组件选项的对象，对应我们这里的Message组件
    const Message = Vue.extend(MessageComponent);


    const vm = new Message();

    // 使用vm.$mount()手动地挂在一个未挂载的实例，并返回当前实例，此时我们能从实例获取$el
    const $el = vm.$mount().$el;

    console.log("vm.$mount", vm.$mount())
    console.log("vm.$mount", typeof ($el))

    Vue.nextTick(() => {
      // 在下一次DOM更新后，将实例目标添加到 #main-container元素内部的最前面
      document.querySelector('#main-container').prepend($el)
    })

    // 添加一个事件监听 
    // $on用来监听当前实例上的自定义事件， 其第一个参数是事件名称或者包含事件名称的数组，第二个参数是回调函数，该函数会接受触发函数的所有
    // 参数。我们用$on来监听Message组件的关闭按钮触发的事件
    vm.$on('update:show', (value) => {
      // 更改当前的show值
      vm.show = value
    })

    const message = {
      //  更改消息并显示提示框，其逻辑跟我们之前写的 showMsg 一模一样
      show(msg = '', type = 'success') {
        vm.msg = msg
        vm.type = type
        vm.show = false

        Vue.nextTick(() => {
          vm.show = true
        })
      },
      hide() {
        Vue.nextTick(() => {
          vm.show = false
        })
      }
    }

    Vue.prototype.$message = message
  }
}
