import React from 'react';
import { Link } from 'react-router';
import TrendingApp from '../TrendingApp/TrendingApp';

const TrendingApps = ({appsData}) => {
    const limitAppsData = appsData.slice(0, 8);
    // console.log(limitAppsData)

    return (
        <div className='max-w-[1440px] mx-auto p-10'>            
            <div className='text-center'>
                <h2 className='text-3xl xl:text-5xl font-bold mb-6'>Trending Apps</h2>
                <p className='text-base xl:text-xl text-[#627382] mb-10'>Explore All Trending Apps on the Market developed by us</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        limitAppsData.map((singleApp) => <TrendingApp key={singleApp.id} singleApp={singleApp}></TrendingApp>)
                    }
                </div>
                <div>
                    <Link to="/apps"><button className='btn btn-purple text-white my-10 rounded-xl'>Show All</button></Link>                    
                </div>
            </div>
        </div>
    );
};

export default TrendingApps;