// Throttle function to limit how frequently 'func' can be called
function throttle(func, delay) {
  // Store the timestamp of the last function call
  let lastCall = 0;

  // Return a new function that wraps the original 'func'
  return function(...args) {
    // Get the current timestamp
    const now = new Date().getTime();

    // If the time since the last call is less than 'delay', do nothing
    if (now - lastCall < delay) {
      return;
    }

    // Update the timestamp of the last function call
    lastCall = now;

    // Call the original function with the latest arguments
    func(...args);
  };
}

// Example usage: creating a throttled version of a resize event handler
const throttledHandleResize = throttle(handleResize, 200);

// 'handleResize' will now only be called once every 200 milliseconds,
// even if the resize event fires more frequently
