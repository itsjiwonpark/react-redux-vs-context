import React, { Component } from "react";
import EntryContext from "./entry-context";
import getUser from "../api";

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
    return <EntryContext.Provider>{this.props.children}</EntryContext.Provider>;
  }
}

export default EntryState;
