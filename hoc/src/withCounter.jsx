import React, { useState, useEffect } from 'react';

const withCounter = (WrappedComponent, permission) => {
    return function WithCounter(props) {
      const [count, setCount] = useState(0);
      const [theme, setTheme ] = useState('light');
      const [ message, setMessage ] = useState('');
  
      const increment = () => {
        setCount(prevCount => prevCount + 1);
      };

      useEffect(() => {
        if (permission === 'admin') {
          setMessage("you are admin");
        }
      }, [permission]); // Only runs when `permission` changes
  
  
      return (
        <WrappedComponent
          count={count}
          increment={increment}
          theme={theme}
          message={message}
          {...props}
        />
      );
    };
  };

  export default withCounter;