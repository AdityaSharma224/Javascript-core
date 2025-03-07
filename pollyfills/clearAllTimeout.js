// Global array to keep track of all timeout IDs
window.timeoutIds = [];

// Store the original setTimeout function before overwriting it
const originalTimeoutFn = window.setTimeout;

// Overriding the original setTimeout method
window.setTimeout = function (fn, delay) {
  // Call the original setTimeout and store the timeout ID
  const id = originalTimeoutFn(fn, delay);

  // Store the timeout ID in the global array
  timeoutIds.push(id);

  // Return the timeout ID so it can be cleared if needed
  return id;
};

// Function to clear all stored timeouts
window.clearAllTimeout = function () {
  // Loop through the stored timeout IDs and clear them
  while (timeoutIds.length) {
    clearTimeout(timeoutIds.pop());
  }
};

// Scheduling multiple timeouts
setTimeout(() => { console.log("hello"); }, 2000);
setTimeout(() => { console.log("hello1"); }, 3000);
setTimeout(() => { console.log("hello2"); }, 4000);
setTimeout(() => { console.log("hello3"); }, 5000);

// Clear all timeouts before they execute
clearAllTimeout();
