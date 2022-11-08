function addNode() {
    // alert("버튼을 눌럿네여");
    let div = document.getElementById("div1");
    //요소 생성하기
    //createElement()
    let p = document.createElement('p'); //p 태그 생성
    p.innerText = "버튼을 눌러 만들어진 p태그";
    p.style.fontWeight = "800";
    p.classList.add('append-p');

    // div.appendChild(p);
    // div.append("1번 추가");
    // div.append(p, "2번 추가");

    div.append(p);

}

function removeNode() {
    // alert("삭제 버튼 클릭");
    let div= document.querySelector("#div1");
    let p = document.querySelector("#div1 > p");

    // div.removeChild(p);
    p.remove();
}

//노드 생성/추가/삭제
// 1. 노드 생성
// createElenment()

// 2. 노드 추가
// appendChild(): 노드 객체만 추가, 한 번에 한 개
// append(): 노드 객체 or 텍스트 추가, 한 번에 여러 개 가능

// 3. 노드 삭제
// 부모노드 .removeChild(자식노드): 부모요소의 자식노드를 삭제
// 노드 .remove(): "선택한 요소"를 삭제

// ==============================================
let ul = document.querySelector(".fruits");
let li = document.createElement("li");
li.innerText = "오렌지";

ul.append(li);

// ==========================================================
let container = document.querySelector(".container");
let img = document.createElement("img"); //<img>
img.setAttribute('src', '아포가토.jfif'); //<img src> 추가
img.setAttribute('alt', '아포가토'); // img alt속성
let title = document.createElement('div'); // <div></div>
title.innerText = "배고픕니다."; //

let second = document.querySelector(".second");
let img_2 = document.createAttribute("img");
img.setAttribute("src", "아포가토.jfif");
let letter = document.createElement('div');
letter.innerText = "한 개 더 추가";

container.append(img);
container.append(title);