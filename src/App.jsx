import React, { useState } from "react";
import "./App.css";

// Display Component Function
function Display({ value }) {
  return (
    <input
      className="display"
      type="text"
      value={value}
      disabled
    />
  );
}

// Button Component Function
function Button({ label, className = "", onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default function App() {
  const [display, setDisplay] = useState("0");
  const [operand, setOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [firstOperand, setFirstOperand] = useState("");

  // Handler for number buttons
  const handleNumberClick = (label) => {
    let newOperand = operand;
    if (operand === "" && label === "0") {
      newOperand = "0";
    } else if (operand === "0") {
      newOperand = label;
    } else {
      newOperand = operand + label;
    }
    setOperand(newOperand);
    setDisplay(newOperand);
  };

  // Handler for operator buttons (+, -, *, /)
  const handleOperatorClick = (op) => {
    if (operand !== "") {
      setFirstOperand(operand);
      setOperator(op);
      setOperand("");
      setDisplay(op);
    }
  };

  // Handler for clear button
  const handleClearClick = () => {
    setOperand("");
    setOperator("");
    setFirstOperand("");
    setDisplay("0");
  };

  // Handler for equals button
  const handleEqualsClick = () => {
    if (firstOperand !== "" && operator !== "" && operand !== "") {
      let result = 0;
      const a = parseFloat(firstOperand);
      const b = parseFloat(operand);
      if (operator === "+") {
        result = a + b;
      } else if (operator === "-") {
        result = a - b;
      } else if (operator === "*") {
        result = a * b;
      } else if (operator === "/") {
        if (b === 0) {
          setDisplay("Error");
          setOperand("");
          setOperator("");
          setFirstOperand("");
          return;
        }
        result = a / b;
      }
      setDisplay(result.toString());
      setOperand(result.toString());
      setOperator("");
      setFirstOperand("");
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="header">React Calculator</h1>
        <Display value={display} />
        <div className="buttons">
          <Button label="7" onClick={() => handleNumberClick("7")} />
          <Button label="8" onClick={() => handleNumberClick("8")} />
          <Button label="9" onClick={() => handleNumberClick("9")} />
          <Button label="/" className="operator" onClick={() => handleOperatorClick("/")} />

          <Button label="4" onClick={() => handleNumberClick("4")} />
          <Button label="5" onClick={() => handleNumberClick("5")} />
          <Button label="6" onClick={() => handleNumberClick("6")} />
          <Button label="*" className="operator" onClick={() => handleOperatorClick("*")} />

          <Button label="1" onClick={() => handleNumberClick("1")} />
          <Button label="2" onClick={() => handleNumberClick("2")} />
          <Button label="3" onClick={() => handleNumberClick("3")} />
          <Button label="-" className="operator" onClick={() => handleOperatorClick("-")} />

          <Button label="C" className="clear" onClick={handleClearClick} />
          <Button label="0" onClick={() => handleNumberClick("0")} />
          <Button label="=" className="equal" onClick={handleEqualsClick} />
          <Button label="+" className="operator" onClick={() => handleOperatorClick("+")} />
        </div>
      </div>
    </div>
  );
}