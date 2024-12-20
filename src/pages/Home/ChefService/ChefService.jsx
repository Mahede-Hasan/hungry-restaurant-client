import React from 'react';
import './ChefService.css';
import chefImg from '../../../assets/home/chef-service.jpg'

const ChefService = () => {
    return (
        <div className='chef-service-container lg:h-[600px] md:h-[400px] h-[300px] max-w-6xl mx-auto flex justify-center items-center my-20'>
            <div className='flex flex-col justify-center bg-white text-center h-2/3 w-3/4 mx-auto'>
            <h1 className='text-3xl font-semibold mb-4'>Chef Service</h1>
            <p className='lg:px-20 md:px-12 px-4'>Meet our head chef, Daniels, a culinary artist with a passion for crafting unforgettable flavors. With locally sourced ingredients and innovative techniques, every dish is a masterpiece designed to delight your senses.</p>
            </div>

        </div>
    );
};

export default ChefService;