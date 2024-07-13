import React from 'react';
import { Button } from '@material-tailwind/react';
import WhiteAnimation from './WriteAnimation';
import SocialLinks from '../Reuseable/SocilaLinks';
import { Link } from 'react-router-dom';
import resume from '../../Images/ElsayedResume.pdf'
import heroImage from '../../Images/hero.webp'

const Hero = () => {


    const buttonsData = [
        {
            id: 1,
            url: resume,
            content: 'my resume',
            isDownload: true
        },
        {
            id: 2,
            url: '/contact',
            content: 'contact me',
            isDownload: false
        },
    ]

    const buttons = buttonsData.map(button => {
        return (
            <Button key={button.id} variant="outlined" className='text-white border-[#cccccc] p-0 text-base capitalize focus:shadow-none hover:opacity-100'>
                {
                    button.isDownload
                        ?
                        <a href={button.url} className='block px-6 py-3' >
                            {button.content}
                        </a>
                        :
                        <Link to={button.url} className='block px-6 py-3' >
                            {button.content}
                        </Link>
                }
            </Button>
        )
    })

    return (
        <div className="hero bg-cover px-4 h-screen flex flex-col justify-center items-center text-white text-xl" style={{ backgroundImage: `url(${heroImage})` }}>
            <h1 className='text-[40px] leading-normal md:text-7xl mb-3 font-semibold text-[#cccccc] capitalize'>I'm elsayed</h1>
            <WhiteAnimation />
            <div className="flex gap-4 mb-8">
                {buttons}
            </div>
            <SocialLinks />
        </div>
    );
}

export default Hero;