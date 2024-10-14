import React, { useState } from "react";


export default function Counters () {
  const [value, setValue] = useState(0);

  
  const increment = () => {
    setValue(value+ 1);
  };

 
  const decrement = () => {
    setValue(value-1);
  };

  return (
    <div>
      <h4>Counter Value: {value}</h4>
      <Counter increment={increment} decrement={decrement} />
    </div>
  );
}

const Counter = ({ increment, decrement }) => {
  return (
    <div>
      <button onClick={increment}>Increment+</button>
      <button onClick={decrement}>Decrement-</button>
    </div>
  );
};
