/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo1.png'

const Header = () => {
    const navbar = <>
        <div className='text-base md:text-xl font-semibold text-orange-950 md:text-white flex flex-col md:flex-row md:space-x-5'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
        </div>
    </>
    return (
        <div className="navbar bg-[#4B281E] px-3 md:px-20 py-3">
            <div className="navbar-start w-3/4">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <Link className="flex space-x-3 items-center">
                    <img className='w-12 h-12 md:w-16 md:h-16' src={logo} alt="" />
                    <h2 className='text-lg md:text-3xl font-medium md:font-bold text-white'>CoffeeTime</h2>
                </Link>
            </div>
            <div className='w-1/4 text-end'>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbar}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn bg-yellow-700">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;