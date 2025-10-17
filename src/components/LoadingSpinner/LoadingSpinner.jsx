import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            <p className="ml-3 text-lg text-gray-600">Loading...</p>
        </div>
    );
};

export default LoadingSpinner;