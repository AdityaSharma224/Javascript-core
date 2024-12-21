import React, { useState, useEffect, useCallback } from "react";

function DebounceExample() {
const [count, setCount] = useState(0);

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleClick = useCallback(
    debounce(() => {
      setCount((prevCount) => prevCount + 1);
    }, 300),
    []
  );

  return (
    <div style={{ padding: '20px' }}>
      <h3>Debounced Button Click</h3>
      <button onClick={handleClick} style={{ padding: '5px 10px' }}>
        Increment Count
      </button>
      <p>
        <strong>Count:</strong> {count}
      </p>
    </div>
  );
}

export default DebounceExample;
