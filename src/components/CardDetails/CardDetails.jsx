import React from 'react';
import demo from '../../assets/demo-app (1).webp'
import downloadImg from '../../assets/icon-downloads.png'


const CardDetails = () => {
    return (
        <div className='bg-[#f5f5f5] '>
            <div className='flex gap-7 '>
                <div >
                    <img className='h-[350px] w-[350px]' src={demo} alt="" />
                </div>
                <div>
                    <h1 className='font-semibold text-4xl '>
                        SmPlan:ToDo List with Reminder
                    </h1 >
                    <p className='font-semibold text-xl text-[#647584]
                         mt-3.5 mb-8 border-b border-dashed '>
                        Developed by <span className='text-[#7a44e9] '>llll</span>
                    </p>
                    <div className='flex justify-around mb-11'>
                        <div className='space-y-0.5 '>
                            <img src={downloadImg}  />
                            <p className='text-[#647584]'>Downloads</p>
                            <h1 className='font-bold text-4xl '>8M</h1>
                        </div>
                        <div className='space-y-0.5 '>
                            <img src={downloadImg}  />
                            <p className='text-[#647584]'>Downloads</p>
                            <h1 className='font-bold text-4xl '>8M</h1>
                        </div>
                        <div className='space-y-0.5 '>
                            <img src={downloadImg}  />
                            <p className='text-[#647584]'>Downloads</p>
                            <h1 className='font-bold text-4xl '>8M</h1>
                        </div>
                    </div>
                    <button
                        className='btn bg-[#00d390] rounded-lg
                         text-white  text-lg py-3 '
                        >Install Now (291MB)

                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;