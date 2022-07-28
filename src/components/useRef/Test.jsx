import React, { useRef, useState } from "react";

const Test = () => {
  //const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const handle = () => {
    const updateCount = countRef.current + 1;
    console.log(`Render ${updateCount}`);
    //setCount(updateCount);
    countRef.current++;
  };
  console.log("render");
  return (
    <div>
      <button onClick={handle}>Click Me {countRef.current}</button>
    </div>
  );
};

export default Test;
