import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0); // in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (t) => {
    const mins = String(Math.floor(t / 60)).padStart(2, '0');
    const secs = String(t % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-2">Stopwatch</h2>
      <div className="text-3xl mb-4">{formatTime(time)}</div>
      <div className="space-x-2">
        <button onClick={start} className="bg-green-500 text-white px-4 py-2 rounded">Start</button>
        <button onClick={pause} className="bg-yellow-500 text-white px-4 py-2 rounded">Pause</button>
        <button onClick={reset} className="bg-red-500 text-white px-4 py-2 rounded">Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
