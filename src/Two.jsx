import React, { useState, memo } from "react";

const Two = ({ val }) => {
  console.log("222222222");
  const [count, setCount] = useState(0);
  return (
    <div>
      Two component
      <p>{count}</p>
      <p>Two : {val}</p>
      <button onClick={() => setCount(count + 2)}>Two {count}</button>
    </div>
  );
};

export default memo(Two);
