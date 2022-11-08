//반복문
//  1. for 문
//  2. while 문

// for 문
/*
for ( 초기값; 조건식; 증감값 ) {
    //반복할 코드
}
*/
/*
for (let i = 0; i <=5; i++) {
    console.log(i);
}
*/

/*
for(i =1; i<=5; i++) {
    console.log(i);
}

for(i=0; i<5; i++) {
    console.log(i+1);
}
*/
/*
for(i= 5; i>0; i--) {
    console.log(i);
}

for(i=0; i<=10; i++) {
    if(i%2 ===0) {
        console.log(i);
    }
}
*/
/*
for(let i = 2; i<=10; i+=2) {
    console.log(i);
}
*/

/*
let sum = 0;
for(i=1; i<=10; i++) {
    sum+=i;
    if(i ==10) {
        console.log(sum);
    }
}
*/
/*
let sum = 0;
for(let i =0; i<=10; i+=2) {
    sum+= i;
}
console.log(sum);
*/

//==========================================================================
//while 문
/*

while (조건식) {
    //반복할 코드
}
=> 조건식 만족; 블럭({}) 내부 코드 실행
=> 내부 코드 실행 완료 -> 조건식으로 돌아가서 다시 반복 여부 결정
    - if문; 조건실 true; 블록 내부 코드 "1번" 실행
    - while문; 조건식이 true; "계속" 반복
=> 조건식 false; 블록을 빠져나옴 (=반복 종료)

*/

/*
var n =1;
while(n<=5) {
    console.log(n);
    n++;
}
*/
/*
var n = 9;
while(n>=4) {
    console.log(n);
    n--;
}
*/

//case3. 1~10까지 짝수
/*
var i = 2;
while(i<=10) {
    console.log(i);
    i+=2;
}

for(i=2; i<=10; i+=2) {
    console.log(i);
}
// 10~1까지 홀수
var j = 9;
while(j>0) {
    console.log(j);
    j-=2;
}
for(i=9; i>0; i-=2) {
    console.log(i);
}
*/
//무한 루프
// : 반복문에서 조건식의 결과가 항상 참이되어 반복문을 탈출하지 못하는 상태
//의도적으로 무한루프를 만들어서 특정 조건이 만족될 때까지 반복해서 코드를 작성하기도함

/*

while(1) {
    //탈출 조건 만들기
}

*/

//조건문 등을 통해 탈출 조건을 만들고
//break 키워드 -> 블록({})을 빠져나옴

let a = confirm("무야호~~~");

var count = 0;
while(1) {
    if(confirm("무야호~~~") === true) {
        alert(`${count}번째 반복중!`);
        count+=1;
    }
    else{
        break;
    }
}
console.log("탈출 성공");