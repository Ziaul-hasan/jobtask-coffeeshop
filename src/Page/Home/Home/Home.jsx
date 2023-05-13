/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Coffee from '../Coffee/Coffee';
import './Home.css'

const Home = () => {
    const [coffees, setCoffees] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/coffees')
            .then(res => res.json())
            .then(data => setCoffees(data.slice(0, 3)))
    }, [])
    return (
        <div>
            <Banner></Banner>
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
                <div className='text-center'>
                    <button className='btn border-0 bg-orange-800 my-6'>Show More</button>
                </div>
            </div>
        </div>
    );
};

export default Home;