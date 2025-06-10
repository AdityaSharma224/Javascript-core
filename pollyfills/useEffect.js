The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments.

import { useEffect, useRef } from 'react';
import isEqual from 'lodash.isequal'; // Use lodash for deep comparison

function useCustomEffect(fn, deps) {
  const cleanupRef = useRef();
  const prevDepsRef = useRef();

  useEffect(() => {
    // Compare previous and current dependencies
    if (prevDepsRef.current && isEqual(prevDepsRef.current, deps)) {
      return; // Dependencies unchanged, skip effect
    }

    prevDepsRef.current = deps;

    if (cleanupRef.current) {
      cleanupRef.current(); // Run cleanup of previous effect
    }

    const cleanup = fn(); // Run the new effect
    if (typeof cleanup === 'function') {
      cleanupRef.current = cleanup;
    }
  }, [deps]);
}


React Class Component Lifecycle Methods
Class components in React have lifecycle methods that can be grouped into three phases:

1️⃣ Mounting (Component Creation & Insertion)
These methods run when the component is first added to the DOM.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  render() {
    console.log("Render");
    return <h1>Cou nt: {this.state.count}</h1>;
  }
}

------------------------------------------------------------

2️⃣ Updating (Re-rendering on State/Props Change)
These methods run when props or state change.

class MyComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count !== this.state.count; // Prevents unnecessary re-renders
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Updated");
  }
}

-------------------------------------------------------------

3️⃣ Unmounting (Component Removal)
These methods run when the component is removed from the DOM.

class MyComponent extends React.Component {
  componentWillUnmount() {
    console.log("Component Will Unmount");
  }
}

--------------------------------------------------------------

4️⃣ Error Handling (Handling Crashes)
Used to catch errors in child components.

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>;
    }
    return this.props.children;
  }
}

