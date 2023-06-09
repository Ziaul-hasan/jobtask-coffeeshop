/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
    const {signInUser, googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [show, setShow] = useState(false)
    const [error, setError] = useState('');

    const handleLogin = event => {
        setError('')
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        const from = location.state?.from?.pathname || '/';

        signInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, {replace: true})
            setError('')
            toast.success('User successfully loggedin')
        })
        .catch(error => {
            setError('invalid email and password');
        })
    }

    const handleGoogleLogin = () =>{
        const from = location.state?.from?.pathname || '/';
        googleLogin()
        .then(result =>{
            const user = result.user;
            navigate(from, {replace: true})
            console.log(user)
        })
        .then(error =>{
            console.log(error)
        })
    }

    return (
        <div className='logmargin background'>
            <div className='form-container relative z-10'>
                <h2 className='form-title'>Please Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder='Your@email.com' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type={show ? "text" : "password"} name="password" id="" placeholder='Your Password' required />
                    </div>
                    <p style={{ cursor: 'pointer', marginTop: '' }} onClick={() => setShow(!show)}> {show ? <span><HiEyeOff className='ms-auto -mt-14 me-6'></HiEyeOff></span> : <span><HiEye className='ms-auto -mt-14 me-6'></HiEye></span>}</p>
                    <input type="submit" value="Log in" className='btn-submit' />
                </form>
                <p className='text-yellow-300 font-medium'>{error}</p>
                <p><small className='text-base'>New to the site? Please <Link className='text-white font-semibold' to="/register">Register</Link></small></p>
                <div className='text-center'>
                    <button onClick={handleGoogleLogin} className='px-5 py-2 rounded-md bg-white text-lg font-semibold items-center w-full my-5'> <FaGoogle className='inline-block mx-2 text-green-600'></FaGoogle> Sign in With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;