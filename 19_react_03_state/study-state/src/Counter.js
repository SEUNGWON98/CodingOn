// 클래스형 컴포넌트에서 state 다루기

import React from "react";

class Counter extends React.Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       number: 0,
  //     };
  //   }
  state = {
    number: 5,
  };

  render() {
    // state 데이터는 this.state로 접근 가능
    const { number } = this.state; //{number: 0}

    return (
      <div>
        <h1>{number}</h1>
        <button onClick={() => alert(number)}>alert</button>
        <button onClick={() => this.setState({ number: 7 })}>
          set Number 7
        </button>
        <button onClick={() => this.setState({ number: number + 1 })}>
          +1
        </button>
      </div>
    );
  }
}

// ====================================화살표 함수==============================

// // 명시적 함수 선언
// function func_name() {
//     return 'something'
// }

// // 함수 표현식
// const variable_name = function () {
//     return 'something'
// }

// // 함수 표현식 간단히 => 화살표 함수
// const f_name = () => {
//     return 'something'
// }

// // 1. 매개변수 지정
// // () => { ... }
// // x => { ... }
// // (x, y) => { ... }

// // 2. 함수 몸체(body)
// // x => { return x * x }
// // x => x * x

// ==============================================================

export default Counter;
