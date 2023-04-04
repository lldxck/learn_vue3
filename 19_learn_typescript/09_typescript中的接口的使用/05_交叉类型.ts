// 1.组合类型的方式：联合类型
type Type1 = number | string;
type Direction = "left" | "right" | "center";

// 2.组合类型的方式：交叉类型
type Type2 = number & string;

interface ISwim {
  swimming: () => void;
}

interface IFly {
  flying: () => void;
}

// 实现接口之一
type MyType1 = ISwim | IFly;
// 接口都要实现
type MyType2 = ISwim & IFly;

const obj1: MyType1 = {
  swimming() {},
};

const obj2: MyType2 = {
  swimming() {},
  flying() {},
};
