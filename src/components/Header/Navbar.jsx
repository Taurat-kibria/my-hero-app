import React from 'react';
import logo from '../../assets/logo.png'
import git from '../../assets/git-logo.png'
import { NavLink } from 'react-router';

import './Navbar.css'

const Navbar = () => {
    return (
        <div className='  '>
            <div className="navbar bg-base-100 shadow-sm py-5 px-[50px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li>
                                <NavLink to='/apps'>Apps</NavLink>

                            </li>
                            <li><NavLink to='/installation'>Installations
                            </NavLink></li>
                        </ul>
                    </div>

                    <NavLink to='/' className="font-bold text-shadow-md
                     bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent
                     flex items-center text-xl">
                        <img className='h-10 w-10 ' src={logo} alt="" />
                        HERO.IO</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li>

                            <NavLink to='/apps'>Apps</NavLink>


                        </li>
                        <li><NavLink to='/installation'>Installations
                        </NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a
                        target='_blank'
                        href='https://github.com/Taurat-kibria'
                        className="btn
                        bg-gradient-to-br from-[#632EE3] to-[#9F62F2]
                         text-white font-bold flex items-center
                        ">
                        <img src={git} alt="" />
                        Contribute
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;