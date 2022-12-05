import { useEffect, useState } from "react";

// 자식 컴포넌트
const MyComponent = (props) => {
  const { number } = props;
  const [text, setText] = useState("");

  useEffect(() => {
    // mount 시점에 실행
    console.log("moooooooooooooooooount");

    // unmount 시점에 실행
    // : effect 함수에서 함수를 리턴할 때
    return () => {
      console.log("x unmount!");
    };
  }, []); //빈 배열을 넣었기 때문에 mount 될때만 console찍음

  useEffect(() => {
    console.log("Updateeeeeeeeeeeeeeeee!");
  });

  //
  useEffect(() => {
    console.log("onlt text state update");
  }, [text]);

  return (
    <>
      <p>MyComponent {number}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

const LifeCycleFunc = () => {
  const [number, setNumber] = useState(3);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => {
    setNumber(number + 1);
  };

  const changeVisibleState = () => {
    setVisible(!visible);
  };
  return (
    <>
      <h3>함수형 컴포넌트에서 LifeCycle 이해하기</h3>
      <button onClick={changeNumberState}>PLUS</button>
      <button onClick={changeVisibleState}>ON/OFF</button>
      {visible && <MyComponent number={number} />}
    </>
  );
};

export default LifeCycleFunc;
