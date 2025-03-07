// Function to perform a fetch request with a timeout mechanism
const fetchWithTimeout = (url, duration) => {
  return new Promise((resolve, reject) => {
    // Create an AbortController to cancel the fetch request if needed
    const controller = new AbortController();
    const signal = controller.signal; // Extract the signal to pass into fetch
    
    let timerId = null; // Variable to store timeout ID

    // Perform the fetch request with the signal to allow abortion
    fetch(url, { signal })
      .then((resp) => {
        // Convert the response to JSON
        resp.json()
          .then((data) => {
            clearTimeout(timerId); // Clear timeout once the response is received
            resolve(data); // Resolve the promise with fetched data
          })
          .catch((error) => {
            reject(error); // Handle JSON parsing errors
          });
      })
      .catch((error) => {
        reject(error); // Handle fetch errors (e.g., network failure or abort)
      });

    // Set a timeout to abort the fetch request if it exceeds the duration
    timerId = setTimeout(() => {
      controller.abort(); // Abort the fetch request
      reject(new Error("Request timed out")); // Reject the promise with timeout error
    }, duration);
  });
};

// Example usage: Fetch data with a timeout of 100ms
fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 100)
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.error(error);
  });
