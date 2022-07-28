import React, { useEffect, useRef, useState } from "react";

const Watch = () => {
  const timeRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleStart = () => {
    if (timeRef.current) return;
    timeRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  useEffect(() => {
    return () => {
      clearInterval(timeRef.current);
    };
  }, []);
  return (
    <div>
      <h3>Time : {count}</h3>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};

export default Watch;
