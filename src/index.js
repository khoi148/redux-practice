import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";

let initialState = {
  count: 0,
};

function countReducer(state = initialState, action) {
  console.log("payload", action.payload);
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
      break;
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
      break;
    case "RESET":
      return {
        count: 0,
      };
      break;
    default:
      return state;
  }
}

const store = createStore(
  countReducer,
  // Hooks up Redux Devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
