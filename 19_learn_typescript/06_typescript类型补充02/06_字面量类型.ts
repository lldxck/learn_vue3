// "hello world"也是可以作为类型的，叫做字面量类型
let message: "hello world" = "hello world";
// 只能赋值"hello world"
// message='123'

// 字面量类型的意义，就是结合联合类型
type Alignment = "left" | "right" | "center";
let align: Alignment = "left";
align = "right";
align = "center";
