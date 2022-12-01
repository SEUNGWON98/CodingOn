// 컴포넌트 이름 형식 = PascalCase
import React from "react";
import PropTypes from "prop-types";

class ClassComponent extends React.Component {
  // 클래스형 컴포넌트 render() 필수
  render() {
    console.log(this.props);
    const { name, students } = this.props; //{ name}

    const teacher = "Seo";

    // JSX 리턴
    return (
      <>
        <h1>Hello, {teacher}</h1>
        <p>여기는 Class Component!</p>
        <p>
          {this.props.name} 수업시간! 학생수는 {this.props.students}명입니다.
        </p>
      </>
    );
  }

  //   static defaultProps = {
  //     name: "무야호",
  //   };

  //   static propTypes = {
  //     name: PropTypes.string,
  //     students: PropTypes.number.isRequired,
  //   };
}

ClassComponent.defaultProps = {
  name: "무야호",
  students: PropTypes.number.isrequired,
};

export default ClassComponent;
