// Event delegation is a pattern where you attach a single event listener to a parent element instead of adding listeners to each child element. The event propagates (bubbles up), allowing you to handle it at the parent level.

// import React, { useState } from "react";

// const WithoutEventDelegation = () => {
//   const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

//   return (
//     <div>
//       {items.map((item, index) => (
//         <button key={index} onClick={() => console.log(item)}>
//           {item}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default WithoutEventDelegation;

import React, { useState } from "react";

const WithEventDelegation = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const handleClick = (event) => {
    if (event.target.tagName === "BUTTON") {
      console.log("Clicked:", event.target.textContent);
    }
  };

  return (
    <div onClick={handleClick}>
      {items.map((item, index) => (
        <button key={index}>{item}</button>
      ))}
    </div>
  );
};

export default WithEventDelegation;