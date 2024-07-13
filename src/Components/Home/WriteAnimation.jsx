import React from 'react';
import TypeIt from "typeit-react";


const WhiteAnimation = () => {

    return (
        <h1 className='font-semibold italic mb-5' id='element'>
            I'm a
            <TypeIt
                options={{
                    loop: true,
                    speed: 120,
                    deleteSpeed: 50,
                }}
                getBeforeInit={(instance) => {
                    instance
                        .type(' Frontend Developer.')
                        .pause(1600)
                        .delete(true)
                        .type(' Next.js Developer.')
                        .pause(1600)
                        .delete(true)
                        .type(' React.js Developer.')
                        .pause(1600)
                        .delete(true)
                    return instance;
                }}
            />
        </h1>

    );
}

export default WhiteAnimation;