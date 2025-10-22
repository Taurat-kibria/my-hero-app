import React from 'react';
import AppDisplay from '../appDisplay/AppDisplay';
import { Link } from 'react-router';

const HomeApps = ({ data8 }) => {
    return (
        <div className='  bg-[#f5f5f5] '>
            <div className='max-w-6xl mx-auto'>
                <p className='text-center font-bold text-5xl pt-[50px] '>
                    Trending Apps
                </p>
                <p className=' text-center text-sm mt-2 mb-3'>
                    Explore All Trending Apps on the Market developed by us
                </p>

                <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
                    {
                        data8.map(data => <AppDisplay
                            data={data}
                            key={data.id}></AppDisplay>)
                    }
                </div>

                <div className='text-center mt-[40px] '>
                    <Link to='/apps'>
                        <button className='btn text-center 
                                bg-gradient-to-br from-[#632EE3] to-[#9F62F2]
                            text-white font-bold rounded-sm px-4 py-3 '>
                            Show All
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default HomeApps;