// typeof的类型缩小
type IDType = number | string;
function printID(id: IDType) {
  if (typeof id === "string") {
    console.log(id.toLocaleLowerCase());
  } else {
    console.log(id);
  }
}

// printID("AbCd");
// printID(123);

// 平等的类型缩小 == === != !== switch
type Direction = "left" | "right" | "top" | "bottom";
function printDirection(direction: Direction) {
  switch (direction) {
    case "left":
      console.log("left");
      break;
    case "right":
      console.log("right");
      break;
    case "top":
      console.log("top");
      break;
    case "bottom":
      console.log("bottom");
      break;
    default:
      console.log("请输入正确的方向");
  }
}
// printDirection("left");

// instanceof
function printTime(time: string | Date) {
  if (time instanceof Date) {
    console.log(time.toUTCString());
  } else {
    console.log(time);
  }
}
// printTime("2023-03-28");

class Student {
  studying() {
    console.log("studying");
  }
}

class Teacher {
  teaching() {
    console.log("teaching");
  }
}

function work(p: Student | Teacher) {
  if (p instanceof Student) {
    p.studying();
  } else {
    p.teaching();
  }
}

// work(new Student());

// in
type Fish = {
  swimming: () => void;
};

type Dog = {
  running: () => void;
};

function walk(animal: Fish | Dog) {
  if ("swimming" in animal) {
    animal.swimming();
  } else {
    animal.running();
  }
}
const fish: Fish = {
  swimming: () => {
    console.log("fish swimming");
  },
};
walk(fish);
