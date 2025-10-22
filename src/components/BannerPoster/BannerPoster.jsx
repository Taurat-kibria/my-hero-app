import React from 'react';

const BannerPoster = () => {
    return (
        <div className='min-h-[300px] bg-gradient-to-br from-[#632EE3]
             to-[#9F62F2] text-white py-[80px] px-44 '>

            <div>
                <h1 className='font-semibold text-5xl text-center mb-[60px] '>
                    Trusted by Millions, Built for You
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-3 '>
                    <div className='text-center space-y-2 '>
                        <p className='text-sm '>
                            Total Downloads
                        </p>
                        <p className='font-bold text-6xl '>
                            29.6M
                        </p>
                        <p className='text-sm '>
                            21% more than last month
                        </p>
                    </div>
                    <div className='text-center space-y-2 '>
                        <p className='text-sm '>
                            Total Downloads
                        </p>
                        <p className='font-bold text-6xl '>
                            29.6M
                        </p>
                        <p className='text-sm '>
                            21% more than last month
                        </p>
                    </div>
                    <div className='text-center space-y-2 '>
                        <p className='text-sm '>
                            Total Downloads
                        </p>
                        <p className='font-bold text-6xl '>
                            29.6M
                        </p>
                        <p className='text-sm '>
                            21% more than last month
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default BannerPoster;