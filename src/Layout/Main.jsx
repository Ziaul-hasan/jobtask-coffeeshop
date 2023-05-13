/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Header from '../Page/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Shared/Footer/Footer';
import { AuthContext } from '../Providers/AuthProviders';

const Main = () => {
    const {loading} = useContext(AuthContext)
    return (
        <div>
            <Header></Header>
            {
                loading ? <>
                    <div className='flex justify-center items-center h-[calc(100vh-60px)]'><h2 className='text-3xl font-normal'>Pr</h2><div className='w-6 h-6 border-4 md:w-10 md:h-10 md:border-8 border-dashed rounded-full border-blue-500 animate-spin'></div><h2 className='text-3xl font-normal'>cessing</h2></div>
                </> : ''
            }
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;