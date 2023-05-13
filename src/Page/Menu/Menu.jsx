/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Coffee from '../Home/Coffee/Coffee';

const Menu = () => {
    const coffees = useLoaderData()
    return (
        <div>
            <div className='flex flex-col justify-center background '>
                <div className='w-1/2 space-y-5'>
                    <h1 className='text-2xl md:text-4xl font-bold text-white'>Three cups of coffee a day keeps the doctor away!</h1>
                    <p className='text-base md:text-lg font-medium text-slate-300'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <Link to='/'><button className='mt-5 btn bg-yellow-700 border-0'>Go to Home</button></Link>
                </div>
            </div>
            <div className='hero-background py-6 md:py-16'>
                <div className='text-center'>
                    <h2 className='text-base text-slate-400 font-normal'>----Sip & Savor----</h2>
                    <h2 className='text-xl md:text-4xl text-white font-bold'>Our Popular Items</h2>
                </div>
                <div className='grid grid-cols-3 gap-6 w-4/5 mx-auto my-10'>
                    {
                        coffees.map(coffee => <Coffee key={coffee.id} coffee={coffee}></Coffee>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Menu;