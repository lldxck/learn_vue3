type ThisType = { name: string };

function eating(this: ThisType,message:string) {
  console.log(this.name + " eating",message);
}

const info = {
  name: "why",
  eating: eating,
};
// 隐式绑定
info.eating('嘎嘎嘎');

// 显示绑定
eating.call({ name: "jack" },'哈哈哈');
eating.apply({ name: "rose" },['嘿嘿嘿']);

export {};
