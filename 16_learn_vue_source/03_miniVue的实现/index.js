function createApp(rootComponent) {
  return {
    mount(selector) {
      const container = document.querySelector(selector);

      let isMounted = false;
      let oldVnode = null;

      watchEffect(function () {
        if (!isMounted) {
          // 首次挂载
          oldVnode = rootComponent.render();
          mount(oldVnode, container);
          isMounted = true;
        } else {
          // 更新挂载
          const newVnode = rootComponent.render();
          patch(oldVnode, newVnode);
          oldVnode = newVnode;
        }
      });
    },
  };
}
