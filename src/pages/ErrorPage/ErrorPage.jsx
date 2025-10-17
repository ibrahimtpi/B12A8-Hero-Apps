import React from 'react';
import Header from '../../components/Header/Header';
import errorImg from '../../assets/images/error-404.png'

const ErrorPage = () => {
    return (
        <>
            <Header></Header>
            <div className='404-not-found p-17'>
                <figure>
                    <img src={errorImg} alt="404-not-found" className='mx-auto' />
                </figure>
                <div className="text-center">
                    <h2 className='text-5xl font-bold mt-6'>Oops, page not found!</h2>
                    <p className='text-xl text-[#627382] mt-4 mb-6'>The page you are looking for is not available.</p>
                    <button onClick='' className='btn btn-purple text-white'>Go Back!</button>
                </div>
            </div>            
        </>
    );
};

export default ErrorPage;