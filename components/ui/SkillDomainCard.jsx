import React from 'react';
import { getSkillDomainIcon } from '@/lib/skillDomainIcon';

/**
 * Editorial “skills by domain” surface: flat border, left accent on hover/focus, outline chips.
 */
export default function SkillDomainCard({
    section,
    maxSkills = null,
    titleAs: Title = 'h3',
    descriptionClassName = 'mb-4 text-xs leading-relaxed text-portfolio-muted md:text-sm',
}) {
    const skills = maxSkills != null ? section.skills.slice(0, maxSkills) : section.skills;

    return (
        <article className="group relative rounded-xl border border-portfolio-border border-l-[3px] border-l-portfolio-border bg-portfolio-elevated p-5 transition-colors duration-200 hover:border-portfolio-border-strong hover:border-l-portfolio-accent focus-within:border-portfolio-border-strong focus-within:border-l-portfolio-accent md:p-6">
            <div className="mb-4 flex items-start justify-between gap-3">
                <div className="min-w-0">
                    <p className="mb-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-portfolio-accent">
                        {section.skills.length} skills
                    </p>
                    <Title className="text-base font-semibold tracking-tight text-portfolio-text md:text-lg">
                        {section.title}
                    </Title>
                </div>
                <span
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-portfolio-border bg-portfolio-bg text-portfolio-muted transition-colors duration-200 group-hover:border-portfolio-border-strong group-hover:text-portfolio-text"
                    aria-hidden
                >
                    {React.createElement(getSkillDomainIcon(section.title), {
                        className: 'text-[0.9rem]',
                    })}
                </span>
            </div>
            <p className={descriptionClassName}>{section.description}</p>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={`${section.title}-${skill}`}
                        className="rounded-full border border-portfolio-border bg-transparent px-2.5 py-1 text-xs text-portfolio-muted transition-colors duration-150 group-hover:border-portfolio-border-strong group-hover:text-portfolio-text md:text-[0.8125rem]"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </article>
    );
}
