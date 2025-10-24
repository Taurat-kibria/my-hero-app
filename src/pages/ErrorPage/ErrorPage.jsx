import React from 'react';
import errorImg from '../../assets/App-Error.png'

const ErrorPage = () => {
    return (
        <div >
            <div className='flex flex-col justify-center items-center space-y-6'>
                <img src={errorImg} alt="" />
                <h1 
                    className='font-bold text-4xl'
                    >OPPS!! APP NOT FOUND</h1>
                <p className='font-semibold'>
                    The App you are requesting is not found
                    on our system.  please try another apps
                </p>
                <a

                    className="btn
                    bg-gradient-to-br from-[#632EE3] to-[#9F62F2]
                    text-white font-bold flex items-center
                                        ">

                    Go Back
                </a>

            </div>

        </div>
    );
};

export default ErrorPage;