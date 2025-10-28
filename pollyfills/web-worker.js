// when the web page is being rendered js executes multiple tasks
// -manipulating DOM
// -managing UI Interface
// -handle api response time

// ellivate the burden on main thread allow the execution of scripts
// in the background on separate thread

import React, { useEffect, useRef } from 'react';

function MyComponent() {
  const workerRef = useRef();

  useEffect(() => {
    // Initialize the worker
    workerRef.current = new Worker('path-to-your-worker-file.js');

    // Handle incoming messages from the worker
    workerRef.current.onmessage = (event) => {
      console.log('Message received from worker:', event.data);
    };

    // Cleanup the worker when the component unmounts
    return () => {
      workerRef.current.terminate();
    };
  }, []);

  // Function to send a message to the worker
  const sendMessageToWorker = (message) => {
    workerRef.current.postMessage(message);
  };

  // Rest of your component
  return (
    // ...
  );
}

// worker.js
self.onmessage = function(event) {
  var input = event.data;
  var result = performHeavyComputation(input);
  postMessage(result);
};

function performHeavyComputation(input) {
  // Insert your heavy computation logic here
  return input *   2; // Just a placeholder operation
}
