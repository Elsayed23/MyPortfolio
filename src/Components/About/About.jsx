import React from 'react';
import SEO from '../Reuseable/SEO';
import SecTitle from '../Reuseable/SecTitle';
import { Chip } from '@material-tailwind/react';
import { featuresData } from '../../constants';


const About = () => {


    const myPhoto = require('../../Images/myPhoto.jpeg')

    let skills = featuresData.map((skill, idx) => {
        return (
            <Chip key={idx} variant="outlined" className='text-[#cccccc] border-white' value={skill.name} />
        )
    })


    return (
        <>
            <SEO title='About Me' desc='This page contains my skills and some information about me' />
            <div className="py-36 min-h-[calc(100vh-129px)]">
                <SecTitle title='About Me' />
                <div className="container px-4 mx-auto items-center flex flex-col lg:flex-row 4 gap-24">
                    <div className="rounded-full min-w-[310px] w-[310px] border-4 h-[310px] overflow-hidden">
                        <img src={myPhoto} className='w-full h-full rounded-full object-cover scale-125' style={{
                            objectPosition: '0 28%'
                        }} alt="myPhoto" />
                    </div>
                    <div className="text-lg text-[#cccccc]">
                        <div className=' leading-relaxed mb-10'>
                            <p className='mb-4'>I'm Elsayed Kewan, a passionate and dedicated Full Stack Developer with hands-on experience in building modern web applications using Next.js, Node.js, MySQL, and Prisma ORM. My journey started in frontend development, where I specialized in React.js and Next.js, and naturally evolved into full stack development as I pursued a deeper understanding of backend technologies.</p>

                            <p>I craft clean and responsive user interfaces using Tailwind CSS and shadcn/ui, focusing on both aesthetics and usability. I thrive on learning and constantly seek opportunities to grow through real-world projects. I'm committed to creating innovative and scalable web applications that deliver seamless user experiences, and I’m always exploring new tools and best practices to refine my craft.</p>
                        </div>
                        <div className="chips flex gap-x-2 gap-y-3 flex-wrap">
                            {skills}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;