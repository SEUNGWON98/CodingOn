import { useState } from "react";

const SyntheticEvent = () => {
  const [text, setText] = useState("초기값");
  const printSyntheticEvent = (e) => console.log(e);

  const setInputValue = (e) => setText(e.target.value); //target은 event에만 사용되는 속성

  const showAlert = () => {
    alert(`input 입력값은 ${text}`);
    setText("");
  };

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      showAlert();
    }
  };
  return (
    <div>
      <button onClick={printSyntheticEvent}>SyntheticEvent확인</button>
      <br />
      <br />
      <input
        type="text"
        placeholder="입력하세요"
        onChange={setInputValue}
        onKeyPress={onKeyPress}
        value={text}
      />

      <button onClick={showAlert}>버튼</button>
    </div>
  );
};

export default SyntheticEvent;
