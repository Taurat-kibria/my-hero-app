import React from 'react';
import { IoMdDownload } from 'react-icons/io';
import downloadImg from '../../assets/icon-downloads.png'
import starImg from '../../assets/icon-ratings.png'



// "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
// "title": "FoodieHub",
// "companyName": "UrbanEats Co.",
// "id": 5,
// "description": "FoodieHub is your all‑in‑one gastronomic guide: discover new restaurants, browse curated meal photos, read verified reviews, and place orders with one tap. Whether you're planning a dinner outing or a quick lunch delivery, FoodieHub simplifies the experience and adds inspiration to every bite.",
// "size": 96,
// "reviews": 6700,
// "ratingAvg": 4.7,
// "downloads": 500000,
// "ratings": [
//   { "name": "1 star", "count": 380 },
//   { "name": "2 star", "count": 460 },
//   { "name": "3 star", "count": 720 },
//   { "name": "4 star", "count": 1420 },
//   { "name": "5 star", "count": 3720 }

const AppDisplay = ({ data }) => {
    // console.log(data)
    return (
        <div className='rounded-lg p-4 bg-white space-y-2.5 '>

            <img
                className='h-[300px] w-[300px] rounded-lg '
                src={data.image}
            />

            <p className='font-semibold text-xl'>
                {data.title}
            </p>

            <div className='flex justify-between'>
                <button className='flex items-center btn text-[#00d390] 
                    bg-[#f1f5e8] font-bold '>
                    <img className='h-4 w-4 mr-1  ' src={downloadImg} alt="" />
                    <p>9M</p>
                </button>
                <button className='flex items-center btn text-[#ff8811]
                    bg-[#fff0e1] font-bold '>
                    <img className='h-4 w-4 mr-1  ' src={starImg} alt="" />
                    <p>9M</p>
                </button>
            </div>


        </div>
    );
};

export default AppDisplay;