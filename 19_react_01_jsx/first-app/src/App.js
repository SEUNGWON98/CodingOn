import "./App.css";
import React from "react";

function App() {
  // const name = "Sean";
  let flag = true;
  let txt = "";

  // =============실습45 =============
  const name = "dolphang";
  const animal = "말티즈";

  let a = 5;
  let b = 4;

  let condition = 3 + 5 == 8;

  if (condition) {
    txt = "정답입니다!";
  } else {
    txt = "오답입니다!";
  }

  // =============여기까지==============

  if (flag) {
    txt = "True입니다.";
  } else {
    txt = "False입니다.";
  }

  const styles = {
    h2: {
      backgroundColor: "blue",
      fontSize: "40px",
      color: "white",
    },
    p: {
      backgroundColor: "red",
      fontSize: "40px",
      color: "white",
    },
  };

  return (
    // JSX 문법
    // 1. 컴포넌트에 여러 요소 있으면 반드시 부모 요소 하나로 감싸야 함!
    <div className="App">
      {/* 2. {} 감싸면 자바스크립트 표현식 사용가능 */}
      {/* 3. styles 속성
        - dom 요소에 스타일 적용시 문자열 x -> "객체" 사용
        - 스타일 이름 중 하이픈(-) 포함시 camelCase 작성해야 함
      */}
      <h2 style={styles.h2}>안뇽 {name}</h2>
      <h2 style={styles.p}>안뇽 {name}</h2>
      <h2
        style={{
          backgroundColor: "blue",
          fontSize: "40px",
          color: "white",
        }}
      >
        안뇽 {name}
      </h2>
      <h2>{name === "Sean" ? "반가워" : "누구..?"}</h2>
      <p>{txt}</p>
      <p>{flag ? <h3>true임</h3> : <h3>false임</h3>}</p>
      <p>{flag && <h3>true 일때만 보이는 메세지</h3>}</p>
      {/* 4. className 사용
        - class 속성이 아닌 className 속성을 사용
      */}
      <h3 className="hello" onClick={() => alert("안녕안녕")}>
        hello~~~~~~
      </h3>
      {/* 5. 종료 태그가 없는 태그의 사용
        - 기존 html 태그에서 종료태그가 없더라도 종료태그를 작성해야 함
        - or self-closing  
        - 잘못된 예) <input>, <br>
        - 올바른 예) <input></input>, <br />
        */}
      {/* 6. 주석
        - //: jsx 외부 주석
        - jsx 내부 주석
      */}

      {/* ========================================실습45===================== */}
      <hr />
      <div>실습45</div>
      <h3>이것은 div 안에 있는 h3태그 입니다</h3>

      <h2>제 반려견 이름은 {name} 입니다</h2>
      <h2>
        {name}은 {animal} 입니다.
      </h2>

      <p>{condition ? <h3>"정답입니다!!"</h3> : <h3>"오답입니다!"</h3>}</p>

      <p>{a > b && <h3>a가 b보다 큽니다</h3>}</p>

      <div className="test">
        <p className="fontColor">Hello World</p>
      </div>
      <form action="">
        <div>
          <label for="loginId">아이디 : </label>
          <input id="loginId" type="id" />
        </div>
        <div>
          <label for="loginPw">비밀번호 : </label>
          <input id="loginPw" type="password" />
        </div>
      </form>

      <hr />

      <div className="rainbow">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>

      <hr />
      <div>실습 46</div>
      <div>
        <div className="size red2">
          <div className="eye">
            <div className="black"></div>
          </div>
        </div>
        <div className="size orange2"></div>
        <div className="size yellow2"></div>
        <div className="size green2"></div>
        <div className="size blue2"></div>
      </div>
    </div>
  );
}

export default App;
