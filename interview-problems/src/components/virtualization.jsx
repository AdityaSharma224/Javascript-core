import React from "react";
import { FixedSizeList as List } from "react-window";

const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`);

const Row = ({ index, style }) => (
  <div style={{ ...style, padding: "10px", borderBottom: "1px solid #ddd" }}>
    {items[index]}
  </div>
);

const VirtualizedList = () => {
  return (
    <div style={{ width: "300px", height: "800px", border: "1px solid #ccc" }}>
      <List
        height={800}
        itemCount={items.length}
        itemSize={40}
        width={300}
      >
        {Row}
      </List>
    </div>
  );
};

export default VirtualizedList;
