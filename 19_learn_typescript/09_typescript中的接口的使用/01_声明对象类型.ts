// 通过类型（type）别名来声明对象类型
// type InfoType = { name: string; age: number };

//通过声明对象类型：接口interface
// 可以定义可选类型、只读属性等
interface InfoType {
  name: string;
  age: number;
  friend?: {
    name: string;
  };
  readonly sex: string;
}

const info: InfoType = {
  name: "jack",
  age: 18,
  friend: {
    name: "rose",
  },
  sex: "男",
};

console.log(info.name);
console.log(info.friend?.name);
// info.sex = "未知";
