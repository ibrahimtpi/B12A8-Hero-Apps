import React from 'react';
import './Facts.css'

const Facts = () => {
    return (
        <div className='facts p-10'>
            <div className='max-w-[1440px] mx-auto'>
                <h2 className='text-3xl xl:text-5xl text-center text-white font-bold my-6'>Trusted by Millions, Built for You</h2>
                <div className='flex flex-col xl:flex-row gap-10 xl:gap-4 px-10 lg:px-32 py-10 text-center text-white'>
                    <div className="flex-1">
                        <span>Total Downloads</span>
                        <h3 className='font-extrabold text-3xl xl:text-6xl py-2 xl:py-4'>29.6M</h3>
                        <span>21% more than last month</span>
                    </div>
                    <div className="flex-1">
                        <span>Total Reviews</span>
                        <h3 className='font-extrabold text-3xl xl:text-6xl py-2 xl:py-4'>906K</h3>
                        <span>46% more than last month</span>
                    </div>
                    <div className="flex-1">                        
                        <span>Active Apps</span>
                        <h3 className='font-extrabold text-3xl xl:text-6xl py-2 xl:py-4'>132+</h3>
                        <span>31 more will Launch</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facts;