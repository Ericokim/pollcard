import React, { Component } from "react";
import CheckList from "./Checkbox/CheckBox-List";
// import Logs from "./Logs/logs";

import "./style.scss";

class App extends Component {
  render() {
    return (
      <div className="container">
        <CheckList />
      </div>
    );
  }
}

export default App;
