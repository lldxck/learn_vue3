interface ISwim {
  swimming: () => void;
}

interface IEat {
  eating: () => void;
}

class Animal {}

// 类实现接口
// extends继承：只能实现单继承
// implements实现：实现接口，类可以实现多个接口
class Fish extends Animal implements ISwim, IEat {
  swimming() {
    console.log("Fish swimming");
  }
  eating() {
    console.log("Fish eating");
  }
}

class Person implements ISwim{
    swimming(){
        console.log('Person swimming');
        
    }
}

// 面向接口编程
function swimAction(swimAble:ISwim){
    swimAble.swimming()
}

// 所有实现接口的类对应的对象，都可以传入
swimAction(new Fish())
swimAction(new Person())
