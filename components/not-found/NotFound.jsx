import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="page-section">
            <div className="content-wrap flex flex-col items-center justify-center text-center">
                <p className="text-6xl font-medium tracking-widest text-portfolio-muted md:text-7xl" aria-hidden="true">
                    404
                </p>
                <h1 className="sr-only">Page not found</h1>
                <p className="mt-6 text-sm text-portfolio-muted">
                    <Link
                        href="/"
                        className="text-portfolio-accent hover:text-portfolio-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent-strong focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg rounded-sm"
                    >
                        ← Back to home
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default NotFound;
