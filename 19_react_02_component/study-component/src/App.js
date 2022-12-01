import "./App.css";
import Button from "./Button";
import ClassComponent from "./ClassComponent";
import FuncComponent from "./FuncComponent";

function App() {
  return (
    <div className="App">
      <ClassComponent name="nananna" students={100} />
      <hr />
      <FuncComponent />
      <FuncComponent name="Super" students={3}></FuncComponent>
      <Button link="https://www.google.com">구글</Button>
      <Button link="https://www.naver.com">네이버</Button>
      <Button />
    </div>
  );
}

export default App;
