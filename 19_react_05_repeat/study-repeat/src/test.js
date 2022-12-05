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
