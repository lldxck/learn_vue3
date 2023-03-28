const info = {
  name: "why",
  eating() {
    // this被默认推导，this指向info对象
    console.log(this);
    console.log(this.name + "eating");
  },
};

info.eating();
