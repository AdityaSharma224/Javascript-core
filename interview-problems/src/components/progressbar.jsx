import React, { useState } from "react";
import "./style.css"; // Import the CSS file

const Bar = ({ progress }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%`, color: '#000' }}>
        {progress}%
      </div>
    </div>
  );
};

const ProgressBar = () => {
  const [prog, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };
  return (
    <div style={{ width: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Bar progress={prog} />
      <button onClick={increaseProgress} style={{ marginTop: "20px" }}>Increase Progress</button>
    </div>
  );
};

export default ProgressBar;


// import React from "react";

// const Bar = ({ progress }) => {
//   return (
//     <div style={{ margin: "10px 0", border: "1px solid #ccc", borderRadius: "5px", overflow: "hidden", width: "100%", backgroundColor: "#f3f3f3" }}>
//       <div style={{
//         width: `${progress}%`,
//         backgroundColor: "#4caf50",
//         color: "white",
//         textAlign: "center",
//         padding: "5px 0",
//         transition: "width 0.5s ease"
//       }}>
//         {progress}%
//       </div>
//     </div>
//   );
// };

// const ProgressBar = () => {
//   const progressArray = [10, 30, 50, 70, 90]; // Example array of progress values

//   return (
//     <div style={{ width: "900px", margin: "20px auto", textAlign: "center" }}>
//       {progressArray.map((prog, index) => (
//         <Bar key={index} progress={prog} />
//       ))}
//     </div>
//   );
// };

// export default ProgressBar;