import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react'

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/contactUs">Contact Us</NavLink></li>
    </>
    return (
        <div className="navbar bg-black bg-opacity-30 fixed z-20">
            
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white rounded bg-orange-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-400 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className='text-xl font-bold text-white'><span className='text-orange-400'>Hungry</span> Restaurant</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button className='btn bg-orange-400 text-white border-none hover:bg-orange-500'>SignUp</button>
            </div>
           
        </div>
    );
};

export default Navbar;