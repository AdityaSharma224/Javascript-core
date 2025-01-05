import React, { useRef, useState } from "react";
//The useRef hook allows you to persist values between renders without triggering a re-render. Whether you’re dealing with DOM manipulation, storing previous values, or managing timers, useRef is an efficient solution.

//The useRef allows to directly create a reference to the DOM element in the functional component.

//The main use of useRef hook is to access the DOM elements in a more efficient way as compared to simple refs. Since useRef hooks preserve value across various re-renders and do not cause re-renders whenever a value is changed they make the application faster and helps in caching and storing previous values

function useRefComponent() {
    const [count, setCount] = React.useState(0);
    const prevCountRef = useRef();

    React.useEffect(() => {
        prevCountRef.current = count;
    }, [count]);

    return (
        <div>
            <p>Current count: {count}</p>
            <p>Previous count: {prevCountRef.current}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default useRefComponent;
