function foo(): string {
  return "hello";
}

function bar(): number {
  return 111;
}

let flag: boolean = true;
let res: unknown;

if (flag) {
  res = foo();
} else {
  res = bar();
}

console.log(res);

export {};
