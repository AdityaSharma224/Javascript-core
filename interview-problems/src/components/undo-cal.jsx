import React, { useState } from "react";

const WithUndo = (WrappedComponent) => {
    return function WithUndoWrapper(props) {
        const [history, setHistory] = useState([]);
        const [currentValue, setCurrentValue] = useState(0);

        const performOperation = (newValue) => {
            setHistory((prev) => [...prev, currentValue]);
            setCurrentValue(newValue);
        };

        const undo = () => {
            if (history.length > 0) {
                setCurrentValue(history[history.length - 1]);
                setHistory((prev) => prev.slice(0, -1));
            }
        };

        const undoToIndex = (index) => {
            if (index >= 0 && index < history.length) {
                setCurrentValue(history[index]);
                setHistory((prev) => prev.slice(0, index));
            }
        };

        return (
            <WrappedComponent
                value={currentValue}
                onPerformOperation={performOperation}
                onUndo={undo}
                onUndoToIndex={undoToIndex}
                history={history}
                {...props}
            />
        );
    };
};


const Calculator = ({ value, onPerformOperation, onUndo, onUndoToIndex, history }) => {
    const handleOperation = (operation) => {
        const input = parseFloat(prompt("Enter a number:"));
        if (!isNaN(input)) {
            let newValue = value;
            switch (operation) {
                case "+":
                    newValue += input;
                    break;
                case "-":
                    newValue -= input;
                    break;
                case "*":
                    newValue *= input;
                    break;
                case "/":
                    newValue /= input;
                    break;
                default:
                    return;
            }
            onPerformOperation(newValue);
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2>Calculator with Undo</h2>
            <p>Current Value: <strong>{value}</strong></p>
            <button onClick={() => handleOperation("+")}>+ Add</button>
            <button onClick={() => handleOperation("-")}>- Subtract</button>
            <button onClick={() => handleOperation("*")}>* Multiply</button>
            <button onClick={() => handleOperation("/")}>/ Divide</button>
            <button onClick={onUndo} disabled={history.length === 0}>Undo</button>

            {history.length > 0 && (
                <div>
                    <p>History:</p>
                    {history.map((val, index) => (
                        <button key={index} onClick={() => onUndoToIndex(index)}>
                            Undo to {val}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};


const UndoCalculator = () => {
    const UndoableCalculator = WithUndo(Calculator);

    return (
        <UndoableCalculator />
    );
};

export default UndoCalculator;