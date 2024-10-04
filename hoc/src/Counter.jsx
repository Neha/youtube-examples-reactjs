import React from "react";
import withCounter from './withCounter';

const Counter = ({count, increment, theme , message}) => {

  return <div style={theme === 'dark' ? { backgroundColor: 'red'} : { backgroundColor: 'green'}}>
    <button onClick={() => increment()}>Increment</button>
    <div>{count}</div>
    <p>{theme}</p>
    <p>{message}</p>
  </div>;
};

const CounterWrap = withCounter(Counter, "admin");
export default CounterWrap;
