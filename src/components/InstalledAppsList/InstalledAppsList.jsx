import React, {  useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstalledApps, removeAppFromDB } from '../../utility/addToDB';
import Installation from '../Installation/Installation';

const InstalledAppsList = () => {
    const data = useLoaderData();
    const [installedAppList, setInstalledAppList] = useState([]);

    useEffect(()=>{
        const installedAppData = getInstalledApps();
        const convertedStoredApps = installedAppData.map(id => parseInt(id));
        const myInstalledApps = data.filter(app => convertedStoredApps.includes(app.id));
        setInstalledAppList( myInstalledApps );
    },[data]);

    // 3. Define the removal function
    const removeApp = (appIdToRemove) => {
        setInstalledAppList(prevList => {
            const newList = prevList.filter(app => app.id !== appIdToRemove);
            return newList;
        });

        removeAppFromDB(appIdToRemove);
    };

    const handleSort = (sortType) => {
        if(sortType === 'highLow') {
            const sortedByDownload = [...installedAppList].sort((a,b)=>b.downloads - a.downloads);
            setInstalledAppList(sortedByDownload);
        } else if (sortType === 'lowHigh') {
            const sortedByDownload = [...installedAppList].sort((a,b)=>a.downloads - b.downloads);
            setInstalledAppList(sortedByDownload);
        }
    }

    return (
        <div className='max-w-[1440px] mx-auto p-4 lg:p-10'>
            <h1 className='text-3xl xl:text-5xl text-center font-bold my-4'>Your Installed Apps</h1>
            <p className='text-base xl:text-xl text-center text-[#627382] mb-6'>Explore All Trending Apps on the Market developed by us</p>
            <div className='flex flex-col md:flex-row gap-2 justify-between items-center mb-6'>
                <p className='text-xl xl:text-2xl font-semibold'>{installedAppList.length} Apps Found</p>
                <div>
                    <fieldset className="fieldset">
                        <select defaultValue="Sort By Downloads" className="select" onChange={(e) => handleSort(e.target.value)}>
                            <option disabled={true}>Sort By Downloads</option>
                            <option value="highLow">High-Low</option>
                            <option value="lowHigh">Low-High</option>
                        </select>
                    </fieldset>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {
                    installedAppList.map((installedApp) => <Installation key={installedApp.id} installedApp={installedApp} onRemoveApp={removeApp}></Installation>)
                }            
            </div>
        </div>
    );
};

export default InstalledAppsList;