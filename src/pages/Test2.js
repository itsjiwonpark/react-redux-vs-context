import React, { Component } from "react";

class Test2 extends Component {
  static getDerivedStateFromProps() {
    console.log("test2 get derived State from Props");
  }

  componentDidMount() {
    console.log("test2 has mounted");
  }

  componentDidUpdate() {
    console.log("test2 has updated");
  }

  render() {
    console.log("test2 is rendering");
    return <div>Test2</div>;
  }
}

export default Test2;

// consumer 붙이기 전에는 global State가 바뀌어도 아무 라이프 사이클도 렌더되지 않음.
// consumer를 붙였을 땐 prop 값을 아무거나 안쓰는 걸 넣어도 라이프 사이클 다 호출 됨.
