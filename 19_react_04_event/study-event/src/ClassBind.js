import React from "react";

class ClassBind extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "KDT3rd",
    };

    // this.printConsole = this.printConsole(this);
  }

  //blind가 귀찮다면 화살표 함수로 해결이 가능하다
  printConsole() {
    console.log(">>>>", this.state);
  }

  render() {
    return (
      <div>
        <button onClick={this.printConsole}>printConsole</button>
      </div>
    );
  }
}

export default ClassBind;
