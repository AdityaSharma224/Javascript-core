// The useReducer hook is a state management hook in React that provides an alternative to the useState hook. It is used when the state of a component is complex and requires more than one state variable.

import React, { useState, useEffect, useCallback, useReducer } from "react";

function UseReducerComponent() {
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const throttle = (func, limit) => {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  const initialValue = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "add":
        return state + 1;
      case "subtract":
        return state - 1;
      case "reset":
        return 0;
      default:
        throw new Error("Unexpected array");
    }
  };
  const [count, dispatch] = useReducer(reducer, initialValue);

  const debounceDispatch = useCallback(throttle(dispatch, 2000), []);
  return (
    <div style={{ padding: "20px" }}>
      <h2>{count}</h2>
      <button onClick={() => debounceDispatch("add")}>add</button>
      <button onClick={() => debounceDispatch("subtract")}>subtract</button>
      <button onClick={() => debounceDispatch("reset")}>reset</button>
    </div>
  );
}

export default UseReducerComponent;
