function foo<T, E, O>(arg1: T, arg2: E, arg3: O) {
  console.log(arg1, arg2, arg3);
}

foo<string, number, boolean>("aaa", 123, true);
