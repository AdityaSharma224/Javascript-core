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

function curryFn(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        return (...nextArgs) => curried(...args, ...nextArgs);
      }
    };
  }
  
  // Normal function
  function sum(a, b, c) {
    return a + b + c;
  }
  
  const curriedSum = curryFn(sum);
  
  console.log(curriedSum(2)(3)(4)); // Output: 9
  console.log(curriedSum(2, 3)(4)); // Output: 9
  console.log(curriedSum(2, 3, 4)); // Output: 9
  

  The curryFn function recursively collects arguments until all required arguments are received.

It supports calling in multiple ways(curriedSum(2)(3)(4) and curriedSum(2, 3, 4)).