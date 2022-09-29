// 渲染系统模块
const h = (tag, props, children) => {
  // vnode是一个js对象
  return {
    tag,
    props,
    children,
  };
};

const mount = (vnode, container) => {
  //  1.创建出真实的元素，并且在vnode上保留el
  const el = (vnode.el = document.createElement(vnode.tag));

  //   2.处理props
  if (vnode.props) {
    for (key in vnode.props) {
      const value = vnode.props[key];

      // 对事件监听进行判断
      if (key.startsWith("on")) {
        el.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        el.setAttribute(key, value);
      }
    }
  }

  //   3.处理children
  if (vnode.children) {
    if (typeof vnode.children === "string") {
      el.textContent = vnode.children;
    } else {
      vnode.children.forEach((item) => {
        mount(item, el);
      });
    }
  }

  //   4.将el挂载到container上
  container.appendChild(el);
};

const patch = (n1, n2) => {
  if (n1.tag !== n2.tag) {
    // 直接删除n1，添加n2
    const n1ElParent = n1.el.parentElement;
    n1ElParent.removeChild(ni.el);
    mount(n2, n1ElParent);
  } else {
    // 1.取出el对象，并且在n2中进行保存
    const el = (n2.el = n1.el);

    // 2.处理props
    const oldProps = n1.props || {};
    const newProps = n2.props || {};
    // 2.1将所有的newProps添加到el
    for (key in newProps) {
      const oldValue = oldProps[key];
      const newValue = newProps[key];
      if (newValue !== oldValue) {
        if (key.startsWith("on")) {
          el.addEventListener(key.slice(2).toLowerCase(), newValue);
        } else {
          el.setAttribute(key, newValue);
        }
      }
    }

    // 2.2删除旧的节点
    for (key in oldProps) {
      const value = oldProps(key);
      // 删除不在newProps中的属性
      if (!(key in newProps)) {
        if ((key, startsWith("on"))) {
          el.removeEventListener(key.slice(2).toLowerCase(), value);
        } else {
          el.removeAttribute(key);
        }
      }
    }

    // 处理children
    const oldChildren = n1.children || [];
    const newChildren = n2.children || [];

    // 情况一：newChildren是一个string
    if (typeof newChildren === "string") {
      if (typeof oldChildren === "string") {
        if (newChildren !== oldChildren) {
          el.textContent = newChildren;
        }
      } else {
        el.innerHTML = newChildren;
      }
    } else {
      // 情况二：newChildren是一个数组
      if (typeof oldChildren === "string") {
        el.textContent = "";
        newChildren.forEach((item) => {
          mount(item, el);
        });
      } else {
        // newChildren oldChildren都是数组
        const commonLength = Math.min(oldChildren, newChildren);
        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChildren[i]);
        }

        if (newChildren.length > oldChildren.length) {
          newChildren.slice(oldChildren.length).forEach((item) => {
            mount(item, el);
          });
        }

        if (newChildren.length < oldChildren.length) {
          oldChildren.slice(newChildren.length).forEach((item) => {
            el.removeChild(item.el);
          });
        }
      }
    }
  }
};

/**
 * 更新节点(patch)
 *
 * 1.判断根节点事都一样
 *  --一样，直接将原来删除，新的进行添加
 *  --不一样继续第二步骤操作
 * 2.由于原来的根节点未发生变化，取出原来的el并为新节点赋值
 *  2.1将新节点添加
 *  2.2将旧节点进行删除
 * 3.处理children
 *  3.1判断newChildren是否是string
 *  --newChildren是string，直接el.textContent=newChildren
 *  --newChildren不是string，执行3.2
 *  3.2newChildren是一个数组
 *    --oldChildren是一个字符串，则将字符串内容置空，将newChildren挂载el
 *    --oldChildren是一个数组
 *      --去除数组的最小长度
 *      --遍历将新节点和旧节点进行patch比较
 *      --newChildren更长，将剩余新节点进行挂载操作
 *      --oldChildren更长，将剩余旧节点进行卸载操作
 *
 *
 *
 */
