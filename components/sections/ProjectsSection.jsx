'use client';

import { useMemo, useState } from 'react';
import ProjectCard from '@/components/ui/ProjectCard';
import SecTitle from '@/components/ui/SecTitle';
import { projectsData, projectCategories } from '@/constants';

export default function ProjectsSection({
  variant = 'page',
  id,
  headingAs = 'h2',
  showTitle = true,
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const isPage = variant === 'page';
  const outerClassName = isPage ? 'page-section page-section--fluid' : 'section-shell';

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return projectsData;
    return projectsData.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id={id} className={outerClassName}>
      <div className="content-wrap">
        {showTitle ? (
          <SecTitle
            as={headingAs}
            eyebrow="Projects"
            title="Selected work across product, SaaS, and modern front-end builds."
            subtitle="Browse the full portfolio with quick category filters for the kind of work you want to see."
          />
        ) : null}

        <div
          className="mb-10 flex flex-wrap gap-x-1 gap-y-1 border-b border-portfolio-border"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {projectCategories.map(({ id: categoryId, label }) => {
            const selected = activeCategory === categoryId;

            return (
              <button
                key={categoryId}
                type="button"
                role="tab"
                aria-selected={selected}
                id={`project-filter-${categoryId}`}
                onClick={() => setActiveCategory(categoryId)}
                className={`relative -mb-px border-b-2 px-3 py-2.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent-strong focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg rounded-t-sm ${
                  selected
                    ? 'border-portfolio-accent text-portfolio-text'
                    : 'border-transparent text-portfolio-muted hover:text-portfolio-text'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <p className="text-sm text-portfolio-muted">No projects in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-8">
            {filtered.map((project, idx) => (
              <ProjectCard key={`${project.title}-${idx}`} {...project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
