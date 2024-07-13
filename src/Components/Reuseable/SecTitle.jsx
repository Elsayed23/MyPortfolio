import React from 'react';

const SecTitle = ({ title, someClasses }) => {
    return (
        <h1 className={`text-5xl leading-snug px-3 md:text-6xl mb-16 font-semibold text-white text-center ${someClasses}`}>{title}</h1>
    );
}

export default SecTitle;