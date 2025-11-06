import React, { useRef, useState, useEffect } from "react";

// useRef is a React Hook that creates a mutable reference to store values without causing re-renders. It is commonly used for:
// ✅ Accessing DOM elements
// ✅ Persisting values across renders without re-rendering
// ✅ Storing previous values

// The useRef hook allows you to persist values between 
// renders without triggering a re-render. Whether you’re 
// dealing with DOM manipulation, storing previous values,
// or managing timers, useRef is an efficient solution.

// The useRef allows to directly create a reference to the DOM element in the functional component.

// The main use of useRef hook is to access the DOM elements 
// in a more efficient way as compared to simple refs. 
// Since useRef hooks preserve value across various re-renders 
// and do not cause re-renders whenever a value is changed they 
// make the application faster and helps in caching and storing previous values

// function useRefComponent() {
//     const [count, setCount] = React.useState(0);
//     const prevCountRef = useRef();

//     React.useEffect(() => {
//         prevCountRef.current = count;
//     }, [count]);

//     return (
//         <div>
//             <p>Current count: {count}</p>
//             <p>Previous count: {prevCountRef.current}</p>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//         </div>
//     );
// }

// export default useRefComponent;


// import React, { useState, useRef, useEffect } from 'https://esm.sh/react@18.2.0'
// import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const useRefComponent = () => {
    const [count, setCount] = useState(0);
    const [start, setStart] = useState(false);
    const timerIdRef = useRef(null);

    useEffect(() => {
        if (start) {
            timerIdRef.current = setTimeout(() => {
                setCount(count + 1);
            }, 1000);
        }

        return () => {
            clearTimeout(timerIdRef.current);
        }
    }, [count, start])

    const onStart = () => {
        setStart(true);
    };

    const onStop = () => {
        clearTimeout(timerIdRef.current);
        setStart(false);
    };


    return (
        <div className="box">
            <h1>Count: {count}</h1>
            <button onClick={onStart}>Start</button>
            <button onClick={onStop}>Stop</button>
        </div>
    );
}
export default useRefComponent;

// ReactDOM.render(<App />,
// document.getElementById("root"))