// 函数的重载：函数的名称相同，但是参数不同的几个函数，就是函数的重载
// 无函数体
function add(n1: number, n2: number): number;
function add(n1: string, n2: string): string;

function add(n1: any, n2: any) {
  return n1 + n2;
}

const res1 = add(10, 20);
const res2 = add("ab", "cd");
console.log(res1);
console.log(res2);

// 在函数的重载中，实现函数是不能直接被调用的
// 例如
// add({ name: "jack" }, { age: 19 });
