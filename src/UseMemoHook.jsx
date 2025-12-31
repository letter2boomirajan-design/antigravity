import { useMemo, useState } from "react";

export default function UseMemoHook() {
  const [count, setCount] = useState(70);
  const [apple, setApple] = useState([1, 2, 3, 4, 5]);
  const maxApple = () => {
    console.log("we are in array function");
    return Math.max(...apple);
  };
  const memoVal = useMemo(() => maxApple(), [apple]);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <button
        onClick={() => setApple([...apple, Math.round(Math.random() * count)])}
      >
        Increase Apple Count
      </button>
      <div>Counter : {count}</div>
      <div>MaxApple : {memoVal}</div>
      <div>Apple : {JSON.stringify(apple)}</div>
    </>
  );
}
