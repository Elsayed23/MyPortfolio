import React from 'react';
import { socialData } from '@/constants';

const platformLabel = {
    1: 'LinkedIn',
    2: 'HackerRank',
    3: 'GitHub',
    4: 'WhatsApp',
};

const SocialLinks = ({ margin, linkClassName }) => {
    const linkBase =
        'inline-flex items-center justify-center rounded-sm text-portfolio-muted transition-colors duration-150 hover:text-portfolio-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent-strong focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg';
    const linkSize = linkClassName ?? 'text-xl md:text-2xl';

    const social = socialData.map((data) => {
        const Icon = data.icon;
        return (
            <a
                href={data.url}
                key={data.id}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkBase} ${linkSize}`}
                aria-label={`${platformLabel[data.id] || 'Social'} (opens in new tab)`}
            >
                <Icon className="h-[1em] w-[1em]" aria-hidden />
            </a>
        );
    });

    return (
        <div className={`flex items-center justify-center gap-5 ${margin ?? ''}`}>
            {social}
        </div>
    );
};

export default SocialLinks;
