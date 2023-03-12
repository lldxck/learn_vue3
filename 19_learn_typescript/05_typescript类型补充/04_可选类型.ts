function printPoint(point: { x: number; y: number; z?: number }) {
  console.log(point.x);
  console.log(point.y);
  if (point.z) {
    console.log(point.z);
  }
}

printPoint({ x: 1, y: 2 });

printPoint({ x: 100, y: 200, z: 300 });
