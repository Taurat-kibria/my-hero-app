import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;