import React, { useState } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count+1);
  };

  return <>
    <button onClick={() => incrementCounter()}>Increment</button>
    <div>{count}</div>
  </>;
};

export default Counter2;
