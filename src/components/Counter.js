import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  let countNum = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="mb-5">
      <h1 className="text-center">{countNum}</h1>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary mr-3"
          onClick={() => dispatch({ type: "INCREMENT", payload: "123456" })}
        >
          Increment
        </button>
        <button
          className="btn btn-primary mr-3"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
        <button
          className="btn btn-primary mr-3"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
        <input
          id="listinput"
          onChange={(e) =>
            dispatch({ type: "LISTCOLOR", payload: e.target.value })
          }
        />
      </div>
    </div>
  );
}
