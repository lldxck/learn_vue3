type Fn = (num1: number, num2: number) => number;
function calc(n1: number, n2: number, fn: Fn) {
  return fn(n1, n2);
}

const res1 = calc(10, 20, (a1, a2) => {
  return a1 + a2;
});
console.log(res1);

const res2 = calc(20, 30, (a1, a2) => {
  return a1 * a2;
});

console.log(res2);
