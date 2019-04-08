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
    return <EntryContext.Provider>{this.props.children}</EntryContext.Provider>;
  }
}

export default EntryState;
