"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./counter.scss";
import { decrement, increment, selectCount } from "./counterSlice";

const Counter = () => {
  const { count } = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>--</button> &nbsp;
      <button onClick={() => dispatch(increment())}>++</button>
    </>
  );
};

export default Counter;
