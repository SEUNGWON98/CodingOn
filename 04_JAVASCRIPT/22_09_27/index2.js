//var 중복선언 가능, 재할당 가능

/*
var a= 2;
console.log(a);

var a= 5; //var 문제점 변수 재선언이 허용됨
console.log(a);

a=4;
console.log(a);
aa=123; //선언 없이 할당이 허용되어 큰 단점(유지보수 측면)
console.log(aa);

//let 중복선언 불가, 재할당 가능
let c=4;
console.log(c);

//const 중복선언 불가, 재할당 불가, 선언과 할당이 동시에 이루어져야 한다.
const d= 4;
console.log(d);

// [QUIZ] 변수
// Q1. 코드 실행시 q1 변수는 어떤 값이 될까? 3
let q1 = 3;
q1 - 2;

// Q2. 다음 코드 실행시 q2 변수는 어떤 값이 될까? 13
let q2 = 10;
q2 = q2 + 5;
q2 = q2 - 2;


// Q3. 다음 코드 실행시 q3 변수는 어떤 값이 될까? error
const q3 = 1;
q3 = q3 + 1;
*/

/* 식별자
    :이름을 붙일 때 사용하는 단어(변수명, 함수명 등)

    식별자 규칙
    1. 키워드 사용 불가능
        i)키워드: 특별한 역할을 이미 하고 있는 단어
        ii) ex. const, var, let, void, return, for, while, if, else, ...
    2. 숫자로 시작 x
    3. 특수문자: _, $ 만 허용
    4. 공백 문자 (space bar) x

    [QUIZ] 다음 중 식별자 가능한 것? 
        apple o
        1apple x
        let x
        $apple o
        APPLE o
        apple5 o
        _ o
        apple good x
        _apple o
        Apple o
*/

// camelCase
//    UserId
//snake_case
//   user_id

// #############################################################################3

console.log("-----------------------------------------------");

/*자료형 - 데이터의 종류
    1. 기본형 (primitive)
        - string
        - number
        - boolean
        - null
        - undefined
    2. 객체 (object)
        - 배열
        - 딕셔너리

    javascript 다른 언어와 달리 인터프리터(해석기)가 알아서 변수의 
    타입을 파악한 후 저장하여 변수의 타입을 따로 작성해주지 않아도 된다.
    var, let, const 3가지 키워드를 이용해 변수를 선언한다.

    기본형 (primitive)
    1. string
        - 텍스트 정보, 문자열
        - 따옴표를 감싸야 함('', "" 둘 다 가능)
        - 숫자, 특수 문자도 따옴표 안에 있으면 문자열
        ex) "안녕이라고 내게 말하지마"
*/

let a = "Hello";
let b = "Hi";
let c = "안녕";
let d = "곰방와";

console.log(a + b);
console.log(b +d);
console.log(c);
console.log(d);

//템플릿 리터럴 - string 내의 변수와 상수를 간결하게 표현
//  백틱``기호와 $, {}기호 사용(jquery)

console.log(`${a} 난 승원이야 ${b}라는 말 밖에 못해`);

//  2. number
//      숫자(정수, 실수) - 연산 가능
//          NaN - not a number
//  3. boolean
//      true, false 둘 중 하나의 값
//  4. null
//      null은 값이 없다는 뜻으로 값이 없다는 것을 의도적으로 명시할 때 사용
//  5. undefined
//      -값, 타입 모두 없음(값도 없고, 타입도 지정되어 있지 않음)
console.log("------------------");
console.log(typeof('문자')); //string
console.log(typeof(245)); //number
console.log(typeof(true)); //boolean
console.log(typeof(null)); //null

console.log(typeof '문자');

//형변환

console.log("-----------------------");

var str1 = true;
var str2 = 123;
var str3 = null;

console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));

console.log(typeof str1.toString());
console.log(typeof str2.toString());

var n1 =true;
var n2 = false;
var n3 = 123;
var n4 = 'a';

console.log(typeof Number(n4));
console.log(parseInt(n4, 12)); //, 뒤에는 몇 진수인지 표현

console.log(Boolean(10 == '10'));