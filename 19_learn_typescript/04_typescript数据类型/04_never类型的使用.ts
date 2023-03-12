function foo(): never {
  while (true) {
    console.log("123");
  }
}

function bar(): never {
  throw new Error("错误");
}
