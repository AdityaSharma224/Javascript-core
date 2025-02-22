//Event bubbling is the process where an event propagates from the target element up to its parent elements in the DOM tree. This happens in React just like in plain JavaScript.

import React from "react";

const EventBubblingExample = () => {
  const handleChildClick = (e) => {
    e.stopPropagation(); 
    console.log("Child Clicked!");
  };

  const handleParentClick = (e) => {
    console.log("Parent Clicked!");
  };

  return (
    <div onClick={handleParentClick} style={{ padding: "20px", border: "2px solid blue" }}>
      <button onClick={handleChildClick} style={{ padding: "10px" }}>
        Click Me
      </button>
    </div>
  );
};

export default EventBubblingExample;