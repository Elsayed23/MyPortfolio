import React from "react";

const Path = (props) => (
    <path
        fill="transparent"
        strokeWidth="2.5"
        stroke="currentColor"
        strokeLinecap="round"
        {...props}
    />
);

export const MenuToggle = ({ toggle, isOpen }) => (
    <button
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="relative z-[99] flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent text-portfolio-text outline-none transition-colors duration-150 hover:bg-portfolio-surface focus-visible:ring-2 focus-visible:ring-portfolio-accent-strong focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg"
    >
        <svg width="20" height="20" viewBox="0 0 23 18" className={isOpen ? 'ml-0.5' : ''} aria-hidden="true">
            <Path d="M 2 2.5 L 20 2.5" className="top" />
            <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
            <Path d="M 2 16.346 L 20 16.346" className="bottom" />
        </svg>
    </button>
);
