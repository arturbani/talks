import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    
    return () => {
      clearInterval(id)
    };
  }, []);


  return <h1>{count}</h1>;
}

export default Counter;
