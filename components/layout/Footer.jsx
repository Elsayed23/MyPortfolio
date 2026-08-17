import React from 'react';
import SocialLinks from '@/components/ui/SocilaLinks';

const Footer = () => {
    const currYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col items-center justify-between gap-4 border-t border-portfolio-border bg-portfolio-surface px-4 py-4 text-center text-sm text-portfolio-muted md:flex-row md:gap-0">
            <p>
                © {currYear}{' '}
                <span className="font-medium text-portfolio-text">Elsayed Kewan</span>
            </p>
            <SocialLinks margin="" />
        </footer>
    );
}

export default Footer;
