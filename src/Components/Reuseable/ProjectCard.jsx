import { Button } from '@material-tailwind/react';
import React from 'react';

const ProjectCard = ({ thumbnailImage, title, demo, code }) => {

    function customLink(url) {
        window.open(url, '_blank')
    }

    return (
        <div onClick={() => { customLink(demo) }} className="text-center group hover:scale-[1.02] md:hover:scale-105 duration-500 cursor-pointer">
            <div className="relative">
                <div className="demoBG uppercase invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-500 absolute rounded-md w-full h-full bg-[#000] bg-opacity-50 flex justify-center items-center gap-3 text-[#cccccc] text-base">
                    <Button variant='outlined' color='white' className='focus:ring-0'>demo</Button>
                    <Button variant='gradient' onClick={() => { customLink(code) }} color='white'>code</Button>
                </div>
                <img src={thumbnailImage} loading='lazy' className='w-full mb-4 rounded-md min-h-[235px] object-cover' alt={title} />
            </div>
            <h2 className='text-xl sm:text-2xl text-[#cccccc]'>{title}</h2>
        </div>
    );
}

export default ProjectCard;