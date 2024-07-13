import React from "react";

const Path = (props) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="#fafafa"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle, isOpen }) => (
  <button onClick={toggle} className="outline-none border-none cursor-pointer w-12 h-12 rounded-full flex justify-center items-center relative z-[99] bg-blue-gray-900 ">
    <svg width="23" height="23" viewBox="0 0 23 18" className={`${isOpen ? 'ml-[2.8px]' : 'm-0'}`}>
      <Path
        d="M 2 2.5 L 20 2.5"
        className="top"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
      <Path
        d="M 2 16.346 L 20 16.346"
        className="bottom"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);
