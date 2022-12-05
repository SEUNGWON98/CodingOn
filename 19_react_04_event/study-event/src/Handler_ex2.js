import { useState } from "react";

const Handler_Ex2 = () => {
  const [text, setText] = useState("검정색");
  const [color, setColor] = useState("black");

  const redBtn = () => {
    setText("빨간색");
    setColor("red");
  };

  const blueBtn = () => {
    setText("파란색");
    setColor("blue");
  };

  return (
    <div>
      <h1 style={{ color }}>{text}</h1>
      <button onClick={redBtn}>빨간색</button>
      <button onClick={blueBtn}>파란색</button>
    </div>
  );
};

export default Handler_Ex2;
