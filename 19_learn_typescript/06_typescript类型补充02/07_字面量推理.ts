type Method = "GET" | "POST";

function request(url: string, method: Method) {}

// 方式一：定义类型
// type Request = {
//   url: string;
//   method: Method;
// };

// const options: Request = {
//   url: "http://www.123.com/abc",
//   method: "POST",
// };

// request(options.url, options.method);

// 方式二 默认情况下,url和method属性为string类型，加上as const变成字面量类型
// const options = {
//   url: "http://www.123.com/abc",
//   method: "POST",
// } as const;

// request(options.url, options.method);

// 方式三
const options = {
  url: "http://www.123.com/abc",
  method: "POST",
};

request(options.url, options.method as Method);

export {};
