'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { HiMoon, HiSun } from 'react-icons/hi2';

/**
 * Theme toggle for the navbar. Uses a stable aria-label and `suppressHydrationWarning`
 * so SSR/client stay aligned with `next-themes` (resolvedTheme can differ per environment).
 */
export function ColorModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      suppressHydrationWarning
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-portfolio-border/80 bg-portfolio-elevated/40 text-portfolio-text backdrop-blur-sm transition-[background-color,border-color,color] duration-150 hover:border-portfolio-border-strong hover:bg-portfolio-accent-soft hover:text-portfolio-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent-strong focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg"
      aria-label="Toggle color theme"
    >
      {mounted ? (
        isDark ? (
          <HiSun className="h-[1.125rem] w-[1.125rem]" aria-hidden />
        ) : (
          <HiMoon className="h-[1.125rem] w-[1.125rem]" aria-hidden />
        )
      ) : (
        <span className="h-[1.125rem] w-[1.125rem]" aria-hidden />
      )}
    </button>
  );
}
