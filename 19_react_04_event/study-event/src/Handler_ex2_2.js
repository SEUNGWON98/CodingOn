import React from "react";

class Handler_ex2_2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "빨간색",
    };
  }

  render() {
    return (
      <div>
        <h1>검정색</h1>
        <button onClick={redBtn}>빨간색</button>
        <button onClick={blueBtn}>파란색</button>
      </div>
    );
  }
}
