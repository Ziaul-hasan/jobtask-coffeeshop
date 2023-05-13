/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className='flex flex-col justify-center items-end background '>
            <div className='w-1/2 space-y-5'>
                <h1 className='text-2xl md:text-4xl font-bold text-white'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='text-base md:text-lg font-medium text-slate-300'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <Link to='/menu'><button className='mt-5 btn bg-yellow-600 border-0'>Learn More</button></Link>
            </div>
        </div>
    );
};

export default Banner;