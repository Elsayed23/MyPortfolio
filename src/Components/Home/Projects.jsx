import React from 'react';
import ProjectCard from '../Reuseable/ProjectCard';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import SecTitle from '../Reuseable/SecTitle';
import { projectsData } from '../../constants';

const Projects = () => {

    const projects = projectsData.slice(0, 9).map((project, idx) => {
        return <ProjectCard key={idx} {...project} />
    })


    return (
        <div className="projects pt-28">
            <SecTitle title='Check Out My Projects' />
            <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-10 mb-10">
                {projects}
            </div>
            <div className="flex justify-center items-center">
                <Link to='/projects'>
                    <Button className='text-[15px]'>see more</Button>
                </Link>
            </div>
        </div>
    );
}

export default Projects;