import React from 'react';
import Banner from '../../components/banner/banner';
import BannerPoster from '../../components/BannerPoster/BannerPoster';
import HomeApps from '../../components/homeApps/HomeApps';
import { useLoaderData } from 'react-router';


const Home = () => {

    const data8 = useLoaderData();
    // console.log(data8)
    return (
        <div className=''>
            <Banner></Banner>
            <BannerPoster></BannerPoster>
            <HomeApps data8={data8}></HomeApps>
            
        </div>
    );
};

export default Home;