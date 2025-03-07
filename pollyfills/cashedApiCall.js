// Function to create a caching mechanism for API calls
const cachedApiCall = (time) => {
    // Local cache object to store API responses
    const cache = {};  

    // Return an async function that takes `url` and `config` as arguments
    return async (url, config = {}) => {
        // Generate a unique cache key based on URL and config
        const key = `${url}${JSON.stringify(config)}`;
        const entry = cache[key];

        // Check if the cache entry exists and is still valid
        if (!entry || Date.now() > entry.expiry) {
            console.log("Making a fresh API call");

            try {
                let resp = await fetch(url, config); // Make the API request
                resp = await resp.json(); // Convert the response to JSON

                // Store the response in the cache with an expiration time
                cache[key] = { value: resp, expiry: Date.now() + time };
            } catch (e) {
                console.log("Error while making API call", e);
            }
        } else {
            console.log("Using cached data");
        }

        // Return the cached response if available
        return cache[key]?.value;
    };
};

// Create a cached API call function with a 1500ms expiry time
const call = cachedApiCall(1500);

// First API call - should make a fresh request
call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));

// Second API call (after 800ms) - should return cached data
setTimeout(() => {
    call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));
}, 800);

// Third API call (after 1600ms) - should trigger a fresh API request
setTimeout(() => {
    call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));
}, 1600);
