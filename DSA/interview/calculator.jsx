class Calculator {
    constructor() {
      this.history = [];
      this.currentValue = 0;
    }
  
    performOperation(operation, number) {
      this.history.push(this.currentValue);
  
      switch (operation) {
        case "+":
          this.currentValue += number;
          break;
        case "-":
          this.currentValue -= number;
          break;
        case "*":
          this.currentValue *= number;
          break;
        case "/":
          if (number !== 0) {
            this.currentValue /= number;
          } else {
            console.log("Cannot divide by zero");
          }
          break;
        default:
          console.log("Invalid operation");
          return;
      }
  
      console.log(`Result: ${this.currentValue}`);
    }
  
    undo() {
      if (this.history.length > 0) {
        this.currentValue = this.history.pop();
        console.log(`Undo: ${this.currentValue}`);
      } else {
        console.log("No history to undo");
      }
    }
  
    undoToIndex(index) {
      if (index >= 0 && index < this.history.length) {
        this.currentValue = this.history[index];
        this.history = this.history.slice(0, index);
        console.log(`Undo to index ${index}: ${this.currentValue}`);
      } else {
        console.log("Invalid index");
      }
    }
  
    getCurrentValue() {
      return this.currentValue;
    }
  
    getHistory() {
      return this.history;
    }
  }
  
  // Example Usage
  const calc = new Calculator();
  calc.performOperation("+", 3); // 3
  calc.performOperation("+", 4); // 7
  calc.performOperation("*", 2); // 14
  console.log("History:", calc.getHistory()); // [0, 3, 7]
  
  calc.undo(); // 7
  calc.undo(); // 3
  calc.undo(); // 0
  calc.undo(); // No history to undo
  
  // Resetting the calculator and trying direct undo
  calc.performOperation("+", 5); // 5
  calc.performOperation("*", 3); // 15
  calc.performOperation("-", 2); // 13
  
  calc.undoToIndex(0); // Undo to 5
  console.log("Final Value:", calc.getCurrentValue()); // 5
  