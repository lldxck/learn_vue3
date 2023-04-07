interface IPerson {
  name: string;
  age: number;
  height: number;
}

const info = {
  name: "jack",
  age: 18,
  height: 1.8,
  address: "。。。",
};

// freshness擦除
/**
 * 1.将一个变量标识符赋值给其他变量时（对象的引用赋值），会进行freshness擦除操作
 * 2.多的属性address会被擦除，少了属性会报错
 * 3.typescript类型限制的原因，p中不可以获取address属性，但打印依然是可以的
 */
const p: IPerson = info;

console.log(p);
// IPerson上不存在address
// console.log(p.address);
console.log(info);

function printInfo(person: IPerson) {
  console.log(person);
}

// 报错
// printInfo({
//   name: "jack",
//   age: 18,
//   height: 1.8,
//   address: "。。。",
// });

printInfo(info);
