// namespace命名空间
export namespace time {
  export function format(time: string) {
    return `time-${time}`;
  }

  // 未导出只能在命名空间内使用
  function foo() {
    console.log("foo");
  }
  export let name: string = "jack";
}

export namespace price {
  export function format(price: number) {
    return `¥${price}`;
  }
}
