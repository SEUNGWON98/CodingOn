/*
자료형
- 기본형 (primitive)
- 객체 (object)
 1) 배열
 2) 객체 리터럴(객체)
*/

// 1. 배열
const arr1 = ['red', 'orange', 'yellow', 1, 2, 3]; //배열 생성방법 1
const arr2 = new Array('red', 'orange', 'yellow', 1, 2, 3); //배열 생성방법 2

console.log(arr1);
console.log(typeof arr1); //배열은 오브젝트

console.log(arr2);


//배열 원소 읽기
//인덱스: 배열 원소 위치값
//숫자는 0부터 시작
let str = 'Green';
console.log(str[1]);
console.log(arr1[5]);

arr1[2] = '유휴';
console.log(arr1);

// arr1에서 숫자 2 -> 100
arr1[4]= 100;
console.log(arr1);

//원소 추가
arr1[6] = '추가';
console.log(arr1);
arr1[7] = '원모어';
console.log(arr1);

//마지막 값이 아닌곳에 번호로 원소를 추가하면 그 사이는 빈값이 된다.
arr1[10] = '얍';
console.log(arr1);
console.log(arr1[8]);
console.log(arr1[9]);

// 배열에서 자주 사용되는 속성/메서드
// 1. length : 배열 길이 = 요소 개수
console.log(arr2);
console.log(arr2.length);

console.log(arr2[arr2.length -1]);


// 2. push(x): x를 맨 뒤에 추가
arr1.push(4, 5, 6);
console.log(arr1);

// 3. pop() : 맨뒤 요소를 제거
arr1.pop();
console.log(arr1);

arr1.pop();
arr1.pop();
arr1.pop();
console.log(arr1);

//4. unshift(x): 맨 앞에 x를 추가
arr2.unshift('hi');
console.log(arr2);
arr2.unshift('a', 'b'); //여러 개 추가 가능
console.log(arr2);

// 5. shift():  맨 앞 요소 제거
arr2.shift();
console.log(arr2);
arr2.shift();
console.log(arr2);

// 6. indexOf(x) : 배열 원소에 x 가 있는지 찾음
console.log(arr2.indexOf('orange')); //2
console.log(arr2.indexOf('xxx')); // 없는 값은 -1 출력

//응용
const korean = [
    ['무', '야', '호'],
    ['가', '나', '다'],
    ['ㄹ', 'ㅇ', 'ㅋ', 'ㅋ']
];

console.log(korean);
console.log(korean[0]);
console.log(korean[1][2]);

// 퀴즈) 아래 배열에서 아이스크림 출력하기
const letters = [
    ['사', '스', '자', '크'],
    ['진', '안', '리', '이'],
    ['가', '수', '림', '나'],
    ['아', '으', '차', '운'],
  ];

console.log(letters[3][0] + letters[1][3] + letters[0][1] + letters[0][3] + letters[2][2]);

//3차원 배열
const nums = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ]
];
console.log(nums);

console.log(nums[1][0][1]);

// ===============================================
// 2. 객체 리터럴, 딕셔너리 (object)
// 배열 : 순서가 있음
// 객체 : 키-값 형태
// {}를 이용해 생성
// { key1: value1, key2: value2, key3: value3, ...}

const cat = {
    name: '나비',
    age: 1,
    mew: function() {
        return '미야옹';
    },
};

console.log(cat);

//객체 접근하기
//1. 점 표기법
console.log(cat.name);

console.log(cat.age);
console.log(cat.mew());

cat.age = 2;
console.log(cat.age);

//key 추가하기
cat.gender= 'f';
console.log(cat);

//2. 대괄호 표기법
console.log(cat['name']);
console.log(cat['gender']);

//value 변경하기
cat['age'] = 5;
console.log(cat);

//key-value 추가하기
cat['weight'] = 5;
console.log(cat);

// value값: boolean, array, number, string, object ...
const dog = {
    name: 'Coco',
    isPoodle: true,
    age: 3,
    sibling: ['Max', 'Lucy', 'Bella']
};

console.log(dog);
console.log(dog.name);
console.log(dog.isPoodle);
console.log(dog.age);
console.log(dog.sibling);
console.log(dog.sibling[1]);

//객체 타입 확인하기
console.log(typeof dog);
console.log(typeof(dog));
