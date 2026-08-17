import React from 'react';

const SecTitle = ({ title, eyebrow, subtitle, someClasses, as: Tag = 'h2', id }) => {
    return (
        <div className={`mb-12 px-3 text-center ${someClasses ?? ''}`}>
            {eyebrow ? (
                <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-portfolio-accent">
                    {eyebrow}
                </p>
            ) : null}
            <Tag
                id={id}
                className="mx-auto max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-tight text-portfolio-text md:text-4xl"
            >
                {title}
            </Tag>
            {subtitle ? (
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-portfolio-muted md:text-base">
                    {subtitle}
                </p>
            ) : null}
        </div>
    );
};

export default SecTitle;
