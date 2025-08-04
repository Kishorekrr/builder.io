import React from 'react';

const Counter = ({ count, setCount }) => {
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <h3 className="counter-title">Counter with products</h3>
      <div className="counter-controls">
        <button className="counter-btn decrement" onClick={decrement}>
          −
        </button>
        <div className="counter-display">{count}</div>
        <button className="counter-btn increment" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
