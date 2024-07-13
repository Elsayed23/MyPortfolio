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
                    <div className="rounded-full min-w-[310px] w-[310px] h-[310px]">
                        <img src={myPhoto} className='w-full h-full border-4 rounded-full object-cover' alt="myPhoto" />
                    </div>
                    <div className="text-lg text-[#cccccc]">
                        <p className=' leading-relaxed mb-10'>I'm Elsayed Kewan. I am a dedicated and aspiring Frontend Developer with a strong passion for web development, specializing in React.js and Next.js. Eager to expand my skills and knowledge, I continuously seek out learning opportunities and hands-on projects. My goal is to contribute to innovative web applications that provide exceptional user experiences. I am on a journey to becoming a Full Stack Developer, driven by curiosity and a commitment to excellence.</p>
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