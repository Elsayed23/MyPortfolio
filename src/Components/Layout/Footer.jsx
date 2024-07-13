import React from 'react';
import SocialLinks from '../Reuseable/SocilaLinks';

const Footer = () => {

    let currYear = new Date().getFullYear()

    return (
        <footer className='py-6 text-center bg-[#1d1e20] text-[#9da1a5] border-t border-white border-opacity-50 px-4'>
            <SocialLinks margin='mb-4' />
            <p>Copyright©{currYear}<span className='text-[#ff3d4f]'>ElsayedKewan</span> All Rights Reserved</p>
        </footer>
    );
}

export default Footer;