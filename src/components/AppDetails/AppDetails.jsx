import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadImg from '../../assets/images/icon-downloads.png'
import ratingsImg from '../../assets/images/icon-ratings.png'
import reviewImg from '../../assets/images/icon-review.png'
import NumberCounter from '../NumberCounter/NumberCounter';
import { installToStoreDB, getInstalledApps } from '../../utility/addToDB';

import {ComposedChart, Bar, XAxis, YAxis, ResponsiveContainer,} from 'recharts';

const AppDetails = () => {
    const {id} = useParams();
    const appId = parseInt(id);
    
    const [isInstalled, setIsInstalled] = useState(() => {
      return getInstalledApps().includes(appId);
    });

    const data = useLoaderData();
    const singleApp = data.find(book => book.id === appId);
    const { title, image, companyName, description, downloads, ratingAvg, ratings, reviews, size} = singleApp || {};

    const sortedRatings = [...ratings].sort((a, b) => {
        const getStarValue = (name) => parseInt(name.split(' ')[0]);

        const starA = getStarValue(a.name);
        const starB = getStarValue(b.name);

        return starB - starA;
    });

    const handleMarkAsRead = appId => {
        installToStoreDB(appId);
        setIsInstalled(true);
    }

    return (
        <div className='app-details'>
            <div className='max-w-[1440px] mx-auto p-4 md:p-10'>
                <div className="flex flex-col md:flex-row md:items-center gap-10">
                    <div className="w-2/3 md:w-1/3">
                        <figure>
                            <img src={image} alt={title} className='w-full rounded-lg' />
                        </figure>                    
                    </div>
                    <div className="w-full md:w-2/3">                    
                        <h1 className='text-3xl font-bold mb-2'>{title}</h1>
                        <p className='border-b-1 border-[#001931]/20 pb-2'>Developed by {companyName}</p>
                        <div className="flex gap-4 my-4 max-w-lg">
                            <div className="flex-1">
                                <img src={downloadImg} alt="Download Image" />
                                <p className='my-1'>Downloads</p>
                                <p className='text-2xl md:text-4xl font-extrabold'><NumberCounter count={downloads}></NumberCounter></p>
                            </div>
                            <div className="flex-1">
                                <img src={ratingsImg} alt="Ratings Image" />
                                <p className='my-1'>Average Ratings</p>
                                <p className='text-2xl md:text-4xl font-extrabold'>{ratingAvg}</p>
                            </div>
                            <div className="flex-1">
                                <img src={reviewImg} alt="Review Image" />
                                <p className='my-1'>Total Reviews</p>
                                <p className='text-2xl md:text-4xl font-extrabold'><NumberCounter count={reviews}></NumberCounter></p>
                            </div>
                        </div>
                        <div className="mt-2">
                            <button onClick={()=>handleMarkAsRead(appId)} style={{backgroundColor: isInstalled ? '#ccc' : '#00D390', cursor: isInstalled ? 'not-allowed' : 'pointer',}} className="btn text-white" disabled={isInstalled}>
                                {isInstalled ? 'Installed' : 'Install Now'} ({size} MB)
                            </button>
                        </div>
                    </div>
                </div>
                <div className="ratings py-6 my-6 border-y-1 border-[#001931]/20">
                    <h3 className='text-2xl font-semibold mb-2'>Ratings</h3>

                    <div className='h-80'>
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart layout="vertical" width={500} height={400} 
                            data={sortedRatings} margin={{top: 20, right: 20, bottom: 20, left: 0,}}>
                                <YAxis dataKey="name" type="category" scale="band" />
                                <XAxis type="number" />
                                <Bar dataKey="count" barSize={32} fill="#FF8811" />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="description pb-4">
                    <h3 className='text-2xl font-semibold mb-2'>Description</h3>
                    {description}
                </div>
            </div>
        </div>
    );
};

export default AppDetails;