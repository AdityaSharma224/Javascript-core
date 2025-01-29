// Throttling ensures that a function is executed at most once in a specified interval, no matter how many times it is triggered.

import React, { useState, useEffect, useCallback } from "react";

function ThrottleCounter() {
  const [count, setCount] = useState(0);

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

  const increment = () => setCount((counter) => counter + 1);

  const throttleIncrement = useCallback(throttle(increment, 1000), []);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={throttleIncrement}>{"Click"}</button>
      <p>
        <strong>Count</strong> {count}
      </p>
    </div>
  );
}

export default ThrottleCounter;
