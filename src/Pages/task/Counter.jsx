import { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { FaMinus } from "react-icons/fa6";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="p-4">
      <p>Count: {count}</p>
      <div className="flex items-center space-x-2">
      <FaMinus 
          onClick={decrement} 
          className="cursor-pointer text-white bg-red-500 rounded-full p-2" 
          style={{ width: "30px", height: "30px" }} 
        />
        <CiCirclePlus 
          onClick={increment} 
          className="cursor-pointer text-white bg-red-500 rounded-full p-2" 
          style={{ width: "30px", height: "30px" }} 
        />
     
      </div>
    </div>
  );
}

export default Counter;
