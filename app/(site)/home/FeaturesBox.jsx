import React from 'react';
import { assetUrl } from '@/lib/assetUrl';
import Image from 'next/image';

const FeaturesBox = ({ logoUrl, name }) => {
    const resolved =
        typeof logoUrl === 'string' ? logoUrl : assetUrl(logoUrl);
    const imgSrc = typeof resolved === 'string' ? resolved : null;

    return (
        <span className="inline-flex items-center gap-2 rounded-md bg-portfolio-surface/60 px-3 py-1.5 text-sm text-portfolio-muted transition-colors duration-150 hover:border hover:border-portfolio-border hover:text-portfolio-text">
            {imgSrc ? (
                <Image src={imgSrc} alt="logo" className="h-4 w-4 shrink-0" width={16} height={16} />
            ) : (
                <span className="flex h-4 w-4 shrink-0 items-center justify-center [&_svg]:h-4 [&_svg]:w-4 [&_svg]:max-h-4 [&_svg]:max-w-4" aria-hidden>
                    {logoUrl}
                </span>
            )}
            <span>{name}</span>
        </span>
    );
}

export default FeaturesBox;
