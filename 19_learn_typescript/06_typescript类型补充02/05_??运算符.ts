// let message: string | null = null;
let message: string | null = "hello typescript";

// 当??左侧是undefined或者null时，返回右侧，否则返回左侧
message = message ?? "hello world";

console.log(message);

export {};
