// 在 el 元素的上方显示或隐藏一个内容为 title 的提示框
function showTitle(el, title) {
  const popover = getPopover();

  // Style 对象代表一个单独的样式声明。可从应用样式的文档或元素访问 Style 对象。
  const popoverStyle = popover.style;

  if (title === undefined) {
    popoverStyle.display = "none";
  } else {
    // getBoundingClientRect()获取元素位置，这个方法没有参数

    // getBoundingClientRect()用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置。
    // getBoundingClientRect()是DOM元素到浏览器可视范围的距离（不包含文档卷起的部分）。
    const elRect = el.getBoundingClientRect();

    // getComputedStyle 为何物呢，DOM 中 getComputedStyle 方法可用来获取元素中所有可用的css属性列表，以数组形式返回，并且是只读的。IE678 中则用 currentStyle 代替 。
    const elComputedStyle = window.getComputedStyle(el, null);

    // CSSStyleDeclaration getPropertyValue() 方法
    const rightOffset =
      parseInt(elComputedStyle.getPropertyValue("padding-righet")) || 0;

    const topOffset =
      parseInt(elComputedStyle.getPropertyValue("padding-top")) || 0;

    popoverStyle.visibility = "hidden";
    popoverStyle.display = "block";

    popover.querySelector(".popover-content").textContent = title;
    popoverStyle.left =
      elRect.left -
      popover.offsetWidth / 2 +
      (el.offsetWidth - rightOffset) / 2 +
      "px";
    popoverStyle.top = elRect.top - popover.offsetHeight + topOffset + "px";
    popoverStyle.display = "block";
    popoverStyle.visibility = "visible";
  }
}

// 创建或者返回一个提示框
function getPopover() {
  let popover = document.querySelector(".title-popover");

  if (!popover) {
    const tpl = `
    <div class="popover title-popover top fade in" style="position:fixed;">
        <div class="arrow"></div>
        <div class="popover-content"></div>
    </div>`;

    // Range.createContextualFragment() 该方法通过调用HTML片段解析算法或XML片段解析算法返回一个文档片段 DocumentFragment
    const fragment = document.createRange().createContextualFragment(tpl);

    document.body.appendChild(fragment);
    popover = document.querySelector(".title-popover");
  }

  return popover;
}

export default {
  // bind：只调用一次，指令第一次绑定到元素时调用，在这里可以进行一次性的初始化设置；
  // inserted：被绑定元素插入父节点时调用；
  // update：所在组件的 VNode（虚拟节点）更新时调用，但是可能发生在其子 VNode 更新之前；
  // componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用；
  // unbind：只调用一次，指令与元素解绑时调用，在这里可以移除绑定的事件和其他数据
  // el：指令所绑定的元素，可以用来操作 DOM ；
  // binding：一个对象，binding.value 表示指令的绑定值，如 v- title="'我是标题'" 中，绑定值为'我是标题'；
  // vnode：Vue 编译生成的虚拟节点；
  // oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
  bind(el, binding, vnode) {
    // 使用 const 声明一个只读的常量，其值是需要监听的事件类型列表
    const events = ["mouseenter", "mouseleave", "click"];
    // 声明一个处理器，根据不同的事件类型判断传入不同的参数
    const handler = event => {
      if (event.type === "mouseenter") {
        // 显示一个提示框
        showTitle(el, binding.value);
      } else {
        // 隐藏一个提示框
        showTitle();
      }
    };

    // 在 el 元素上添加事件监听
    events.forEach(event => {
      el.addEventListener(event, handler, false);
    });

    // 在 el 元素上添加一个属性，以在其他钩子进行访问
    el.destroy = () => {
      // 移除 el 元素上的事件监听
      events.forEach(event => {
        el.removeEventListener(event, handler, false);
      });
      // 移除 el 元素上的 destroy
      el.destroy = null;
    };
  },
  unbind(el) {
    // 移除事件监听和数据绑定
    el.destroy();
  }
};
