// 函数作为参数时，在参数中如何编写类型

type FnType = () => void;
function bar(fn: FnType) {
  fn();
}
function foo() {
  console.log("我是foo");
}
bar(foo);

// 定义常量时，编写函数的类型
type AddFnType = (num1: number, num2: number) => number;
const add: AddFnType = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(10, 20));
