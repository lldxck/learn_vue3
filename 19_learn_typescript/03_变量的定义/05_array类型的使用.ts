let arr1: Array<string> = ["aa", "bb", "cc"];
let arr2: string[] = ["ab", "bc", "cd"];

arr1.push("dd");
arr2.push("de");

// 添加其它类型的数据到数组内,报错
// arr1.push(11);
// arr2.push(true);

console.log(arr1);
console.log(arr2);
