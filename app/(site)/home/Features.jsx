import React from 'react';
import SecTitle from '@/components/ui/SecTitle';
import SkillDomainCard from '@/components/ui/SkillDomainCard';
import Link from 'next/link';
import { skillSections } from '@/constants';

const Features = () => {
    const featuredSections = skillSections.slice(0, 4);

    return (
        <section className="border-t border-portfolio-border/50 bg-portfolio-bg py-[var(--section-py)]">
            <div className="content-wrap">
                <SecTitle
                    eyebrow="Skills"
                    title="What I build with"
                    subtitle="Core technologies I use to ship scalable products across frontend, backend, and infrastructure."
                />
                <div className="mb-12 grid gap-5 sm:gap-6 md:grid-cols-2">
                    {featuredSections.map((section) => (
                        <SkillDomainCard
                            key={section.title}
                            section={section}
                            maxSkills={6}
                            descriptionClassName="mb-4 text-sm leading-relaxed text-portfolio-muted"
                        />
                    ))}
                </div>
                <p className="text-center">
                    <Link
                        href="/#about"
                        className="text-sm font-medium text-portfolio-accent underline-offset-4 transition-colors duration-150 hover:text-portfolio-accent-strong hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent-strong focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg rounded-sm"
                    >
                        View all skills
                        <span aria-hidden className="ml-0.5">
                            →
                        </span>
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default Features;
