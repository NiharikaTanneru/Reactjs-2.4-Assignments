import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,incrementByAmount,decrementByAmount } from "./redux/counter";
import './App.css';

export default function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> Count: {count}</h1>
      <button className="btn btn-warning me-3" onClick={() => dispatch(increment())}>Increment</button>
      <button className="btn btn-danger me-3" onClick={() => dispatch(decrement())}>Decrement</button>
      <button className="btn btn-warning me-3" onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
      <button className="btn btn-danger me-3" onClick={()=>dispatch(decrementByAmount(2))}>
        Decrement by 2</button>
    </div>
  );
}

