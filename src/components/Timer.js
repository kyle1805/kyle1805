import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [messege, setMessege] = useState("Kyle Jr");

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(messege);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [messege]);

  return (
    <div>
      <input
        type="text"
        value={messege}
        onChange={(e) => setMessege(e.target.value)}
      />
    </div>
  );
};

export default Timer;
