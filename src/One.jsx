import React, { useState, memo } from "react";

const One = ({ val }) => {
  console.log("111111111111");
  const [count, setCount] = useState(0);
  return (
    <div>
      One component
      <p>{count}</p>
      <p>One : {val}</p>
      <button onClick={() => setCount(count + 1)}>One {count}</button>
    </div>
  );
};

export default memo(One);
