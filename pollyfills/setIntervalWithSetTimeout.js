function mySetInterval(callback, delay) {
    let timerId;

    function repeat() {
        timerId = setTimeout(() => {
            callback();  // Execute the callback
            repeat();    // Schedule the next execution
        }, delay);
    }

    repeat(); // Start the loop

    return {
        clear: () => clearTimeout(timerId),
    };
}

// Usage example:
const interval = mySetInterval(() => {
    console.log("Hello, every 1 second!");
}, 1000);

// Stop after 5 seconds
setTimeout(() => {
    interval.clear();
    console.log("Interval cleared!");
}, 5000);
