import { useState, useDebugValue } from 'react';

const Counter = (initalValue = 0) => {
    const [ count, setCounter ] = useState(initalValue);
    
    useDebugValue(count > 5 ? "High Count" : "Low Count");

    const increment = () => {
        setCounter(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCounter(prevCount => prevCount - 1)
    }

    return { count, increment, decrement}
}

export default Counter;