type Person = {
  name: string;
  friend?: {
    name: string;
    age?: number;
    job?: {
      title: "ll";
    };
  };
};

const info: Person = {
  name: "jack",
  friend: {
    name: "rose",
    // job: {
    //   title: "ll",
    // },
  },
};

console.log(info.name);
console.log(info.friend?.name);
console.log(info.friend?.age);
console.log(info.friend?.job?.title);

export {};
