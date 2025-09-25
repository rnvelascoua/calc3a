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
function Button({ label, className = "" }) {
  return (
    <button className={className}>
      {label}
    </button>
  );
}

export default function App() {
  const [display] = useState("0");

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="header">React Calculator</h1>
        <Display value={display} />
        <div className="buttons">
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />
          <Button label="/" className="operator" />

          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button label="*" className="operator" />

          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
          <Button label="-" className="operator" />

          <Button label="C" className="clear" />
          <Button label="0" />
          <Button label="=" className="equal" />
          <Button label="+" className="operator" />
        </div>
      </div>
    </div>
  );
}