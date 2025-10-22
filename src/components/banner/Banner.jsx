import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoAppleAppstore } from 'react-icons/io5';
import bannerImg from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className='' >
            <div className=' text-center bg-[#f5f5f5] pt-12 '>
                <h1 className='text-7xl font-semibold mb-5 '>
                    We Build <br />
                    <span className='text-[#632EE3]'>Productive</span> Apps
                </h1>
                <p className='text-[#627382] mb-10 '>
                    At HERO.IO, we craft innovative apps designed to make everyday
                    life simpler, smarter, and more exciting. <br />
                    Our goal is to turn your ideas into digital experiences
                    that truly make an impact.
                </p>
                <a href="https://play.google.com/store/games?hl=en " target="_blank">
                    
                    <button

                        className="btn btn-xs sm:btn-sm 
                        md:btn-md lg:btn-lg xl:btn-xl mr-5">
                        <FaGooglePlay />Google Play
                    </button>
                </a>

                <a href="https://www.apple.com/app-store/" target="_blank">
                
                    <button
                    className="btn btn-xs sm:btn-sm 
                    md:btn-md lg:btn-lg xl:btn-xl ">
                    <IoLogoAppleAppstore />App Store
                </button>
                </a>


                <img className=' mt-10  mx-auto ' src={bannerImg} alt="" />

            </div>

        </div>
    );
};

export default Banner;