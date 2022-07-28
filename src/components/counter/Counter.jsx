import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const [info, setInfo] = useState({
    FirstName: "Kyle",
    LastName: "Jr",
    age: 22,
  });

  useEffect(() => {
    console.log(`count : ${count}`);
  }, [info.FirstName]);
  return (
    <div className="p-5 flex gap-x-4">
      <input
        type="text"
        name="firstname"
        value={info.FirstName}
        onChange={(e) => setInfo({ ...info, FirstName: e.target.value })}
      />
      <span className="text-2xl font-bold">Counter {count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="inline-block p-3 bg-green-400 text-white"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
