interface ISwim {
  swimming: () => void;
}

interface IFly {
  flying: () => void;
}

// 接口可以实现多继承，类不支持
interface IAction extends ISwim, IFly {}

const actions: IAction = {
  // 实现继承的的方法
  swimming() {},
  flying() {},
};
