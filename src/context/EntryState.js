import React, { Component } from "react";
import EntryContext from "./entry-context";
import getUser from "../api";
import Test2 from "../pages/Test2";

class EntryState extends Component {
  state = {
    user: ""
  };

  componentDidMount() {
    getUser().then(data => {
      this.setState({
        user: data
      });
    });
  }

  render() {
    console.log("entry is rendering");
    return (
      <EntryContext.Provider>
        <Test2 />
        {this.props.children}
      </EntryContext.Provider>
    );
  }
}

export default EntryState;
