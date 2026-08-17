'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageTransitionShell({ children }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return children;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="relative min-h-0"
        initial={false}
      >
        {children}
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-[999] h-screen w-full origin-top bg-portfolio-bg"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        />
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-[999] h-screen w-full origin-bottom bg-portfolio-bg"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        />
      </motion.div>
    </AnimatePresence>
  );
}
