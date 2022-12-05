// map()

const list = ["a", "b", "c", "d", "e"];

for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

console.log("----");
list.map((txt, idx, arr) => {
  console.log(txt, idx, arr);
});

//txt: 원소 값
// idx: 인덱스 위치
// arr: 현재 반복을 돌고 있는 배열(배열 전체)

// filter()
// - true: ㅇ요소 유지 / false: 요소 버림 -> "새로운 배열"

const words = ["dog", "cat", "rabbit", "apple", "wow"];
// 글자수 3개 초과 필터링
let results = words.filter((word) => word.length > 3);
// let results = words.filter((word) => {
// return word.length >3;
// });
console.log(results);

// 글자에 'a' 포함 필터링
let results2 = words.filter((word) => {
  return word.includes("a");
});
console.log(results2);

// consolelog("abc".includes('a')); //true
// consolelog("abc".includes('x')); //false

/////////////////////////////////////////////////////////

console.log("--------------------");
const nums = [1, 2, 3, 4, 5];
const newNums = nums.map((num) => num * 3);
console.log(newNums); //[3, 6, 9, 12, 15]
console.log(newNums.includes(3));
console.log(newNums.includes(4));
console.log(newNums.indexOf(9));

const arr1 = [
  { name: "a", id: 1 },
  { name: "b", id: 2 },
  { name: "c", id: 3 },
];

const arr2 = [
  { name: "d", id: 4 },
  { name: "e", id: 5 },
  { name: "f", id: 6 },
];
