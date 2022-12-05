import { useState } from "react";

const Event_ex = () => {
  const [name, setName] = useState([
    { id: 1, user: "코디", email: "codi@gmail.com" },
    { id: 2, user: "윤소희", email: "yoonsohee@gmail.com" },
  ]);

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [nextId, setNextId] = useState(3);

  const addName = () => {
    const newName = name.concat({
      user: inputName,
      email: inputEmail,
      id: nextId,
    });

    setNextId(nextId);
    setName(newName);
    setInputName("");
    setInputEmail("");
  };

  const deleteInfo = (id) => {
    console.log(id);
    const result = name.filter((a) => a.id !== id);
    setName(result);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <input
        type="text"
        placeholder="이메일"
        value={inputEmail}
        onChange={(i) => setInputEmail(i.target.value)}
      />
      <button onClick={addName}>등록</button>
      {/* <button onClick={addEmail}>등록2</button> */}

      {name.map((a) => {
        return (
          <div
            key={a.id}
            onDoubleClick={() => {
              deleteInfo(a.id);
            }}
          >
            {a.user} : {a.email}
          </div>
        );
      })}
    </div>
  );
};

export default Event_ex;
