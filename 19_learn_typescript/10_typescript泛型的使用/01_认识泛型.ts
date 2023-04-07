// 类型的参数化

// 在定义函数时，我们不决定这些参数的类型
// 而是让调用者以参数的形式告知，我这里的函数参数应该是什么类型
function sum<Type>(n1: Type): Type {
  console.log(typeof n1);
  return n1;
}

// 明确传入类型
console.log(sum<number>(10));
console.log(sum<string>("123"));

// 类型推导
console.log(sum(1));
console.log(sum("aa"));
