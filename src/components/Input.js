import React, { useEffect, useRef } from "react";

const Input = () => {
  const divRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    console.log(divRef.current);

    if (inputRef.current) inputRef.current.focus();
  }, []);
  console.log(divRef.current);
  return (
    <div className="input-div" ref={divRef}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Auto focus input"
        className="inline-block border border-gray-300 p-5 focus:border-blue-300"
      />
    </div>
  );
};

export default Input;
