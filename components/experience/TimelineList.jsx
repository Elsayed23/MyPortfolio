import React from 'react';
import {
    formatEmploymentDuration,
    formatEmploymentRange,
} from '@/constants/timeline';

const workplaceLabels = {
    remote: 'Remote',
    'on-site': 'On-site',
    hybrid: 'Hybrid',
};

const TimelineList = ({ entries, density = 'comfortable' }) => {
    const isCompact = density === 'compact';

    if (!entries?.length) {
        return (
            <p className="text-sm text-portfolio-muted">
                Add entries to <code className="text-portfolio-accent">constants/timeline.js</code>.
            </p>
        );
    }

    const itemGap = isCompact ? 'pb-10 sm:pb-12' : 'pb-12 sm:pb-14 md:pb-16';
    const bodyText = isCompact ? 'text-sm leading-relaxed' : 'text-sm leading-relaxed md:text-[0.9375rem]';

    return (
        <div className="mx-auto min-w-0 max-w-3xl">
            <ol className="relative m-0 list-none p-0">
                {/* Thin vertical rail */}
                <div
                    className="pointer-events-none absolute left-[0.4375rem] top-2 z-0 h-[calc(100%-0.5rem)] w-px bg-portfolio-border"
                    aria-hidden
                />

                {entries.map((entry, index) => {
                    const duration = formatEmploymentDuration(entry.startDate, entry.endDate);
                    const range = formatEmploymentRange(entry.startDate, entry.endDate);
                    const workplaceLabel = entry.workplace ? workplaceLabels[entry.workplace] : null;
                    const isLast = index === entries.length - 1;
                    const isCurrent = entry.endDate == null;
                    const dateTimeAttr = entry.endDate
                        ? `${entry.startDate}/${entry.endDate}`
                        : `${entry.startDate}/present`;

                    return (
                        <li
                            key={entry.id}
                            className={`relative z-[1] pl-10 sm:pl-12 ${isLast ? 'pb-0' : `${itemGap} border-b border-portfolio-border/50`}`}
                        >
                            {/* Node on rail */}
                            <span
                                className={`absolute left-0 top-1 z-[2] flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-portfolio-bg bg-portfolio-bg ring-1 ring-portfolio-border ${
                                    isCurrent ? 'ring-emerald-500/40' : ''
                                }`}
                                aria-hidden
                            >
                                <span
                                    className={`block h-1.5 w-1.5 rounded-full ${
                                        isCurrent ? 'bg-emerald-500' : 'bg-portfolio-accent'
                                    }`}
                                />
                            </span>

                            {/* Meta row */}
                            <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1.5 text-[0.8125rem] text-portfolio-muted">
                                <time
                                    className="font-medium tabular-nums tracking-tight text-portfolio-text"
                                    dateTime={dateTimeAttr}
                                >
                                    {range}
                                </time>
                                <span className="hidden text-portfolio-border sm:inline" aria-hidden>
                                    ·
                                </span>
                                <span className="tabular-nums text-portfolio-muted">{duration}</span>
                                {workplaceLabel ? (
                                    <>
                                        <span className="hidden text-portfolio-border sm:inline" aria-hidden>
                                            ·
                                        </span>
                                        <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-portfolio-muted">
                                            {workplaceLabel}
                                        </span>
                                    </>
                                ) : null}
                                {isCurrent ? (
                                    <span className="inline-flex items-center gap-1.5 rounded border border-emerald-500/30 bg-emerald-500/5 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400/90">
                                        <span
                                            className="h-1 w-1 rounded-full bg-emerald-500 motion-reduce:animate-none dark:bg-emerald-400"
                                            aria-hidden
                                        />
                                        Current
                                    </span>
                                ) : null}
                            </div>

                            <h3 className="mt-4 break-words text-lg font-semibold tracking-tight text-portfolio-text md:text-xl">
                                {entry.organization}
                            </h3>
                            <p className="mt-1 break-words text-sm font-medium leading-snug text-portfolio-muted md:text-base">
                                {entry.title}
                            </p>

                            {entry.bullets?.length ? (
                                <ul className={`mt-5 list-none space-y-2.5 pl-0 text-left ${bodyText} text-portfolio-text/90 sm:space-y-3`}>
                                    {entry.bullets.map((line, i) => (
                                        <li key={i} className="flex gap-3 leading-relaxed">
                                            <span
                                                className="mt-[0.5em] inline-block h-px w-4 shrink-0 bg-portfolio-border-strong"
                                                aria-hidden
                                            />
                                            <span className="min-w-0 break-words">{line}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : entry.description ? (
                                <p
                                    className={`mt-5 max-w-full min-w-0 break-words whitespace-pre-wrap text-left ${bodyText} text-portfolio-text/90`}
                                >
                                    {entry.description}
                                </p>
                            ) : null}
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default TimelineList;
