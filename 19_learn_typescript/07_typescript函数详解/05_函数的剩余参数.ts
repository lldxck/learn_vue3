function sum(initalNum: number, ...nums: number[]) {
  let total = initalNum;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sum(10, 20));
console.log(sum(10, 20, 30));
console.log(sum(10, 20, 30, 40));
