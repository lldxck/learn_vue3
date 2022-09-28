class Dep {
  constructor() {
    this.subscribers = new Set();
  }

  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect);
    }
  }

  notify() {
    this.subscribers.forEach((effect) => {
      effect();
    });
  }
}

const dep = new Dep();

let activeEffect = null;
function watchEffect(effect) {
  activeEffect = effect;
  dep.depend();
  effect();
  activeEffect = null;
}

// Map({key,value}):key是一个字符串
// WeakMap({key(对象):value}):key是一个对象，弱引用

const targetMap = new WeakMap();
function getDep(target, key) {
  // 1.根据对象target取出对应的Map对象
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  // 2.取出具体的dep对象
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }

  return dep;
}
// vue2对raw进行数据劫持
// function reactive(raw) {
//   Object.keys(raw).forEach((key) => {
//     const dep = getDep(raw, key);
//     let value = raw[key];

//     Object.defineProperty(raw, key, {
//       get() {
//         dep.depend();
//         return value;
//       },
//       set(newValue) {
//         value = newValue;
//         dep.notify();
//       },
//     });
//   });

//   return raw;
// }
// vue3对raw进行数据劫持
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const dep = getDep(target, key);
      dep.depend();
      return target[key];
    },
    set(target, key, newValue) {
      const dep = getDep(target, key);
      target[key] = newValue;
      dep.notify();
    },
  });
}

const info = reactive({ name: "jack", age: 18 });
const counterInfo = reactive({ counter: 100 });

watchEffect(function doubleCounter() {
  console.log("effect1", counterInfo.counter * 2);
});

watchEffect(function powerCounter() {
  console.log("effect2", counterInfo.counter * counterInfo.counter);
});

watchEffect(function () {
  console.log("effect3", info.name, counterInfo.counter);
});

watchEffect(function () {
  console.log("effect4", info.name, info.age);
});

// counterInfo.counter++;
// dep.notify();

info.name = "rose";
// dep.notify();
