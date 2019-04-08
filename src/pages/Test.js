import React, { Component } from "react";

class Test extends Component {
  static getDerivedStateFromProps() {
    console.log("test get derived State from Props");
  }

  componentDidMount() {
    console.log("test has mounted");
  }

  componentDidUpdate() {
    console.log("test has updated");
  }

  render() {
    console.log("test is rendering");
    return <div>Test</div>;
  }
}

export default Test;

// consumer 붙이기 전에는 global State가 바뀌어도 아무 라이프 사이클도 렌더되지 않음.
// consumer를 붙였을 땐 prop 값을 아무거나 안쓰는 걸 넣어도 라이프 사이클 다 호출 됨.
