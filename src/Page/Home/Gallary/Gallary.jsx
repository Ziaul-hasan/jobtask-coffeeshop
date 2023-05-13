/* eslint-disable no-unused-vars */
import React from 'react';
import img1 from '../../../assets/Rectangle 10.png'
import img2 from '../../../assets/Rectangle 11.png'
import img3 from '../../../assets/Rectangle 12.png'
import img4 from '../../../assets/Rectangle 13.png'
import img5 from '../../../assets/Rectangle 14.png'
import img6 from '../../../assets/Rectangle 15.png'
import img7 from '../../../assets/Rectangle 16.png'
import img8 from '../../../assets/Rectangle 9.png'

const Gallary = () => {
    return (
        <div className='w-4/5 mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 my-10'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
        </div>
    );
};

export default Gallary;