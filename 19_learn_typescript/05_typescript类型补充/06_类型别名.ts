// type用于定义类型别名
type IdType = string | number | boolean;

type PointType = {
  x: number;
  y: number;
  z?: number;
};

function printId(id: IdType) {}

function printPoint(point: PointType){}

export {};
