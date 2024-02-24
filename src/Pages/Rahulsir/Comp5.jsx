import React, { useState, useMemo } from 'react';

function Comp5() {
  const [count, setCount] = useState(1);
  const expensiveFunction = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Result of expensive computation: {expensiveFunction}</p>
      <button onClick={() => setCount(count * 2)}>Increment</button>
    </div>
  );
}

export default Comp5;
