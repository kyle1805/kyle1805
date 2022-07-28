import { useEffect, useRef, useState } from "react";

export default function useHover() {
  const [hoverred, setHoverred] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    function handleMouseOver() {
      setHoverred(true);
    }
    function handleMouseOut() {
      setHoverred(false);
    }
    const dom = nodeRef.current;
    if (dom) {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      if (dom) {
        dom.removeAddEventListener("mouseover", handleMouseOver);
        dom.removeAddEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);
  return {
    hoverred,
    nodeRef,
  };
}
