import React from 'react';
import SecTitle from '@/components/ui/SecTitle';
import TimelineList from './TimelineList';
import { timelineData } from '@/constants/timeline';

const Experience = () => {
    return (
        <>
            <div className="min-h-[calc(100vh-129px)] bg-portfolio-bg py-36">
                <SecTitle as="h1" title="Experience" />
                <div className="container mx-auto px-4">
                    <TimelineList entries={timelineData} />
                </div>
            </div>
        </>
    );
};

export default Experience;
