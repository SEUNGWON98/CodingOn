console.log("!");

// document 요소 다루기(읽고 쓰기)

// 1. HTML 요소 내용(content)을 읽고 쓰기
let div1 = document.getElementById("div1");
console.log(div1);

// innderHTML 속성
// : 요소 안의 "코드"를 가져오거나 수정
// => 입력된 문자열을 HTML 형식으로!
// 읽기: 요소.innerHTML
// 쓰기: 요소.innerHTML = 수정하려는 태그
console.log(div1.innerHTML); //읽기
div1.innerHTML = '여기는 <b>첫번째 </b> 태그 입니다. &hearts;';

// innderText 속성
// : 요소 안의 "텍스트"를 가져오거나 수정
// => 입력된 문자열을 그대로!!
// 읽기: 요소.innerText
// 쓰기: 요소.innerText = 수정하려는 텍스트
console.log(div1.innerText);
div1.innerText = '여기는 <b>첫번째</b> 태그 입니다. &hearts;'; //쓰기
div1.innerText = '무야호';

// textContent 속성
// : innerText와 마찬가지로 텍스트 정보를 표시
// IE9 이전 버전에서는 사용 불가능
console.log(div1.textContext);
div1.textContent = '안녕하세요!!';

//=======================================================================================
// 2. 속성 접근
// 요소.속성명
let choco = document.getElementById('choco');
console.log(document.getElementById('choco'));
console.log(choco.id); //choco
console.log(choco.src); //이미지경로
console.log(choco.width); //200
console.log(choco.alt); // beach

let google = document.getElementById('google');
console.log(google);
console.log(google.href);

// getAttribute(): 속성값 가져오기
// setAttribute(): 속성값 설정하기
console.log(google.getAttribute('href'));
console.log(google.setAttribute('href', 'https://www.naver.com'));

// 연습
// 이미지 요소
// - 이미지바꾸기
choco.setAttribute('src', './아포가토.jfif');
choco.setAttribute('width', '300px');

// ===============================================================================
// 3. 스타일(css)제어
// : javascript로 css 설정 가능!
// 3-1 인라인 스타일
let h1 = document.querySelector('h1');
// console.log(h1);
// console.log(h1.style);
// console.log(h1.style.fontSize);

// h1.style.color = 'limegreen';
// h1.style.backgroundColor = 'skyblue';
// h1.style.border = '4px solid brown';
// h1.style.textShadow = '2px 2px 10px gray';

let lis = document.querySelectorAll('li');
console.log(lis);

// for(let i = 0; i<lis.length; i++) {
//     console.log(lis[i]);

//     lis[i].style.color = 'rgb(0, 100, 200)';
//     lis[i].style.fontSize = '30px';
//     lis[i].style.backgroundColor = '#ddd';
// }
// for ... of 반복문
// for (let 반복변수 of 배열) {}
// const mylists = ['a', 'b', 'c', 'd'];
// for(let list of mylists) {
//     console.log(list);
// }

// for(let li of lis) {
//     console.log(li);

//     li.style.color = 'rgb(0, 100, 200)';
//     li.style.fontSize = '30px';
//     li.style.backgroundColor = '#ddd';
//     li.style.fontStyle = 'bald';
// }


// 3-2. 클래스 제어 방식
// classList 속성
// - add(클래스명) : 클래스 추가
// - remove(클래스명) : 클래스 삭제
// - toggle(클래스명) : 클래스 있으면 제거, 없으면 추가
// - contains(클래스명) : 해당 클래스가 있는지 boolean 값으로 반환

console.log(h1);
h1.classList.add('header-color');
console.log(h1.classList);

// lis에 저장되어 있는 각각 li요소에 접근해 .li 클래스 추가하기
// 반복문 사용하기
// for(let i = 0; i<lis.length; i++) {
//     lis[i].classList.add('list-style');
// }

for(let li of lis) {
    li.classList.add('list-style');
}

// lis.classList.add('menu'); //오답 cuz lis는 li들을 말하는 것이기 때문에 배열로 선언한다

//remove
h1.classList.remove('title');

//toggle
h1.classList.toggle('happy'); //없어서 추가
h1.classList.toggle('happy'); //있어서 제거

//contains()
console.log(h1.classList.contains('header-color')); //true
console.log(h1.classList.contains('lucky')); //false

//==============================================================================
//계층 이동
//부모, 자식, 형제
const apple = document.querySelector('li');
const fruits = document.querySelector('ul');
console.log(apple);
console.log(fruits);

// 1. 부모노드 찾기
console.log(apple.parentElement); //ul#fruits
console.log(apple.parentElement.parentElement); //body

// 2. 자식 노드 찾기
// 자식 요소는 여러 개
console.log(fruits.children); //li*4
console.log(fruits.children[0]); //0 번째 자식 요소
console.log(fruits.children[1]); //1 번째 자식 요소
console.log(fruits.children[2]); //2 번째 자식 요소
console.log(fruits.children[3]); //3 번째 자식 요소

//부모 -> 자식 -> 부모
console.log(fruits.children[0].parentElement);

// 3. 형제 노드
const lists = document.querySelectorAll('li');
console.log(lists);
const listOrange = lists[2];

console.log(listOrange);
console.log(listOrange.previousElementSibling);
console.log(listOrange.nextElementSibling);

// 연습