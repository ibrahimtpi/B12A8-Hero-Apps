import React from 'react';
import './Banner.css'
import bannerImg from '../../assets/images/hero.png'
import playStoreImg from '../../assets/images/icon-play-store.png'
import appStoreImg from '../../assets/images/icon-app-store.png'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className='text-center p-17 pb-0'>
                <h2 className='text-3xl xl:text-7xl font-bold mb-6 max-w-2/3 xl:max-w-6/12 mx-auto'>We Build <span>Productive</span> Apps</h2>
                <p className='text-base xl:text-xl text-[#627382] mb-6 xl:px-10 max-w-5xl mx-auto'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='mb-5'>
                    <Link to={'https://play.google.com/store/apps'} target='_blank'>
                        <button className='btn mb-2 mr-4 p-5'><img src={playStoreImg} alt="icon-play-store" className='mx-auto'/> Google Play</button>
                    </Link>
                    <Link to={'https://www.apple.com/app-store/'} target='_blank'>
                        <button className='btn mb-2 p-5'><img src={appStoreImg} alt="icon-app-store" className='mx-auto'/> App Store</button>
                    </Link>
                </div>

                <img src={bannerImg} alt="Banner Image" className='mx-auto'/>
            </div>
        </div>
    );
};

export default Banner;