import { useState } from "react";

const Handler_ex3 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <h1>{visible ? "안녕하세요" : ""}</h1>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "사라져라" : "보여져라"}
      </button>
    </div>
  );
};

export default Handler_ex3;
