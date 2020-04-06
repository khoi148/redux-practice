import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";

let initialState = {
  count: 0,
  array: [],
};

function checkIfTen(stateArray, count) {
  if (count >= 10) {
    stateArray.map((item) => {
      let adjust = { ...item.style };
      adjust.color = "lightblue";
      item.style = adjust;
    });
  } else {
    stateArray.map((item) => {
      let adjust = { ...item.style };
      adjust.color = "black";
      item.style = adjust;
    });
  }
}
/*note one thing about redux. If you mutate an array property,
and set it back to that same array, you are not updating state
since the array reference is the same. The work around is to just
make a new array (which is a diff reference)*/
function countReducer(state = initialState, action) {
  console.log("payload", action.payload);
  console.log("state: ", state);
  let change = state.array.concat(); //copy of the state array

  switch (action.type) {
    case "INCREMENT":
      change.push({
        style: {
          backgroundColor: document.getElementById("listinput").value,
          color: "",
        },
      });
      checkIfTen(change, state.count + 1);
      return {
        count: state.count + 1,
        array: change,
      };
    case "DECREMENT":
      if (state.count > 0) {
        change.pop();
        checkIfTen(change, state.count - 1);
        return {
          count: state.count - 1,
          array: change,
        };
      }
    case "RESET":
      return {
        count: 0,
        array: [],
      };
    case "LISTCOLOR":
      change.map((item) => {
        let adjust = { ...item.style };
        adjust.backgroundColor = action.payload; //payload is value of input box
        //cannot mutate Redux obj directly, must set new obj for state
        item.style = adjust;
      }); //use this just to mutate the array, ignore the return
      return {
        count: state.count,
        array: change,
      };
    case "ITEMCOLOR":
      let adjust = { ...change[action.index].style };
      adjust.backgroundColor = action.payload;
      change[action.index].style = adjust;
      return {
        count: state.count,
        array: change,
      };
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
