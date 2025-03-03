// implement the sum function using closures and recursion to accumulate values until an empty call () is made.

function sum(a) {
    return function (b) {
        if (b !== undefined) {
            return sum(a + b); // Recursively accumulate the sum
        } else {
            return a; // Return the accumulated sum when no argument is passed
        }
    };
}

const sum = (a) => (b) => b !== undefined ? sum(a + b) : a;