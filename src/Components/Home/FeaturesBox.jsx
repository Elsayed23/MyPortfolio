import React from 'react';

const FeaturesBox = ({ logoUrl, name }) => {


    return (
        <div className="py-10 flex flex-col gap-3 items-center justify-center rounded-md border hover:scale-[1.02] md:hover:scale-105 duration-500">

            {
                typeof logoUrl === 'string' ?
                    <img src={logoUrl} alt={name} className='rounded-sm w-20 h-20' />
                    :
                    logoUrl
            }
            <h2 className='text-lg text-white'>{name}</h2>
        </div>
    );
}

export default FeaturesBox;