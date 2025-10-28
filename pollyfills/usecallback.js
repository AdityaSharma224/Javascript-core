// useCallback returns a memoized version of a callback function that only changes if its dependencies change. 
// This is especially useful when passing functions to child components, preventing unnecessary re-renders.

// You're passing functions to memoized children (React.memo, useMemo, etc.)
// You're setting up event handlers or callback refs
// You're building custom hooks that depend on stable function references

import { useRef } from 'react';

/**
 * Custom hook that mimics React's useCallback behavior.
 * It returns a memoized version of the callback that only changes
 * if the dependencies array changes.
 */
const useCallbackPolyfill = (callback, dependencies) => {
  // useRef stores the last callback and its dependencies
  const ref = useRef({ callback, dependencies });

  // Check if dependencies have changed since the last render
  if (
    !ref.current.dependencies ||
    !areDepsEqual(ref.current.dependencies, dependencies)
  ) {
    // If dependencies changed, update the stored callback and dependencies
    ref.current.callback = callback;
    ref.current.dependencies = dependencies;
  }

  // Return the memoized (cached) callback
  return ref.current.callback;
};

/**
 * Compares two dependency arrays to check if they are shallowly equal.
 * Returns true if each element is strictly equal (===) and arrays are same length.
 */
const areDepsEqual = (oldDeps, newDeps) => {
  return (
    oldDeps.length === newDeps.length &&
    oldDeps.every((dep, i) => dep === newDeps[i])
  );
};

import { useState, useCallback } from 'react';

const Child = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
});

const Parent = () => {
  const [count, setCount] = useState(0);

  // Memoize the callback to prevent re-creation unless dependencies change
  const handleClick = useCallback(() => {
    console.log('Clicked!');
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <Child onClick={handleClick} />
    </>
  );
};


