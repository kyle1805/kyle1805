import React, { useEffect, useRef } from "react";
import { useState } from "react";
import useClickOutSide from "../../hook/useClickOutSide";

const DropDown = () => {
  // const [showDropDown, setShowDropDown] = useState(false);
  // const dropDownRef = useRef(null);

  // useEffect(() => {
  //   function handleClickOut(e) {
  //     if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
  //       setShowDropDown(false);
  //     }
  //   }
  //   document.addEventListener("click", handleClickOut);
  //   return () => {
  //     document.removeEventListener("click", handleClickOut);
  //   };
  // }, []);
  const { showDropDown, setShowDropDown, dropDownRef } = useClickOutSide();
  return (
    <div className="relative w-full max-w-[400px]" ref={dropDownRef}>
      <div
        onClick={() => setShowDropDown((showDropDown) => !showDropDown)}
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
      >
        Selected
      </div>
      {showDropDown && (
        <div className="p-5 absolute top-full left-0 w-full border border-gray-200 rounded-lg">
          <div className="py-5 cursor-pointer">Javascript</div>
          <div className="py-5 cursor-pointer">React Js</div>
          <div className="py-5 cursor-pointer">Vue JS</div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
