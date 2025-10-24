// import React, { createContext, useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router';


// const installContext = createContext();

const Root = () => {

    // const [installed, setInstalled] = useState(false)

    
    return (
        <div className='max-w-7xl mx-auto '>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            {/* <installContext.Provider value={{installed, setInstalled}}>

            </installContext.Provider> */}
            <Footer></Footer>
        </div>
    );
};

export default Root;