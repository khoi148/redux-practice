import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Display() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>This is the Display JS component</h1>
      <div className="">
        <ul>
          <li>This is a List Item</li>
        </ul>
      </div>
    </div>
  );
}
