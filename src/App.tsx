import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { numberActions } from "./store/slice/number";

function App() {
  const dispatch = useDispatch();
  const number = useSelector((state: any) => state.number.count);

  const increment = () => {
    dispatch(numberActions.increment())
  };

  const decrement = () => {
    dispatch(numberActions.decrement())
  };

  return (
    <div className="flex flex-col items-center">
      <div>{number}</div>
      <button onClick={()=>increment()}>increment</button>
      <button onClick={()=>decrement()}>decrement</button>
    </div>
  );
}

export default App;
