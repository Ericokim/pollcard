import React from "react";
import ReactDOM from "react-dom";
import App from "./component/PollCard/App";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import Postreducer from "./component/Reducers/PostReducer";

const store = createStore(Postreducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
