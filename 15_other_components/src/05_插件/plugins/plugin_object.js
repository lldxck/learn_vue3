export default {
  install(app) {
    // 编写插件代码
    console.log(app);
    // 注册一个全局可用的 $name 属性
    app.config.globalProperties.$name = "jack";
  },
};
