import { memo } from "react";

function Child(props) {
  console.log("Child Rendering");
  return (
    <>
      <h1>Child Component {props.val}</h1>
    </>
  );
}

export default memo(Child);
