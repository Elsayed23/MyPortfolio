import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { socialData } from '../../constants';


const SocialLinks = ({ margin }) => {


    const social = socialData.map(data => {
        return (
            <Link to={data.url} key={data.id} className='text-3xl text-white hover:text-[#cccccc] duration-500' target='_blank'>
                <FontAwesomeIcon icon={data.icon} />
            </Link>
        )
    })

    return (
        <div className={`flex items-center justify-center gap-6 ${margin}`}>
            {social}
        </div>
    );
}

export default SocialLinks;