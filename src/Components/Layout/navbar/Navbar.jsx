import React from 'react';
import {
    Navbar,
} from "@material-tailwind/react";
import { Link, useLocation } from 'react-router-dom';
import MobileNav from './MobileNav';
import NavItems from './NavItems';



const NavBar = () => {

    const { pathname } = useLocation();

    const [isOpen, setIsOpen] = React.useState(false);


    const handleWindowResize = () =>
        window.innerWidth >= 960 && setIsOpen(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);



    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    const isMobile = windowWidth < 720

    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <Navbar className={`backdrop-blur-0 z-50 max-w-full shadow-none px-6 py-4 fixed transition duration-500 bg-[#0f0d0de8] bg-opacity-1 border-0 backdrop-filter-none backdrop-saturate-0 rounded-none`}>
            <div className="flex items-center justify-between">

                <Link to='/' className='text-2xl py-1.5 font-sans font-semibold'>
                    <img src={require('../../../Images/logo.png')} className='w-10 h-10' alt="logo" />
                </Link>
                <div className="hidden md:block">
                    <NavItems isMobile={isMobile} pathname={pathname} />
                </div>
                {
                    isMobile
                    &&
                    <MobileNav isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
                }

            </div>

        </Navbar>
    );
}

export default NavBar;