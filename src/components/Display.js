import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Display() {
  let stateArray = useSelector((state) => state.array);
  const dispatch = useDispatch();
  console.log("stateArray", stateArray);

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="">
        <ul className="list-group text-dark">
          {stateArray.map((item, index) => {
            return (
              <li className="list-group-item mb-3" style={item.style}>
                <div
                  style={{ width: "240px", height: "70px" }}
                  className="d-flex flex-column align-items-center"
                >
                  <h3>Colorful Box</h3>
                  <input
                    onChange={(e) =>
                      dispatch({
                        type: "ITEMCOLOR",
                        index: index,
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
