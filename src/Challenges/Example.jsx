import React, { useState } from "react";

export const ExampleApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <button onClick={increment}>increment</button>
      <p>{count}</p>
    </>
  );
};
