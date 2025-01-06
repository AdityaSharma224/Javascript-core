import React, { useState, useEffect, useCallback } from "react";
import "./style.css";

function DarkLightToogle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div style={{ padding: "20px" }}>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <header>
          <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
          <button onClick={toggleTheme}>
            Switch to {isDarkMode ? "Light" : "Dark"} Mode
          </button>
        </header>
        <p>Welcome to light and dark mode example in React!</p>
      </div>
    </div>
  );
}

export default DarkLightToogle;
