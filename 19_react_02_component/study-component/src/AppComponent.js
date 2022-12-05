import React from "react";
import PropTypes from "prop-types";

class AppComponent extends React.Component {
  render() {
    const { text, valid } = this.props;

    return (
      <>
        <h1>{text}</h1>
        <button onClick={valid}>콘솔 메세지</button>
      </>
    );
  }
}

AppComponent.defaultProps = {
  text: "App 컴포넌트에서 넘겨준 text props 입니다.",
};

AppComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AppComponent;
