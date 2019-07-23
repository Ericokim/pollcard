import React, { Component } from "react";
import CheckList from "./Checkbox/CheckBox-List";
// import Logs from "./Logs/logs";

import "./style.scss";

const poll = {
  id: 1,
  question: "Save the multiple checkbox values in React js",
  options: [
    {
      id: 1,
      text: "This is my First Sentense",
      count: 10
    },
    {
      id: 2,
      text: "This is my First Sentense",
      count: 5
    },
    {
      id: 3,
      text: "This is my First Sentense",
      count: 15
    },
    {
      id: 4,
      text: "This is my First Sentense",
      count: 23
    }
  ],

  type: "poll",
  responses: 53
};

class App extends Component {
  state = {
    poll: { ...poll }
  };

  handleSubmit = id => {
    const options = this.state.poll.options.map(item => {
      if (item.id === id) {
        item = {
          ...item,
          count: item.count + 1
        };
      }
      return item;
    });

    this.setState({
      poll: {
        ...this.state.poll,
        responses: this.state.poll.responses + 1,
        options
      }
    });
  };

  render() {
    return (
      <div className="container">
        <CheckList poll={this.state.poll} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
