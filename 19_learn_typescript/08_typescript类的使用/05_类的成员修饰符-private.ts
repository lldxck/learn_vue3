/**
 * provide:自身类中可见
 */
class Person {
  private name: string = "嘎嘎";
  getName() {
    return this.name;
  }
  setName(newName:string) {
    this.name = newName;
  }
}

const p = new Person();
// name为私有属性，只能在Person类中访问
// p.name='啦啦啦'
console.log(p.getName());
p.setName('啦啦啦')
console.log(p.getName());

export{}

