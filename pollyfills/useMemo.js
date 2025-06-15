//Memoization in React is a technique used to optimize the performance of functional components by caching
//the results of expensive computations or function calls. It's particularly useful when dealing
//with computationally intensive or frequently called functions with the same input values,
//as it helps avoid redundant calculations and improves the overall efficiency of the application.

import { useRef } from "react"; // useRef to persist previous dependencies and computed value across renders.

function useMyMemo(fn, dependency) {
  // store the memoized result and previous dependencies in a ref
  const ref = useRef({ result: null, dependency: [] });

  // Check if any dependency has changed
  if (
    !ref.current.dependency ||
    ref.current.dependency.length !== dependency.length ||
    !ref.current.dependency.every((val, i) => val === dependency[i]) // Check if any dependency has changed by comparing each value
  ) {
    ref.current.result = fn();
    ref.current.dependency = dependency;
  }
  return ref.current.result;
}

import React, { useMemo } from "react";

function App() {
  const [count, setCount] = React.useState(0);
  const [otherState, setOtherState] = React.useState("");

  const expensiveComputation = (num) => {
    let i = 0;
    while (i < 1000000000) i++;
    return num * num;
  };

  const memoizedValue = useMemo(() => expensiveComputation(count), [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Square: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <input type="text" onChange={(e) => setOtherState(e.target.value)} />
    </div>
  );
}

export default App;
