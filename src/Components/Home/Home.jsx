import React from 'react';
import Hero from './Hero';
import Projects from './Projects';
import SEO from '../Reuseable/SEO';
import Features from './Features';


const Home = () => {



    return (
        <>
            <SEO title='Home' desc='This is Elsayed portfolio.A React.js & Next.js developer' />
            <Hero />
            <Projects />
            <Features />
        </>
    );
}

export default Home;