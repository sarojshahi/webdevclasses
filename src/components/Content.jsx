import { useState, useEffect } from "react";
// HOOKS

import "./Content.css";
const Content = () => {
  const DEFAULT_VALUE = 0;
  const [counter, setCounter] = useState(DEFAULT_VALUE);

  // logic

  const handlePlusButton = (value) => {
    setCounter((previousNumber) => previousNumber + value);
  };
  const handleMinusButton = (value) => {
    setCounter((previousNumber) => previousNumber - value);
  };
  return (
    <div className="content">
      <div>Counter: {counter}</div>
      <span>
        <button onClick={() => handlePlusButton(1)}>1+</button>
      </span>
      <span>
        <button onClick={() => handleMinusButton(2)}>2-</button>
      </span>
    </div>
  );
};

export default Content;
