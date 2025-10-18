import React, { Suspense, use, useState } from 'react';
import AppItem from '../AppItem/AppItem';
import appStoreImg from '../../assets/images/icon-search.png'
import appNotFound from '../../assets/images/App-Error.png'
import { useNavigate } from 'react-router';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const AllApps = ({appsPromise}) => {
    const allAppsData = use(appsPromise);
    // console.log(allAppsData);
    const [search, setSearch] = useState('');
    const trimedSearch = search.trim().toLowerCase();

    const [isSearching, setIsSearching] = useState(false);
    const handleSearchChange = (e) => {
        const newSearchTerm = e.target.value;
        setSearch(newSearchTerm);
        setIsSearching(true); // START loading animation

        // Simulate a brief network/processing delay (e.g., 300ms)
        // In a real app with a backend search, this would be done inside a debounce.
        setTimeout(() => {
            setIsSearching(false); // STOP loading animation
        }, 100);
    };

    const searchedApps = trimedSearch ? allAppsData.filter(appsData => appsData.title.toLowerCase().includes(trimedSearch)) : allAppsData;
    // console.log(searchedApps);
        
    // Determine if any apps were found
    const appsFound = searchedApps.length > 0;
    
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); // Go back one step in history
    };

    return (
        <div className='all-apps'>
            <div className="max-w-[1440px] mx-auto p-10">
                <h2 className='text-3xl xl:text-5xl font-bold text-center my-4'>Our All Applications</h2>
                <p className='text-base xl:text-xl text-[#627382] text-center mb-6'>Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className='flex flex-col md:flex-row gap-2 justify-between items-center mb-6'>
                    <p className='text-xl xl:text-2xl font-semibold'>({appsFound ? searchedApps.length : 0}) Apps Found</p>
                    <div><input type="search" className='px-4 py-2 border-1 border-[#D2D2D2] rounded-sm' placeholder='search Apps' value={search} onChange={handleSearchChange} style={{backgroundImage: `url(${appStoreImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: '10px center', paddingLeft: '35px',}}/></div>
                </div>
                
                    {/* {
                        searchedApps.map((singleApp) => <AppItem key={singleApp.id} singleApp={singleApp}></AppItem>) 
                    } */}
                    
                    {/* Conditional Rendering Logic */}
                    {isSearching ? (
                        // Show spinner while search is processing
                        <LoadingSpinner />

                    ) : searchedApps.length > 0 ? (
                        // 1. If apps are found, render the grid
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                            {
                                searchedApps.map((singleApp) => (
                                    <AppItem key={singleApp.id} singleApp={singleApp}></AppItem>
                                ))
                            }
                        </div>
                    ) : (
                        // 2. If NO apps are found, render the alert message
                        <div className="flex flex-col justify-center items-center gap-4 px-4 py-3 rounded relative text-center mt-8">
                            <img src={appNotFound} alt="Apps Not Found!" width={410} />
                            <h2 className="text-4xl font-bold">OPPS!! APP NOT FOUND</h2>
                            <p className="block sm:inline">The App "{search}" you are requesting is not found on our system.  please try another apps</p>
                            <button onClick={handleGoBack} className='btn btn-purple text-white'>Go Back!</button>
                        </div>
                    )}
                    
            </div>
        </div>
    );
};

export default AllApps;