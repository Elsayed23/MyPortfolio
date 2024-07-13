import React from 'react';
import ProjectCard from '../Reuseable/ProjectCard';
import SecTitle from '../Reuseable/SecTitle';
import SEO from '../Reuseable/SEO';
import { projectsData } from '../../constants';

const AllProjects = () => {

    const Projects = projectsData.map((project, idx) => {
        return <ProjectCard key={idx} {...project} />
    })

    return (
        <>
            <SEO title='My Projects' desc="This page contains the projects that I've done" />
            <div className="py-36">
                <SecTitle title='My Projects' />
                <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-10 mb-10">
                    {Projects}
                </div>
            </div>
        </>
    );
}

export default AllProjects;