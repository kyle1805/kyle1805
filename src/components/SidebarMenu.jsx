import React from "react";

const SidebarMenu = React.forwardRef((props, ref) => {
  return (
    <div
      className={`w-[300px] bg-gray-300 shadow-md fixed top-0 left-0 bottom-0 z-10 ease-in-out ${
        props.show ? "" : "-translate-x-full"
      }`}
      ref={ref}
    >
      SidebarMenu
    </div>
  );
});

export default SidebarMenu;
