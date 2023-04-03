/**
 * 1.抽象方法必须在抽象类中
 * 2.子类必须实现父类的抽象方法(extends)
 * 3.抽象类不能new
 * 4.tsconfig.json默认配置，抽象方法必须指定返回值类型
 */

function makeArea(shape: Shape) {
  return shape.getArea();
}

// 抽象方法必须在抽象类中
abstract class Shape {
  // tsconfig.json默认配置，抽象方法必须指定返回值类型
  abstract getArea(): number;
}

class Rectangle extends Shape {
  private width: number;
  private height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  // 子类必须实现父类的抽象方法
  getArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  private r: number;
  constructor(r: number) {
    super();
    this.r = r;
  }
  // 子类必须实现父类的抽象方法
  getArea() {
    return this.r * this.r * 3.14;
  }
}

const rectangle = new Rectangle(10, 20);
const circle = new Circle(10);
console.log(makeArea(rectangle));
console.log(makeArea(circle));

export {}