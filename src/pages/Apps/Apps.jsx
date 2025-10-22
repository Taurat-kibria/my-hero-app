import React from 'react';
import { useLoaderData } from 'react-router';
import AppDisplay from '../../components/appDisplay/AppDisplay';

const Apps = () => {

    const data20 = useLoaderData();
    return (
        <div className='  bg-[#f5f5f5] '>
            <div className='  max-w-6xl mx-auto '>
                <h1 className='text-center font-bold text-5xl pt-[50px] '>
                    Our All Applications
                </h1>

                <p className=' text-center text-sm mt-2 mb-3'>
                    Explore All Apps on the Market developed
                    by us. We code for Millions
                </p>

                <div className='flex justify-between flex-col md:flex-row mb-5 '>
                    <div className='font-semibold text-2xl '
                    >({data20.length}) Apps Found
                    </div>
                    <div>
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" required placeholder="Search" />
                        </label>
                    </div>
                </div>

                <div className='grid md:grid-cols-4 grid-cols-1 gap-4 '>
                    {
                        data20.map(data => <AppDisplay
                            data={data}
                            key={data.id}></AppDisplay>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Apps;