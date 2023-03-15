// ?:可选相当于string | undefined
function printMessageLength(message?: string) {
    // 非空断言!：表示某个标识符是有值的，跳过ts在编译阶段对它的检测（运行时可能报错）
  console.log(message!.length);
}

printMessageLength("hello world");
printMessageLength("哈哈哈");
