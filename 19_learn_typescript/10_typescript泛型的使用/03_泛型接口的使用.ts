interface IPerson<T1 = string, T2 = number> {
  name: T1;
  age: T2;
}

const p: IPerson = {
  name: "jack",
  age: 18,
};
