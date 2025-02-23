const cachedApiCall = (time) => {
    const cache = {};
    return async (url, config = {}) => {
        const key = `${url}${JSON.stringify(config)}`;
        const entry = cache[key];

        // Check if entry is present and not expired
        if (!entry || Date.now() > entry.expiry) {
            console.log("making a fresh API call");

            try {
                let resp = await fetch(url, config);
                resp = await resp.json();
                // Store the response with an expiry time
                cache[key] = { value: resp, expiry: Date.now() + time };
            } catch (e) {
                console.log("Error while making API call", e);
            }
        } else {
            console.log("Using cached data");
        }

        return cache[key]?.value; // Safely return the cached value if it exists
    };
};

const call = cachedApiCall(1500);

// First API call
call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));

// Second API call (after 800ms)
setTimeout(() => {
    call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));
}, 800);

// Third API call (after 1600ms - should trigger fresh API call)
setTimeout(() => {
    call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));
}, 1600);
