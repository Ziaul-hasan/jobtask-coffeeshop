/* eslint-disable no-unused-vars */
import React from 'react';
import './Coffee.css'

const Coffee = ({ coffee }) => {
    const { id, image, name, price, description } = coffee;
    return (
        <div className="card w-96 bg-base-100 shadow-lg shadow-slate-600 coffee-card">
            <figure className="px-10 pt-10">
                <img src={image} alt="cup" className="rounded-xl w-48 h-72" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-xl font-bold text-white">Name: <span className='text-lg font-medium text-white'>{name}</span></h2>
                <h2 className='card-title text-xl font-bold text-white'>Price <span className='text-lg font-medium text-orange-600'>${price}</span></h2>
                <p className='text-slate-300'>{description}</p>
                <div className="card-actions">
                    <button className="btn bg-orange-800 border-0">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default Coffee;