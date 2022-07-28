import { useEffect, useRef, useState } from "react";

export default function useClickOutSide(dom = "button") {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropDownRef = useRef(null);

  useEffect(() => {
    function handleClickOut(e) {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setShowDropDown(false);
      }
    }
    document.addEventListener("click", handleClickOut);
    return () => {
      document.removeEventListener("click", handleClickOut);
    };
  }, []);

  return { showDropDown, setShowDropDown, dropDownRef };
}
