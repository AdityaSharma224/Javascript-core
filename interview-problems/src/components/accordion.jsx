import React, { useState } from "react";

function Accordion() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="Accordion">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px",
          justifyContent: "space-between",
          alignItems: "center",
          height: "80px",
          width: "300px",
          border: "1px solid #000",
          borderRadius: "5px",
        }}
      >
        <h6>{"Accordion"}</h6>
        <button onClick={handleExpand}>
          {isExpanded ? "Close" : "Expand"}
        </button>
      </div>
      {isExpanded && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "0px 10px",
            justifyContent: "space-between",
            alignItems: "center",
            height: "300px",
            width: "300px",
            border: "1px solid #000",
            borderRadius: "5px",
          }}
        ></div>
      )}
    </div>
  );
}

export default Accordion;
