//JS 표준 내장 객체
// 기본적으로 갖고 있는 객체
// string, Number, Array, Date, Math

// ===============================================
// Date 객체
// 시간, 날짜에 대한 정보를 얻기 위함

let now = new Date();
console.log(now);

//밀리 초
// 1970-01-01 09:00:00을 기준으로
console.log(new Date(0));
console.log(new Date(9000000000));

//new Date(y, m, d, h, m, s, ms)
// year : 4자리
// month : 0(1월) ~ 11(12월) -> 주의!
// date : 1 ~ 31 -> 생략하면, 1으로 처리
// hour, minutes, seconds, ms
console.log(new Date(2018, 2, 2));
console.log(new Date(2022, 8, 30));

//Date 객체 메서드
//메서드를 이용해 년, 월, 일 등의 값을 얻기

console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getHours());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getDay()); //0(일) ~ 6(토)

// 퀴즈
// Date 객체를 이용해 오늘 요일을 얻고,
// switch-case문과 if문으로 오늘이 평일/주말 구별해보자
// if 문

let right_now = new Date();

if((right_now.getDay() == 0) || (right_now.getDay() ==6)) {
    console.log("오늘은 주말입니다");
}
else {
    console.log("오늘은 평일 ㅠㅠ");
}

switch(right_now.getDay()) {
    case 0 :
    case 6 :
        console.log("주말!!!");
        break;
    case 1 :
    case 2 :
    case 3 :
    case 4 :
    case 5 :
        console.log("평일");
        break;
    default : 
    console.log("몰랑");
}

//MATH 객체
// 수학적인 상수와 함수를 위한 속성과 메서드

// 속성
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2); //2의 제곱근

//메서드
console.log(Math.min(100, 200, 30, 7));// 최솟값
console.log(Math.max(100, 200, 30, 7)); //최댓값
console.log(Math.round(6.5)); //반올림
console.log(Math.round(6.4));
console.log(Math.floor(6.5));
console.log(Math.floor(6.4));
console.log(Math.ceil(6.4));
console.log(Math.ceil(6.4));

console.log(Math.max(1.1, 2.2, 3.3, 7.7));
console.log(Math.floor(7.7));
console.log(7);

console.log(Math.random()); // 0<= x <1 범위의 난수

console.log(Math.floor(Math.random()*10));

// 퀴즈) Returns a random integer from 1 to 10:

console.log(Math.floor(Math.random()*10) + 1);

// 퀴즈) Returns a random integer from 1 to 100:

console.log(Math.floor(Math.random()*100)+1);

// 퀴즈) Returns a random integer from 20 to 22:

console.log(Math.floor(Math.random()*3)+20); //원하는 숫자 개수만큼 곱하고 floor, 범위지정(수학에서 부등호 성질 이용하면 편함)
