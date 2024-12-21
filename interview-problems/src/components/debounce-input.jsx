import React, { useState, useEffect, useCallback } from "react";

function DebounceInput() {
  const [inputValue, setInputValue] = useState("");
  const [debounceInput, setDebounceInput] = useState("");

  const debounce = (func, delay) => {
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func(...args);
        },delay);
    };
  };

  const updateValue = (value)=>{
    setDebounceInput(value);
  }

  const setDebouncedvalue = useCallback(debounce(updateValue,2000),[]);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setDebouncedvalue(value);
  };
  return (
    <div style={{ padding: "20px" }}>
      <input type="text" onChange={handleOnChange} value={inputValue} />
      <p>
        <strong>normal input</strong> :{inputValue}
      </p>
      <p>
        <strong>debounce input</strong> :{debounceInput}
      </p>
    </div>
  );
}

export default DebounceInput;
