import React, { use } from 'react';
import Banner from '../../components/Banner/Banner';
import Facts from '../../components/Facts/Facts';
import TrendingApps from '../../components/TrendingApps/TrendingApps';

const Home = ({appsPromise}) => {
    const appsData = use(appsPromise);

    return (
        <>
            <Banner></Banner>
            <Facts></Facts>
            <TrendingApps key={appsData.id} appsData={appsData}></TrendingApps>
        </>
    );
};

export default Home;