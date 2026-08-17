import React from 'react';
import ProjectCard from '@/components/ui/ProjectCard';
import Link from 'next/link';
import SecTitle from '@/components/ui/SecTitle';
import { projectsData } from '@/constants';

const Projects = () => {
    const projects = projectsData.slice(0, 6).map((project, idx) => (
        <ProjectCard key={idx} {...project} />
    ));

    return (
        <section className="bg-portfolio-bg py-[var(--section-py)]">
            <div className="content-wrap">
                <SecTitle title="Featured projects" />
                <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {projects}
                </div>
                <p className="text-center">
                    <Link
                        href="/projects"
                        className="text-sm font-medium text-portfolio-accent transition-colors duration-150 hover:text-portfolio-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent-strong focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg rounded-sm"
                    >
                        View all projects →
                    </Link>
                </p>
            </div>
        </section>
    );
}

export default Projects;
