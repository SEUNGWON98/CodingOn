import "./App.css";
import SyntheticEvent from "./SyntheticEvent";
import NumberTest from "./NumberTest";
import ClassBind from "./ClassBind";
import Handler_ex from "./Handler_ex";
import Handler_ex2 from "./Handler_ex2";
import Handler_ex3 from "./Handler_ex3";

function App() {
  return (
    <div className="App">
      하이요
      <SyntheticEvent></SyntheticEvent>
      <hr />
      <NumberTest />
      <hr></hr>
      <ClassBind />
      <hr />
      <Handler_ex />
      <hr />
      <Handler_ex2 />
      <hr />
      <Handler_ex3 />
    </div>
  );
}

export default App;
