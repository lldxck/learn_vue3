let message: string = "hello world";

// 默认情况下可以不写类型注解，会自动推导（推断）
let name = "jack";
let age = 15;
let height = 1.88;

const info = `name:${name},age:${age},height:${height}`;

console.log(message);
console.log(info);

export {};
