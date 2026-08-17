'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import logoOnLightBg from '@/public/black_logo.png';
import logoOnDarkBg from '@/public/logo.png';
import MobileNav from './MobileNav';
import NavItems from './NavItems';
import { ColorModeToggle } from './ColorModeToggle';

const NavBar = () => {
    const { resolvedTheme } = useTheme();
    const [isOpen, setIsOpen] = React.useState(false);
    const [mounted, setMounted] = React.useState(false);
    // Fixed initial value avoids SSR/client mismatch (`window` only exists on client).
    const [windowWidth, setWindowWidth] = React.useState(1024);

    React.useEffect(() => {
        setMounted(true);
        setWindowWidth(window.innerWidth);
    }, []);

    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth >= 960) setIsOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 720;

    // Before mount, keep dark-theme logo to match defaultTheme + avoid hydration mismatch
    const logoSrc =
        mounted && resolvedTheme === 'light' ? logoOnLightBg : logoOnDarkBg;

    return (
        <header
            role="banner"
            className="fixed z-50 w-full max-w-full border-0 bg-portfolio-nav px-4 py-3 shadow-none backdrop-blur-md backdrop-saturate-100 md:px-6"
        >
            <div className="flex items-center justify-between">
                <Link
                    href="/"
                    className="inline-flex rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent-strong focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg"
                >
                    <Image
                        src={logoSrc}
                        width={32}
                        height={32}
                        className="h-8 w-8"
                        alt="Logo"
                        priority
                    />
                </Link>
                <div className="hidden items-center gap-6 md:flex">
                    <NavItems isMobile={false} />
                    <ColorModeToggle />
                </div>
                <div className="flex items-center gap-2 md:hidden">
                    <ColorModeToggle />
                    {isMobile && (
                        <MobileNav isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default NavBar;
