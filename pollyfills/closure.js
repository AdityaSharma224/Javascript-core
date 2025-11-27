function secretCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    get: () => count,
  };
}

const counter = secretCounter();
console.log(counter.increment()); // 1
console.log(counter.get());       // 1


// You can't access count directly — only through the returned methods.

function memoize(fn) {
  const cache = {};
  return function(n) {
    if (n in cache) return cache[n];
    cache[n] = fn(n);
    return cache[n];
  };
}

const slowFib = n => (n < 2 ? n : slowFib(n - 1) + slowFib(n - 2));
const fastFib = memoize(slowFib);
console.log(fastFib(40)); // Much faster due to memoization