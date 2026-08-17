import React from 'react';
import Image from 'next/image';
import { projectCategoryLabels } from '@/constants';
import { assetUrl } from '@/lib/assetUrl';

const ProjectCard = ({ thumbnailImage, title, demo, code, category, description }) => {
    const categoryLabel = category ? projectCategoryLabels[category] : null;
    const thumbSrc = assetUrl(thumbnailImage);
    return (
        <article className="group flex flex-col overflow-hidden rounded-2xl border border-portfolio-border bg-portfolio-elevated transition-colors duration-200 hover:border-portfolio-border-strong">
            <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-portfolio-accent-strong"
            >
                <div className="relative aspect-video overflow-hidden bg-portfolio-surface">
                    <Image
                        src={thumbSrc}
                        fill
                        sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                        className="object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.02]"
                        alt={`${title} project thumbnail`}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                </div>
            </a>
            <div className="flex flex-1 flex-col p-5">
                {categoryLabel ? (
                    <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-portfolio-accent">
                        {categoryLabel}
                    </p>
                ) : null}
                <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm text-lg font-semibold tracking-tight text-portfolio-text underline-offset-4 transition-colors duration-200 hover:text-portfolio-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent-strong focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-elevated"
                >
                    {title}
                </a>
                {description ? (
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-portfolio-muted">{description}</p>
                ) : null}
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-portfolio-text underline-offset-4 transition-colors hover:text-portfolio-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent-strong focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-elevated rounded-sm"
                    >
                        Demo
                    </a>
                    {code ? (
                        <a
                            href={code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-portfolio-text underline-offset-4 transition-colors hover:text-portfolio-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent-strong focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-elevated rounded-sm"
                        >
                            Code
                        </a>
                    ) : null}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
