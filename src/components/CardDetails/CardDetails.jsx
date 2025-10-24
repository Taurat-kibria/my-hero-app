
import { useLoaderData } from 'react-router';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import reviewImg from '../../assets/icon-review.png'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import { useContext } from 'react';
// import { installContext } from '../root/Root.jsx';



const CardDetails = () => {

    const [install, setInstall] = useState(false);

    // const {installed, setInstalled} = useContext(installContext)

    // const data = useContext(DataContext)
    // console.log(data)
    const datas = useLoaderData()
    const chartData = datas.ratings
    console.log(chartData)

    // "image": "https://images.unsplash.com/photo-1519397150501-4d9d97b3918d",
    // "title": "SpeakEase",
    // "companyName": "LinguaTech",
    // "id": 14,
    // "description": "SpeakEase makes language learning fun and interactive—live conversation practice, game-based lessons, and instant feedback help you confidently speak a new language in weeks, not months.",
    // "size": 68,
    // "reviews": 3300,
    // "ratingAvg": 4.7,
    // "downloads": 240000,

    function handleInstallBtn() {
        setInstall(true)

        
            toast("App installed successfully") 
        

    }

    return (
        <div className='bg-[#f5f5f5] px-[50px] pt-20 pb-20 '>
            <div className='flex gap-20   '>
                <div >
                    <img className='h-[350px] w-[350px]' src={datas.image} alt="" />
                </div>
                <div>
                    <h1 className='font-semibold text-4xl '>
                        {datas.title}
                    </h1 >
                    <p className='font-semibold text-xl text-[#647584]
                         mt-3.5 mb-8 border-b border-dashed pb-8 '>
                        Developed by <span className='text-[#7a44e9] '>{datas.companyName}</span>
                    </p>
                    <div className='flex gap-10 mb-11'>
                        <div className='space-y-0.5 '>
                            <img src={downloadImg} />
                            <p className='text-[#647584]'>Downloads</p>
                            <h1 className='font-bold text-4xl '>{datas.downloads / 1000000}M</h1>
                        </div>
                        <div className='space-y-0.5 '>
                            <img src={ratingImg} />
                            <p className='text-[#647584]'>Average Ratings</p>
                            <h1 className='font-bold text-4xl '>{datas.ratingAvg}</h1>
                        </div>
                        <div className='space-y-0.5 '>
                            <img src={reviewImg} />
                            <p className='text-[#647584]'>Total Reviews</p>
                            <h1 className='font-bold text-4xl '>{datas.reviews / 1000}K</h1>
                        </div>
                    </div>
                    <button
                        onClick={() => handleInstallBtn()}
                        disabled={install}
                        className={`btn bg-[#00d390] rounded-lg
                         text-white  text-lg py-3 px-5  `}
                    >{install ? "Installed" : `Install Now (${datas.size}MB)`}

                    </button>

                </div>
            </div>

            <div className='mt-5 mb-20 '>
                <h1 className='font-semibold text-2xl mb-3 '>Ratings</h1>
                <BarChart height={600} width={800} data={chartData} layout='horizontal'>
                    <XAxis dataKey='name'>

                    </XAxis>
                    <YAxis ></YAxis>
                    <Bar dataKey='count' fill='#ff8811' barSize={60}></Bar>

                </BarChart>
            </div>

            <div>
                <h1 className='font-semibold text-2xl mb-3 '>Description</h1>
                <p className='text-xl text-[#a1abb3] '>
                    {datas.description}
                </p>
            </div>

            <ToastContainer />

        </div>
    );
};

export default CardDetails;