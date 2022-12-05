import React from "react";

class Handler_ex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Hello World",
    };
  }

  ChangeText = () => {
    this.setState({
      text: "Goodbye world",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={this.ChangeText}>변경해볼까~</button>
      </div>
    );
  }
}

export default Handler_ex;
