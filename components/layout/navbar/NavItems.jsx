'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/constants';

const SECTION_IDS = ['about', 'projects', 'contact'];

/**
 * Pixels from viewport top: section “wins” once its top crosses this line.
 * Must clear `scroll-margin-top` on sections (~6rem) + fixed header so #about
 * still reads as active right after in-page navigation.
 */
const SCROLL_TRIGGER_PX = 124;

const navLinkClass = (active) => {
    return [
        'relative text-sm font-medium tracking-wide transition-colors duration-150',
        'text-portfolio-muted hover:text-portfolio-text',
        'after:absolute after:bottom-[-2px] after:left-0 after:h-px after:bg-portfolio-accent after:transition-all after:duration-150',
        active ? 'text-portfolio-text after:w-full' : 'after:w-0 hover:after:w-full',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent-strong focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg rounded-sm',
    ].join(' ');
};

const mobileNavLinkClass =
    'block w-full rounded-sm px-3 py-2 text-base font-medium text-portfolio-muted transition-colors duration-150 hover:bg-portfolio-surface hover:text-portfolio-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-portfolio-accent-strong';

function computeScrollActiveKey() {
    let active = 'home';
    for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= SCROLL_TRIGGER_PX) {
            active = id;
        }
    }
    return active;
}

function sectionIdFromNavUrl(url) {
    if (!url || !url.startsWith('/#')) return null;
    const id = url.slice(2);
    return SECTION_IDS.includes(id) ? id : null;
}

function activeKeyFromPathname(pathname) {
    if (pathname === '/about') return 'about';
    if (pathname === '/projects') return 'projects';
    if (pathname === '/contact') return 'contact';
    return null;
}

function hashToSectionKey(hash) {
    if (!hash || hash === '#') return null;
    const raw = hash.startsWith('#') ? hash.slice(1) : hash;
    return SECTION_IDS.includes(raw) ? raw : null;
}

function isActiveLink(pathname, activeKey, url) {
    const pathKey = activeKeyFromPathname(pathname);
    if (pathKey) {
        if (url === '/#about') return pathKey === 'about';
        if (url === '/#projects') return pathKey === 'projects';
        if (url === '/#contact') return pathKey === 'contact';
        if (url === '/') return false;
        return false;
    }

    if (pathname !== '/') {
        return false;
    }

    if (url === '/') {
        return activeKey === 'home';
    }
    if (url === '/#about') return activeKey === 'about';
    if (url === '/#projects') return activeKey === 'projects';
    if (url === '/#contact') return activeKey === 'contact';
    return false;
}

const NavItems = ({ isMobile, onNavigate }) => {
    const pathname = usePathname();
    const [activeKey, setActiveKey] = React.useState('home');
    const rafRef = React.useRef(0);

    const handleNavLinkClick = React.useCallback(
        (url) => {
            if (url === '/') {
                setActiveKey('home');
                return;
            }
            const id = sectionIdFromNavUrl(url);
            if (id) {
                setActiveKey(id);
                // Next.js client navigation may not fire `hashchange`; re-sync after scroll-into-view.
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        let next = computeScrollActiveKey();
                        // If the anchor stopped just above the trigger band, nudge scroll slightly
                        if (next === 'home' && id) {
                            window.scrollBy(0, 24);
                            next = computeScrollActiveKey();
                        }
                        setActiveKey(next === 'home' && id ? id : next);
                    });
                });
            }
        },
        [],
    );

    React.useLayoutEffect(() => {
        const pathKey = activeKeyFromPathname(pathname);
        if (pathKey) {
            setActiveKey(pathKey);
            return undefined;
        }

        if (pathname !== '/') {
            return undefined;
        }

        const syncFromHash = () => {
            const fromHash = hashToSectionKey(window.location.hash);
            if (fromHash) {
                setActiveKey(fromHash);
                return;
            }
            setActiveKey(computeScrollActiveKey());
        };

        const scheduleTick = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(() => {
                rafRef.current = 0;
                setActiveKey(computeScrollActiveKey());
            });
        };

        syncFromHash();

        window.addEventListener('scroll', scheduleTick, { passive: true });
        window.addEventListener('resize', scheduleTick, { passive: true });
        window.addEventListener('hashchange', syncFromHash);

        return () => {
            window.removeEventListener('scroll', scheduleTick);
            window.removeEventListener('resize', scheduleTick);
            window.removeEventListener('hashchange', syncFromHash);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [pathname]);

    if (isMobile) {
        return (
            <div
                id="mobile-navigation"
                className="fixed bottom-0 left-0 top-0 z-50 w-3/4 -translate-x-full bg-portfolio-elevated pt-20 shadow-[0_0_24px_-4px_rgba(0,0,0,0.12)] dark:shadow-[0_0_28px_-4px_rgba(0,0,0,0.35)] will-change-transform"
            >
                <ul className="flex flex-col gap-0.5 p-4">
                    {navLinks.map((item) => {
                        const active = isActiveLink(pathname, activeKey, item.url);

                        return (
                            <li key={item.id}>
                                <Link
                                    href={item.url}
                                    onClick={() => {
                                        onNavigate?.();
                                        handleNavLinkClick(item.url);
                                    }}
                                    aria-current={active ? 'page' : undefined}
                                    className={`${mobileNavLinkClass} ${
                                        active ? 'bg-portfolio-surface text-portfolio-text' : ''
                                    }`}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    return (
        <ul className="flex items-center gap-8">
            {navLinks.map((item) => {
                const active = isActiveLink(pathname, activeKey, item.url);

                return (
                    <li key={item.id}>
                        <Link
                            href={item.url}
                            onClick={() => {
                                onNavigate?.();
                                handleNavLinkClick(item.url);
                            }}
                            aria-current={active ? 'page' : undefined}
                            className={navLinkClass(active)}
                        >
                            {item.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavItems;
