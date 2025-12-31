import { useCallback, useState } from "react";
import Product from "./Product";
export default function UseCallbackHook() {
  const [product, setProduct] = useState(["Laptop", "Mobile"]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <p>Cart : {cart}</p>
      {product.map((item, i) => (
        <Product name={item} key={i} addToCart={addToCart} />
      ))}
    </>
  );
}

switch (key) {
  case value:
    
    break;

  default:
    break;
}