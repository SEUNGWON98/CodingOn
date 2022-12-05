import "./App.css";
import Counter from "./Counter";
import SayFunction from "./SayFunction";
import CounterFunction from "./CounterFunction";
import Count from "./Count";
import CountFunc from "./CountFunc";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <SayFunction />
      <hr />
      <CounterFunction value="일 더하기" />
      <hr />
      <Count />
      <hr />
      <CountFunc />
    </div>
  );
}

export default App;
