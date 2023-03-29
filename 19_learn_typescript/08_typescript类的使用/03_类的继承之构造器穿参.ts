class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  eating() {
    console.log(this.name + " eating");
  }
}

class Student extends Person {
  sno: number;
  constructor(name: string, age: number, sno: number) {
    // super()调用父类的构造器（必须在使用this之前调用一次）
    super(name, age);
    this.sno = sno;
  }
  studying() {
    console.log(this.name + " studying");
  }
}

class Teacher extends Person {
  title: string;
  constructor(name: string, age: number, title: string) {
    super(name, age);
    this.title = title;
  }
  teaching() {
    console.log(this.name + " teaching");
  }
}

const stu = new Student("jack", 18, 1234);
console.log(stu.name);
console.log(stu.age);
console.log(stu.sno);
stu.eating();
stu.studying();

const teacher = new Teacher("Tom", 28, "英语");
console.log(teacher.name);
console.log(teacher.age);
console.log(teacher.title);
teacher.eating();
teacher.teaching();
