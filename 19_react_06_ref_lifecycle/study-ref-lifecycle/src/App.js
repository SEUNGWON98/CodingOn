import "./App.css";
import RefSample1 from "./RefSample1";
import RefSample2 from "./RefSample2";
import LifeCycleFunc from "./LifeCycleFunc";
import LifeCycleClass from "./LifeCycleClass";
import PostList from "./PostList";

function App() {
  return (
    <div className="App">
      <RefSample1 />
      <br />
      <RefSample2 />
      <br />
      <LifeCycleFunc />
      <br />
      <LifeCycleClass />
      <br />
      <PostList />
    </div>
  );
}

export default App;
