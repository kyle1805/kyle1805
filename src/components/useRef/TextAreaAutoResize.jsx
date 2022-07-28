import React, { useEffect, useRef, useState } from "react";

const TextAreaAutoResize = () => {
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [textAreaWrapperHeight, setTextAreaWrapperHeight] = useState("auto");
  const handleChangeHeight = (event) => {
    setTextAreaHeight("auto");
    setTextAreaWrapperHeight(`${textAreaRef?.current?.scrollHeight}px`);

    setText(event.target.value);
  };

  useEffect(() => {
    setTextAreaHeight(`${textAreaRef?.current?.scrollHeight}px`);
    setTextAreaWrapperHeight(`${textAreaRef?.current?.scrollHeight}px`);
  }, [text]);
  return (
    <div className="p-5" style={{ minHeight: textAreaWrapperHeight }}>
      <textarea
        onChange={handleChangeHeight}
        ref={textAreaRef}
        value={text}
        style={{ height: textAreaHeight }}
        placeholder="Write what you want ..."
        className="w-full max-w-[400px] transition-all leading-normal overflow-hidden p-5 rounded-lg border border-gray-400 focus:border-orange-400 resize-none"
      ></textarea>
    </div>
  );
};

export default TextAreaAutoResize;
