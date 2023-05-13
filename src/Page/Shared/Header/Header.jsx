/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo1.png'
import { AuthContext } from '../../../Providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }

    const navbar = <>
        <div className='text-base md:text-xl font-semibold text-orange-950 md:text-white flex flex-col md:flex-row md:space-x-5'>
            <li className='hover:text-yellow-700'><NavLink title='/home' className={({ isActive, isPending }) => isActive ? 'text-yellow-700 font-bold' : ''} to="/">Home</NavLink></li>
            <li className='hover:text-yellow-700'><NavLink title='/menu' className={({ isActive, isPending }) => isActive ? 'text-yellow-700 font-bold' : ''} to="/menu">Menu</NavLink></li>
        </div>
    </>
    return (
        <div className="navbar bg-black px-3 md:px-20 py-3">
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
            <div className='w-1/2 text-end'>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbar}
                    </ul>
                </div>

                <div className='navbar-end space-x-5'>
                    {
                        user && <li className='hover:text-yellow-700'><NavLink title={user.displayName} to=""> <img className='w-10 h-10 rounded-full border-2 border-yellow-700' src={user.photoURL} alt="" /> </NavLink></li>
                    }

                    {
                        user ? <button onClick={handleLogout} className='btn border-0 bg-yellow-700 '><Link to='/login'>Logout</Link></button> : <button className='btn border-0 bg-yellow-700'><Link to='/login'>Login</Link></button>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;