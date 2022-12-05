import "./App.css";
import Button from "./Button";
import ClassComponent from "./ClassComponent";
import FuncComponent from "./FuncComponent";
import Food from "./Food";
import BestSellerFunc from "./BestSellerFunc";
import AppComponent from "./AppComponent";

function App() {
  const my_func = () => {
    console.log("콘솔 띄우기 성공!");
  };
  return (
    <div className="App">
      <ClassComponent name="nananna" students={100} />
      <hr />
      <FuncComponent />
      <FuncComponent name="Super" students={3}></FuncComponent>
      <Button link="https://www.google.com">구글</Button>
      <Button link="https://www.naver.com">네이버</Button>
      <Button />
      <hr />
      <Food />
      <hr />
      <BestSellerFunc />
      <hr />
      <AppComponent valid={my_func} />
    </div>
  );
}

export default App;
