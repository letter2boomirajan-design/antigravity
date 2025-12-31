import React, { memo } from "react";
function Product({ name, addToCart }) {
  console.log("Product rendering");
  return (
    <>
      <div className="Product">
        <p>{name}</p>
        <button
          onClick={() => {
            addToCart();
          }}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
}

export default memo(Product);
