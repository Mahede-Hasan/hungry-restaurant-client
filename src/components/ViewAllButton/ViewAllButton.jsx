import React from 'react';

const ViewAllButton = ({buttonText}) => {
    return (
        <div className='my-10 flex justify-center'> <button className='uppercase border-b-4 rounded-xl py-2 px-6 hover:bg-gray-200 transition-all duration-500 '>{buttonText}</button></div>
    );
};

export default ViewAllButton;