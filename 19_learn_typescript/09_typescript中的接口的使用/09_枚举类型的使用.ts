// type Direction = "LEFT" | "RIGHT" | "TOP" | "BOTTOM";

// 枚举类型的默认值从0开始，依次递增
enum Direction {
  LEFT,
  RIGHT = "Right",
  TOP = 100,
  BOTTOM,
}

function turnDirection(direction: Direction) {
  console.log(direction);

  switch (direction) {
    case Direction.LEFT:
      console.log("改变角色的方向向左");
      break;
    case Direction.RIGHT:
      console.log("改变角色的方向向右");
      break;
    case Direction.TOP:
      console.log("改变角色的方向向上");
      break;
    case Direction.BOTTOM:
      console.log("改变角色的方向向下");
      break;
    default:
      const foo: never = direction;
      console.log(foo);

      break;
  }
}
turnDirection(Direction.LEFT);
turnDirection(Direction.RIGHT);
turnDirection(Direction.TOP);
turnDirection(Direction.BOTTOM);
