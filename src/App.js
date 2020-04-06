import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "components/Counter";
import Display from "components/Display";
import Header from "components/Header";

export default function App() {
  return (
    <div className="App">
      <div className="container pt-5 border bg-dark text-light">
        <Header />
        <Counter />
        <Display />
      </div>
    </div>
  );
}
