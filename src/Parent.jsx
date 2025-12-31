import { memo } from "react";

function Parent(props) {
  console.log("Parent Rendering");
  return (
    <>
      <h1>Parent Component {props.val}</h1>
    </>
  );
}

export default memo(Parent);
