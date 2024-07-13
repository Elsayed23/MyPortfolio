import { Typography } from '@material-tailwind/react';
import React from 'react'
import { Link } from "react-router-dom";
import { navLinks } from '../../../constants'

const NavItems = ({ isMobile, pathname }) => {




    return (
        isMobile
            ?
            <div className='fixed top-0 left-0 bottom-0 w-3/4 bg-blue-gray-900 pt-24 -translate-x-full will-change-transform z-50'>
                <ul className='flex flex-col gap-3 p-3'>
                    {
                        navLinks.map(item => {
                            return (
                                <li key={item.id} className='transform origin-left translate-x-[-20px] translate-y-[50%] will-change-[transform,opacity,filter]'>
                                    <Link to={item.url} className='font-semibold text-4xl p-2 sm:text-5xl sm:p-3 text-blue-gray-50 capitalize w-full block'>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            :
            <ul className="my-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6">
                {
                    navLinks.map(item => {
                        return (
                            <Typography
                                key={item.id}
                                as="li"
                                variant="small"
                                className="p-1 font-medium"
                            >
                                <Link to={item.url} className={`flex items-center font-bold p-3 md:p-0 text-4xl md:text-sm md:font-medium relative before:absolute before:h-[1px] before:w-0 before:left-0 before:bottom-0 before:bg-blue-gray-400 hover:before:w-full before:duration-300 hover:text-blue-gray-400 duration-300 capitalize ${pathname === item.url && 'before:w-full text-blue-gray-400'}`}>
                                    {item.title}
                                </Link>
                            </Typography>
                        )
                    })
                }
            </ul>
    );
}


export default NavItems


/*

export const NavList = () => {


    


    const Links = 

    return (
        <div className='menu'>
            
        </div>
    );
}


*/