import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-7xl flex justify-center items-center flex-col min-h-[calc(100vh-129px)] text-white font-bold'>
            4 0 4
            <span className='text-xl font-normal'>
                Not found page my brother, back to <Link className='underline' to='/'>Home</Link>
            </span>
        </div>
    )
}

export default NotFound