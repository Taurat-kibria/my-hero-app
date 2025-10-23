
import { useLoaderData } from 'react-router';
import demo from '../../assets/demo-app (1).webp'
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import reviewImg from '../../assets/icon-review.png'



const CardDetails = () => {
    // const data = useContext(DataContext)
    // console.log(data)
    const data = useLoaderData()
    console.log(data)
    return (
        <div className='bg-[#f5f5f5] px-[50px] pt-20 '>
            <div className='flex gap-8   '>
                <div >
                    <img className='h-[350px] w-[350px]' src={demo} alt="" />
                </div>
                <div>
                    <h1 className='font-semibold text-4xl '>
                        SmPlan:ToDo List with Reminder
                    </h1 >
                    <p className='font-semibold text-xl text-[#647584]
                         mt-3.5 mb-8 border-b border-dashed pb-8 '>
                        Developed by <span className='text-[#7a44e9] '>llll</span>
                    </p>
                    <div className='flex justify-around mb-11'>
                        <div className='space-y-0.5 '>
                            <img src={downloadImg}  />
                            <p className='text-[#647584]'>Downloads</p>
                            <h1 className='font-bold text-4xl '>8M</h1>
                        </div>
                        <div className='space-y-0.5 '>
                            <img src={ratingImg}  />
                            <p className='text-[#647584]'>Average Ratings</p>
                            <h1 className='font-bold text-4xl '>4.5</h1>
                        </div>
                        <div className='space-y-0.5 '>
                            <img src={reviewImg}  />
                            <p className='text-[#647584]'>Total Reviews</p>
                            <h1 className='font-bold text-4xl '>54K</h1>
                        </div>
                    </div>
                    <button
                        className='btn bg-[#00d390] rounded-lg
                         text-white  text-lg py-3 px-5 '
                        >Install Now (291MB)

                    </button>
                </div>
            </div>
            

            
        </div>
    );
};

export default CardDetails;