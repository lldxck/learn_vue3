const el = document.getElementById("coder") as HTMLImageElement;

// 类型断言 as
el.src =
  "https://www.toopic.cn/public/uploads/image/20200404/20200404182849_78999.jpg";

class Person {}

class Student extends Person {
  studying() {
    console.log("study");
  }
}

// 类型断言 as
function sayHello(p: Person) {
  (p as Student).studying();
}

const stu = new Student();
sayHello(stu);


// 类型断言
const message='hello world'
const n:number=(message as unknown) as number
