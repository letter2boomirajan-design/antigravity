import React, { memo } from "react";

const List = ({ product, addToCart }) => {
  console.log("Product page...");
  return (
    <div>
      <ul>
        {product.map((p, i) => (
          <li key={i}>
            {p}
            <button onClick={addToCart}>addToCart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(List);
