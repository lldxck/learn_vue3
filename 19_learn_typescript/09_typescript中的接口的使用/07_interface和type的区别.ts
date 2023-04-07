// interface可以重复对某个接口来定义属性和方法
// type定义的是别名，别名是不能重复的

interface IFoo {
  name: string;
}

interface IFoo {
  age: number;
}

const foo: IFoo = {
  name: "jack",
  age: 18,
};

type FooType = {
  name: string;
};

const fooType: FooType = {
  name: "rose",
};
