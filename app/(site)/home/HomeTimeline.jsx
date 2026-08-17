import React from 'react';
import Link from 'next/link';
import TimelineList from '@/components/experience/TimelineList';
import SecTitle from '@/components/ui/SecTitle';
import { timelineData } from '@/constants/timeline';

const PREVIEW_COUNT = 3;

const HomeTimeline = () => {
    const previewEntries = timelineData.slice(0, PREVIEW_COUNT);
    const hasMore = timelineData.length > PREVIEW_COUNT;

    return (
        <section
            className="border-t border-portfolio-border/50 bg-portfolio-bg py-[var(--section-py)]"
            aria-labelledby="home-timeline-heading"
        >
            <div className="content-wrap">
                <SecTitle
                    id="home-timeline-heading"
                    as="h2"
                    eyebrow="Experience"
                    title="Work timeline"
                    subtitle="Recent roles and impact. For skills and background, continue to About below."
                />

                <div className="mt-2">
                    <TimelineList entries={previewEntries} density="compact" />
                </div>

                {timelineData.length > 0 ? (
                    <p className="mt-12 text-center md:mt-14">
                        <Link
                            href="/#about"
                            className="text-sm font-medium text-portfolio-accent underline-offset-4 transition-colors duration-150 hover:text-portfolio-accent-strong hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent-strong focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg rounded-sm"
                        >
                            {hasMore ? 'Full story, skills & about' : 'Skills & about'}
                            <span aria-hidden className="ml-0.5">
                                →
                            </span>
                        </Link>
                    </p>
                ) : null}
            </div>
        </section>
    );
};

export default HomeTimeline;
