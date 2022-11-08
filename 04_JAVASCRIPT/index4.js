

console.log(1 ==1);
console.log(1 ==2);
console.log(1 != 1);
console.log(1 != 2);

//==는 값만 비교, ===는 타입까지 비교

console.log('1' == 1); //true
console.log(1 === 1);


//비교 연산자
// >, <, >=, <=
console.log('---');
console.log(2 > 1);
console.log(2 < 1);
console.log(1 >= 1);
console.log(1 <= 1);

//논리 연산자
// && : and
// || : or
// !  : not

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(!true);
console.log(!false);
console.log(!!false);

console.log('---');
console.log((2>1) && (-2 < 1));
console.log(!(2>1));
console.log(((2>1) &&(-2<1)) || (5>2)); //true = 1, false = 0;

// ============================================================================
if(5>3) {
    console.log("bigger");
}

//함수안에서 조건문을 사용한다면?
function isBig() {
    if(5>3) {
        return 'bigger';
    }
}
console.log(isBig()); //console.log('bigger');

if(-5>3) {
    console.log('bigger');
}
else {
    console.log("smaller");
}

let score = 80;

if(score >=90) {
    console.log("당신은 A등급 입니다.");
}
else if(score >=80) {
    console.log("당신은 B등급 입니다.");
}

else if(score >=70) {
    console.log("당신은 C등급 입니다.");
}

else if(score >=60) {
    console.log("당신은 D등급 입니다.");
}

else{
    console.log("당신은 F등급 입니다.");
}

var id = "user";
var pw = "1234";

var id_2 = "user";
var pw_2 = "1234";

//아이디가 일치
//  )비밀번호 일치 -> 인사
//  )비밀번호 불일치 -> 불일치
// 아이디가 불일치 -> 아이디가 없음

if(id == id_2) {
    //do something
    if(pw == pw_2) {
        console.log('${id} 님 안녕하세요');
    }
    else {
        console.log("비밀번호를 확인해주세요");
    }
}
else {
    console.log("아이디가 다른데여");
}

// step1. (조건문) 홀짝을 구별하는 조건문 생성
// - n 변수를 선언하고 6을 할당
// - num이 짝수라면 콘솔창에 "짝수" 출력
// - num이 홀수라면 콘솔창에 "홀수" 출력
// - 힌트) 짝수는 2로 나누어 떨어지는 수이다. 즉, 짝수는 2로 나눈 나머지가 0과 같다.


// step2. (함수 + if-esle 조건문) 짝수인지 판별하는 함수 isEven() 정의하고 호출하기
// - isEven() 함수는 매개변수 x 를 가짐
// - 매개변수 x의 값이 짝수라면, true 반환
// - 매개변수 x의 값이 홀수라면, false 반환

var x;

/*
if(x%2 ==0) {
    console.log("짝수");
}
else {
    console.log("홀수");
}
*/

