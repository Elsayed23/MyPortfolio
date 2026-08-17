import React from 'react';
import Hero from './Hero';
import HomeTimeline from './HomeTimeline';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

const Home = () => {
    return (
        <>
            <Hero />
            <HomeTimeline />
            <AboutSection variant="home" id="about" />
            <ProjectsSection variant="home" id="projects" />
            <ContactSection variant="home" id="contact" />
        </>
    );
};

export default Home;