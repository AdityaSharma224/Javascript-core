import React, { useState, useEffect, useCallback } from "react";

function DebounceCounter() {
  const [count, setCount] = useState(0);

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer); // ensure that any previosuly set timer is cleared before setting a new one
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  const handleOnClick = debounce(() => {
    setCount((counter) => counter + 1);
  }, 1000);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={handleOnClick}>{"Click"}</button>
      <p>
        <strong>Count</strong> {count}
      </p>
    </div>
  );
}

export default DebounceCounter;
