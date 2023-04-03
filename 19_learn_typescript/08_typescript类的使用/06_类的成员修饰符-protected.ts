/**
 * protected:在类内部和子类中可以访问
 */

class Person {
  protected name: string = "jack";
  getName(){
    return this.name
  }
}

class Student extends Person {
  getName() {
    return this.name;
  }
}

const stu = new Student();
console.log(stu.getName());

const p = new Person();
console.log(p.getName());

export {};
