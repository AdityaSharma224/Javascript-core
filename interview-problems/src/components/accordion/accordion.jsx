import React, { useMemo, useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = useMemo(
    () => [
      {
        title: "Zomato",
        content: "Online ordering business",
      },
      {
        title: "CAST",
        content: "MRI for software",
      },
      {
        title: "Contlo",
        content: "AI native marketing",
      },
      {
        title: "GeeksforGeeks",
        content: "Data Structures and Algorithms",
      },
    ],
    []
  );

  const handleToogle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      style={{
        padding: "8px",
        width: "100%",
        margin: "auto",
        maxWidth: "400px",
      }}
    >
      {items.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              backgroundColor: "#fff",
            }}
          >
            <button
              style={{
                width: "100%",
                textAlign: "left",
                padding: "10px 20px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "16px",
                border: "none",
                transition: "backgroundColor 0.3s ease",
              }}
              onClick={() => handleToogle(index)}
            >
              {item.title}
            </button>
            {openIndex === index && (
              <div
                style={{
                  padding: "10px 20px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  border: "1px solid #E6E9Ef",
                  transition: "backgroundColor 0.3s ease",
                }}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
