import { useState } from "react";
import Parent from "./Parent";
import Child from "./Child";

export default function ReactMemo() {
  const [parent, setParent] = useState(2);
  const [child, setChild] = useState(3);
  const parentFunction = () => setParent(parent + 1);
  const childFunction = () => setChild(child + 1);
  return (
    <>
      <div>
        <h1>React Memo</h1>
        <button onClick={() => parentFunction()}>Increment Parent</button>
        <button onClick={() => childFunction()}>Increment Child</button>
        <Parent val={parent} />
        <Child val={child} />
      </div>
    </>
  );
}
