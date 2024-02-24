import React, { useState, useCallback } from 'react';

const Comp3 = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
};

const ChildComponent = ({ handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
};

export default Comp3;
