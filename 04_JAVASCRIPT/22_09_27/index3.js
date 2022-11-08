//함수 - 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합
//  : 함수 정의(생성) -> 함수 호출

const hello = function a(){
    console.log("AAA");
}

hello();

// return 키워드
// : 변환값 -> 함수 내부 코드의 "최종 결과값"
// 함수 내부 코드의 최종 값을 저장하고 보관하려고 등장한 키워드
function helloworld3() {
    return "hello world 3";
}
console.log(helloworld3());

//함수 표현식
const halo = function helloworld4() {
    return "hello world 4";
}
console.log(halo());

//다양한 함수 만들기
//case1. 매개변수(인자) 1개
function hello1(text) {
    return text;
}

console.log(hello1("ㅎㅇㄹ"));

//case2. 매개변수(인자) 2개
function hello2(text, name) {
    let result = `${text} 나는 ${name}이야`;
    return result;
}

console.log(hello2("안녕?", "Kevin"));

//case3. return 없이 함수에서 바로 console.log()찍기
function hello3(text, name) {
    console.log(`${text} 나는 ${name}이야`);
}
hello3("하이요", "승원");

//case4 case2를 함수 표현식으로 바꾸기
const practice = function hello2(text, name) {
    let result = `${text} 나는 ${name}이야`;
    return result;
}

console.log(practice("오하요", "ㅅㅅㅇ"));

//case5. case3를 함수 표현식으로 하기
const practice2 = function hello3(text, name) {
    console.log(`${text} 나는 ${name}이야`);
}

practice2("배고파", "크아왕");

console.log("------------------------------------");

function countNum() {
    let count = 7;
    console.log("count 값1: ", count);
}
countNum();
console.log('count 값2: ',3); //uncaught ReferenceError

//지역변수
// =>함수 안에서 선언한 변수는 함수 안에서만 유효하다.
// => 지역변수는 함수의 body를 벗어나면 접근할 수 없다.

let count2 = 0;

console.log('count2 값1: '+ count2);

function countNum2() {
    count2 = 77;
    console.log(count2);
}
countNum2();

let color = 'red';
function printColor() {
    let color = 'green';
    console.log(color);
}
printColor();

console.log(color);

let animal = 'dog';

function who() {
    let animal = 'cat';
}

//=====================================================
//문자열 속성과 메서드(함수)
// : 자바스크립트에서 기본제공하는
// 문자역(string)에서 사용 가능한 편리한 기능

console.log('------------');

//속성
//length: 문자열 길이

var song = "Strawberry Moon";
var song2 = "Watermelon Sugar";
console.log(song.length); //song 변수의 문자열 길이
console.log(song2.length); //song2 변수의 문자열 길이

//XX.method() 형태
// - toUpperCase() : 대문자로 변경
// - toLowerCase() : 소문자로 변경
// - trim() : 양끝 공백 제거
var msg = 'Happy Bitthday~ ';
var userId = '             user123      ';

console.log(msg.toUpperCase());
console.log(msg.toLowerCase());

console.log(userId.length);
console.log(userId.trim());
console.log(userId.trim().length);

var msg2 = ' hello world!  ';
console.log(msg.trim().toUpperCase());
//msg2변수의 양끝 공백 제거 -> 대문자로 변경

var msg3 = '      Thank you   ';

console.log(msg3.toUpperCase());

// 인덱싱 (indexing)
// : string에서 한 글자를 선택
// 변수명[위치값]
// 위치값: 숫자 "0"부터 시작
console.log(song);

console.log(song[0]);
console.log(song[1]);
console.log(song[2]);
console.log(typeof(song[2]));
console.log(song[0] + song[7]);
console.log(song[0].length);
console.log(song[0].toLowerCase());

console.log(song[0].toUpperCase() +song[12] +song[14] + song[14] + song[9]);

//XX.method(arg) 형태
// - indexOf() : string에서 x가 나타내는 인덱스(위치값)를 반환
//               x가 없다면 -1 반환
// - slice()   : starIndex 부터 끝까지 문자열을 잘라내어 반환
// - replace() : 교체될 값, 교체되어 들어가는 값
//              -> 처음 발견한 값을 교체
// - replaceAll(교체될 값, 교체되어 들어가는 값)
//              -> 발견한 값을 모두 찾아서 교체

var fruit = 'applemango';
var msg = "Wow, it's amazing!!";

console.log(fruit.indexOf('a')); //0
console.log(fruit.indexOf('1')); //3
console.log(fruit.indexOf('mango')); //5
console.log(fruit.indexOf('x')); //-1

console.log(fruit.slice(5));
console.log(fruit.slice(-1)); //인덱스도 ㄱㄴ

console.log(msg.replace('Wow', 'Hey'));
console.log(msg.replaceAll('a', 'A'));

// 퀴즈1) 2022.9.26 -> 2022-9-26
// 퀴즈2) 2022.9.26 -> 22-9-26
let date = '2022.9.26';

console.log(date.replaceAll('.', '-'));
console.log(date.slice(2).replaceAll('.', '-'));