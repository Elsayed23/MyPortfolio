import React from 'react';
import Link from 'next/link';
import SocialLinks from '@/components/ui/SocilaLinks';

const resumeHref = '/ElsayedResume.pdf';

const Hero = () => {
    return (
        <header className="hero-surface relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-4 pb-16 pt-24 md:pb-20 md:pt-20">
            {/* Ambient layers */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.9]"
                aria-hidden
                style={{
                    background: `
            radial-gradient(ellipse 120% 70% at 50% -25%, rgba(167, 139, 250, 0.16), transparent 55%),
            radial-gradient(ellipse 50% 45% at 85% 35%, rgba(139, 92, 246, 0.08), transparent 50%),
            radial-gradient(ellipse 45% 40% at 10% 70%, rgba(167, 139, 250, 0.06), transparent 45%)
          `,
                }}
            />
            <div
                className="hero-grid pointer-events-none absolute inset-0 opacity-[0.4]"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-portfolio-bg"
                aria-hidden
            />

            <div className="content-wrap relative z-[1] mx-auto w-full max-w-3xl text-center">
                <p className="mb-5 inline-flex leading-snug items-center gap-2 rounded-full border border-portfolio-border/80 bg-portfolio-elevated/40 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-portfolio-muted backdrop-blur-sm md:text-[0.7rem]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400/90 motion-reduce:animate-none" />
                    Open to opportunities
                </p>

                <h1 className="mx-auto mb-5 max-w-[18ch] bg-gradient-to-br from-zinc-900 from-20% to-zinc-600 bg-clip-text text-[clamp(2.75rem,10vw,4.25rem)] font-semibold leading-normal tracking-tight text-transparent dark:from-[#fafafa] dark:to-[#a1a1aa] md:max-w-none">
                    Elsayed Kewan
                </h1>

                <p className="mx-auto mb-2 max-w-xl text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-accent md:text-sm">
                    Full Stack Developer · AI automation
                </p>

                <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-portfolio-muted md:mb-12 md:text-lg md:leading-relaxed">
                    Experienced Full Stack Developer specializing in scalable web apps, backend systems, and automation using modern JavaScript and AI-driven solutions. </p>

                <div className="mx-auto mb-12 h-px max-w-xs bg-gradient-to-r from-transparent via-portfolio-border-strong to-transparent" />

                <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
                    <a
                        href={resumeHref}
                        download
                        className="inline-flex min-h-[2.75rem] items-center justify-center rounded-full border border-portfolio-border-strong bg-portfolio-elevated/30 px-7 text-sm font-medium text-portfolio-text backdrop-blur-sm transition-[border-color,background-color,color,box-shadow] duration-200 hover:border-portfolio-accent/50 hover:bg-portfolio-accent-soft hover:text-portfolio-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent-strong focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg"
                    >
                        Download resume
                    </a>
                    <Link
                        href="/#contact"
                        className="inline-flex min-h-[2.75rem] items-center justify-center rounded-full bg-portfolio-accent px-7 text-sm font-semibold text-portfolio-bg shadow-[0_2px_12px_-2px_rgba(124,58,237,0.22)] transition-[transform,box-shadow,background-color] duration-200 hover:bg-portfolio-accent-strong hover:shadow-[0_4px_16px_-4px_rgba(124,58,237,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent-strong focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg motion-reduce:transition-none"
                    >
                        Let&apos;s talk
                    </Link>
                </div>

                <div className="mx-auto flex max-w-md flex-col items-center gap-3">
                    <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-portfolio-muted">
                        Connect
                    </p>
                    <div className="rounded-full border border-portfolio-border/80 bg-portfolio-elevated/35 px-5 py-2.5 backdrop-blur-md">
                        <SocialLinks linkClassName="text-lg md:text-xl" />
                    </div>
                </div>
            </div>

            <div
                className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
                aria-hidden
            >
                <span className="text-[0.6rem] font-medium uppercase tracking-[0.35em] text-portfolio-muted">
                    Scroll
                </span>
                <span className="hero-scroll-line block h-9 w-px bg-gradient-to-b from-portfolio-muted/60 to-transparent motion-reduce:opacity-40" />
            </div>
        </header>
    );
};

export default Hero;
