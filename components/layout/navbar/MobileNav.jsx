'use client';

import { useEffect } from "react";
import { useAnimate, stagger, useReducedMotion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import NavItems from "./NavItems";
import React from 'react'

function useMenuAnimation(isOpen, prefersReducedMotion) {
  const [scope, animate] = useAnimate();
  const duration = prefersReducedMotion ? 0.05 : 0.5;
  const staggerDelay = prefersReducedMotion ? 0 : 0.05;

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
        [
          "div",
          { transform: "translateX(0%)" },
          { ease: [0.08, 0.65, 0.53, 0.96], duration }
        ],
        [
          "li",
          { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
          { delay: stagger(staggerDelay), at: "-0.1" }
        ]
      ]
      : [
        [
          "li",
          { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
          { delay: stagger(staggerDelay, { from: "last" }), at: "<" }
        ],
        ["div", { transform: "translateX(-100%)" }, { at: "-0.1" }]
      ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" }
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" }
      ],
      ...menuAnimations
    ]);
  }, [isOpen, animate, duration, staggerDelay]);

  return scope;
}

const MobileNav = ({ isOpen, setIsOpen, isMobile }) => {
  const prefersReducedMotion = useReducedMotion();
  const scope = useMenuAnimation(isOpen, Boolean(prefersReducedMotion));

  return (
    <div ref={scope}>
      <NavItems isMobile={isMobile} onNavigate={() => setIsOpen(false)} />
      <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
    </div>
  );
}

export default MobileNav
