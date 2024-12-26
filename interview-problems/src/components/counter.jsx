import React, { useState, useCallback } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [changeValue, setChangeValue] = useState(1);
    const [inputValue, setInputValue] = useState('');

    // const debounce = (func, delay) => {
    //     let timer;
    //     return (...args) => {
    //         clearTimeout(timer);
    //         timer = setTimeout(() => {
    //             func(...args);
    //         }, delay);
    //     };
    // };

    // const throttle = (func, limit) => {
    //     let inThrottle;
    //     return (...args) => {
    //         if (!inThrottle) {
    //             func(...args);
    //             inThrottle = true;
    //             setTimeout(() => (inThrottle = false), limit);
    //         };
    //     };
    // };

    const decrement = () => {
        setCount(counter => counter - changeValue);
    };

    const increment = () => {
        setCount(counter => counter + changeValue);
    };

    // const handleDecrement = useCallback(throttle(decrement, 2000), []);

    // const handleIncrement = useCallback(throttle(increment, 2000), []);

    const handleReset = () => {
        setCount(0);
        setInputValue('');
        setChangeValue(1);
    }

    const handleOnChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setInputValue(e.target.value);
        setChangeValue(isNaN(value) ? 1 : value);
    }

    return (
        <div className="Counter">
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '10px' }}>
                <button style={{ marginRight: '10px', padding: '20px', fontSize: '20px' }} onClick={decrement}>{'-'}</button>
                <span style={{ marginRight: '10px', padding: '20px', fontSize: '40px' }}>{count}</span>
                <button style={{ marginRight: '10px', padding: '20px', fontSize: '20px' }} onClick={increment}>{'+'}</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                <input
                    type="text"
                    style={{ marginRight: '10px' }}
                    onChange={handleOnChange}
                    value={inputValue}
                />
                <button onClick={handleReset}>{'Reset'}</button>
            </div>
        </div>
    );
}

export default Counter;
