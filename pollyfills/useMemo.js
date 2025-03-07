// Custom implementation of a memoization hook-like function
function useMyMemo(fn, dependencies) {
    // Compute the initial result by calling the provided function
    let result = fn();

    // Store the previous dependencies for comparison
    let prevDependencies = dependencies;

    // Check if any dependency has changed by comparing each value
    if (!dependencies.every((val, i) => val === prevDependencies[i])) {
        // If dependencies change, recompute the result
        result = fn();

// Update previous dependencies to the new ones
