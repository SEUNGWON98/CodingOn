
//이벤트 (Evnet)
// : 사용자들의 행동에 반응하는 직업
// ex. 클릭, 더블클릭, 폼 제출 등..

// 이벤트 리스너 (Event Listener)
// : 이벤트가 발생했을 때 실행할 함수
// 1. 인라인 방식
// 2. onXX 속성 방식
// 3. addEventListener() 메소드 방식

// 1. 인라인 방식
function showAlert() {
    alert("버튼1 클릭");
}

// 2. 속성(프로퍼티) 방식
let btn2 = document.querySelector('#btn2');
btn2.onclick = function() {
    alert('버튼2 클릭!!!');
}

// 3. addEventListener 메서드 방식
// addEventListener(type, listener)
// ㄴ type : 이벤트 종류 (클릭, 더블 클릭, ...)
// ㄴ listener: 이벤트 발생 시 처리할 함수
let btn3 = document.querySelector('#btn3'); //<button>
btn3.addEventListener('click', function() {
    alert('버튼3 클릭!!!');
});

//==========================연습=====================
// function clicked() {
//     console.log("무야호!");
// }

// let muyaho = document.querySelector("#span2");
// muyaho.onclick = function() {
//     console.log("무야호2!!!");
// }

// let muyaho_3 = document.querySelector("#span3");
// muyaho_3.addEventListener('click', function() {
//     console.log("무야호3!!!!!!!!!!");
// });

// mouseover 이벤트
// function overed() {
//     console.log("무야호!");
// }

// let muyaho = document.querySelector("#span2");
// muyaho.onmouseover = function() {
//     console.log("무야호2!!!");
// }

// let muyaho_3 = document.querySelector("#span3");
// muyaho_3.addEventListener('mouseover', function() {
//     console.log("무야호3!!!!!!!!!!");
// });

// dblclick 이벤트
// function overed() {
//     console.log("무야호!");
// }

// let muyaho = document.querySelector("#span2");
// muyaho.ondblclick = function() {
//     console.log("무야호2!!!");
// }

// let muyaho_3 = document.querySelector("#span3");
// muyaho_3.addEventListener('dblclick', function() {
//     console.log("무야호3!!!!!!!!!!");
// });

function example() {
    alert("function으로 묶기");
}
span1.addEventListener("dblclick", example);
