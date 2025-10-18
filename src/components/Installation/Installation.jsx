import React from 'react';
import NumberCounter from '../../components/NumberCounter/NumberCounter';
import { GoDownload } from "react-icons/go";
import { FaStar } from "react-icons/fa6";

const Installation = ({ installedApp, onRemoveApp }) => {
    const {id, image, title, downloads, ratingAvg, size} = installedApp;
    
    const handleRemoveClick = (id) => {
        onRemoveApp(id); 
    };

    return (
        <div className='installed-app bg-white flex flex-col sm:flex-row justify-between sm:items-center p-4'>
            <div className='flex items-center gap-3 '>
                <figure>
                    <img src={image} alt={title} className='w-full rounded-lg max-w-20' />
                </figure>
                <div className='flex flex-col'>
                    <h2>{title}</h2>
                    <div className='flex gap-4'>
                        <span className='flex items-center gap-1 text-[#00D390]'><GoDownload /><NumberCounter count={downloads}></NumberCounter></span>
                        <span className='flex items-center gap-1 text-[#FF8811]'><FaStar /> {ratingAvg}</span>
                        <span className='text-[#627382]'>{size} MB</span>
                    </div>
                </div>
            </div>
            <div className='ml-24 mt-3 sm:m-0'>
                <button onClick={()=>handleRemoveClick(id)} className='btn btn-green text-white'>Uninstall</button>
            </div>
        </div>
    );
};

export default Installation;