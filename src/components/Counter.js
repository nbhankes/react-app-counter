import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counterContainer">
      <div className="numScreen">
        <output type="number" className="count">
          {count}
        </output>
      </div>
      <button
        type="add"
        value="+"
        className="btn"
        style={{ flex: "1" }}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <button
        type="subtract"
        value="-"
        className="btn"
        style={{ flex: "1" }}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
