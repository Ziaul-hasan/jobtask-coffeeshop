/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    const [coffees, setCoffees] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/coffees')
        .then(res => res.json())
        .then(data=> setCoffees(data.slice(0, 3)))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <h2>Loaded Coffee {coffees.length}</h2>
        </div>
    );
};

export default Home;