// type定义函数类型
// type CalcFn = (n1: number, n2: number) => number;

// 接口定义函数类型
interface CalcFn {
  (n1: number, n2: number): number;
}

function calc(n1: number, n2: number, calcFn: CalcFn) {
  return calcFn(n1, n2);
}

const add: CalcFn = (num1, num2) => {
  return num1 + num2;
};

console.log(calc(10, 20, add));
