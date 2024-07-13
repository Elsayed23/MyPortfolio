import React from 'react';
import SecTitle from '../Reuseable/SecTitle';
import FeaturesBox from './FeaturesBox';
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { featuresData } from '../../constants';



const Features = () => {


    const features = featuresData.map((feature, idx) => {
        return <FeaturesBox key={idx} {...feature} />
    })

    return (
        <div className="features pt-28 pb-16">
            <SecTitle title='What Are My Skills' />
            <div className="container px-4 mb-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
                {features}
            </div>
            <div className="flex justify-center items-center">
                <Link to='/about'>
                    <Button className='text-[15px]'>about me</Button>
                </Link>
            </div>
        </div>
    );
}

export default Features;