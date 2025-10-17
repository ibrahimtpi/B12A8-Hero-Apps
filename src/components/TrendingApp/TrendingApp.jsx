import React from 'react';
import { Link } from 'react-router';
import NumberCounter from '../../components/NumberCounter/NumberCounter';
import { GoDownload } from 'react-icons/go';
import { FaStar } from 'react-icons/fa6';

const TrendingApp = ({singleApp}) => {
    // console.log(singleApp);
    
    const {id, image, companyName, title, description, downloads, ratingAvg, ratings, reviews, size} = singleApp;

    return (
        <Link to={`/appDetails/${id}`}>
            <div className='bg-white shadow-md p-4'>
                <figure>
                    <img src={image} alt={title} className='w-full rounded-lg' />
                </figure>
                <h3 className='text-left text-xl font-medium py-2'>{title}</h3>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-1 bg-[#F1F5E8] text-[#00D390] px-1 rounded-sm'>
                        <GoDownload />
                        <NumberCounter count={downloads}></NumberCounter>
                    </div>
                    <div className='flex items-center gap-1 bg-[#FFF0E1] text-[#FF8811] px-1 rounded-sm'>
                        <FaStar />
                        <span>{ratingAvg}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TrendingApp;