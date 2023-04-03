class Person {
  name: string = "jack";
  eating() {}
}

const p = new Person();

const p1: Person = {
  name: "rose",
  eating() {},
};

function printPerson(p: Person) {
  console.log(p.name);
}

printPerson(new Person());
printPerson({ name: "tom", eating: () => {} });

export {};
