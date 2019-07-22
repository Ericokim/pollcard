import React from "react";
import ReactDOM from "react-dom";
import App from "./component/PollCard/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