function isEven(x) {
	// 함수 완성하기
    if(x%2 ==0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(8)); // true
console.log(isEven(7)); // false

// ======================================
// Q. (함수 + if-else if-else 조건문) 색상을 얻는 getColor() 함수 정의하고 호출하기
// - getColor() 함수는 매개변수 sign을 가짐
// - 매개변수 sign의 값이 'go'이면, 'green'을 반환
// - 매개변수 sign의 값이 'slow'이면, 'yellow'를 반환
// - 매개변수 sign의 값이 'stop'이면, 'red'를 반환
function getColor(sign) {
    // 함수 내부 채워주세요
    if(sign == 'go') {
        console.log("green");
    }
    else if(sign == 'slow') {
        console.log("yellow");
    }
    else if(sign == 'stop') {
        console.log("red");
    }
}
console.log(getColor('go')); // green
console.log(getColor('slow')); // yellow
console.log(getColor('stop')); // red


  // ======================================
  // (중첩 조건문)
  // Q.
  // - isValidate 함수는 비밀번호를 의미하는 pw1, pw2 두 개의 매개변수를 가짐
  // - pw1은 길이가 5 이상이라면,
  //      - pw1과 pw2가 같다면, ''비밀번호 일치~' 반환
  //      - pw1과 pw2가 같지 않다면, ''비밀번호 불일치..' 반환
  // - pw1의 길이가 5 미만이라면, '비밀번호는 5자리 이상!!!' 반환
  
  function isValidate(pw1, pw2) {
    // 함수 내부 채워주세요 
    if(pw1.length >= 5) {
        if(pw1 == pw2) {
            console.log("비밀번호 일치");
        }
        else if(pw1 !== pw2) {
            console.log("비밀번호 불일치..")
        }
    }
    else if(pw1.length <5) {
        console.log("비밀번호는 5자리 이상!!!");
    }
  }
  
  // 브라우저 콘솔창 확인 결과
isValidate('1234', '1234'); // '비밀번호는 5자리 이상!!!'
isValidate('12345', '12345'); // '비밀번호 일치~'
isValidate('12345', '12345!!'); // '비밀번호 불일치..'
  
  
  // ======================================
  // Q. 바로 위에 문제에서 조건 추가!!
  // 비밀번호 확인 조건이 추가되었습니다.
  // - pw1은 길이가 5 이상이고 8이 이하라면,
  //      - pw1과 pw2가 같다면, ''비밀번호 일치~' 반환
  //      - pw1과 pw2가 같지 않다면, ''비밀번호 불일치..' 반환
  // - pw1의 길이가 5 미만이거나 8 초과라면, '비밀번호는 5자리 이상 8자리 이하!!!' 반환
  function isValidate2(pw1, pw2)  {
    // 함수 내부 채워주세요 
    if((pw1.length >= 5)&&(pw1.length<=8)) {
        if(pw1 == pw2) {
            console.log("비밀번호 일치~");
        }
        else if(pw1 !== pw2) {
            console.log("비밀번호 불일치..")
        }
    }
    else if((pw1.length <5) || (pw1.length >8)) {
        console.log("비밀번호는 5자리 이상 8자리 이하!!!");
    }
  }
  
  // 브라우저 콘솔창 확인 결과
isValidate2('1234', '1234'); // '비밀번호는 5~8자리만 가능!!!'
isValidate2('123456789', '123456789'); // '비밀번호는 5~8자리만 가능!!!'
isValidate2('12345', '12345'); // '비밀번호 일치~'
isValidate2('12345', '12345!!'); // '비밀번호 불일치..'

//=====================================================
// switch 문
// - 하나 이상의 case문으로 구성
// - default 문이 있는데 필수는 아님 -> 작성 권장
// - break 키워드 : 블록(중괄호, {})을 빠져나갈 때 사용하는 키워드

/*
switch 문의 기본 구조

switch (x) {
  case 값: // if(x === 값)
   // x가 값과 같을 때 실행할 문장
   break; // x가 값과 같을 때의 문장을 실행 -> 블록을 빠져나옴
  case 값2: // if(x === 값2)
   break; // x가 값2와 같을 때의 문장을 실행 -> 블록을 빠져나옴
  default: // else와 비슷함
    // x가 case에 있는 어떤 것과도 일치하지 않았을 때 실행할 문장
    break;
}
*/

let a = 2 + 2;
switch(a) {
    case 3:
        console.log("a보다 작음");
        break;
    case 4:
        console.log("a값과 동일합니다");
        break;
    case 5:
        console.log("a보다 크다");
        break;
    case 6:
        console.log("6이다");
        break;
    default:
        console.log("3, 4, 5 중 하나만 입력");
        break;
}

/* switch를 if문으로 바꾸기
if(a===3) {
    console.log("비교하려는 값보다 작습니다.");
}else if(a ===4) {
    console.log("비교값과 동일");
}
*/

var grade = 'A';

switch(grade) {
    case 'A': 
    console.log("A학점");
    break;
    case 'B': 
    console.log("B학점");
    break;
    case 'C': 
    console.log("C학점");
    break;
    case 'D': 
    console.log("D학점");
    break;
    case 'F': 
    console.log("F학점");
    default:
        console.log("오류가 발생했다.");
}

switch(a) {
    case 1:
    case 2:
    case 3:
        console.log("값이 작다.");
        break;
    case 4:
        console.log("비교값과 동일");
        break;
    default:
        console.log("몰루");
        break;
}
// ============================
// 삼항 연산자
// - 3개의 피연산자를 필요로 함
// 조건식 ? (참일 때 실행할 코드) : (거짓일 때 실행할 코드)

//짝홀 구별
var num = 3;
if(num %2 === 0) {
    console.log("짝수");
}
else {
    console.log("홀수");
}

//짝홀 구별 (ver. 삼항 연산자)
var result = (num %2 == 0) ? "짝수": "홀수";
console.log(result);

//console.log((num%2 == 0) ? "짝수" : "홀수");

console.log(3>1 ? "bigger" : "smaller");

//퀴즈)
var hour = 9;
console.log ((hour /12 >= 1) ? "오후":"오전");