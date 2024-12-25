import React, {useState} from "react";
import "./style.css"; // Import the CSS file

const Bar = ({ progress }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  );
};

const ProgressBar = ({ progress }) => {
  const [prog, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };
  return (
    <div>
      <Bar progress={prog} />
      <button onClick={increaseProgress}>Increase Progress</button>
    </div>
  );
};

export default ProgressBar;
