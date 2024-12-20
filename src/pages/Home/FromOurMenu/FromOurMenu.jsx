import React from 'react';
import './FromOurMenu.css'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
const FromOurMenu = () => {
    return (
        <div className='from-our-menu-container max-w-6xl mx-auto pb-20 pt-8 relative mb-20'>

        {/* overlay color */}
        <div className='absolute inset-0 bg-black bg-opacity-40 z-0'></div>

           <div className='relative z-10'>
           <SectionTitle
            subHeading="Check it Out"
            heading="from our menu"
            style="text-white"
            ></SectionTitle>

            <div className='grid md:grid-cols-2 mx-10 gap-10 items-center'>
                <img src={featuredImg} alt="" />
                <div className='text-white space-y-3'>
                    <h3>March 20,2024</h3>
                    <h3>Where can i get some?</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi doloribus voluptatem veritatis id veniam voluptate repudiandae consectetur dolores, magnam laborum?</p>


                    <div className='my-10 flex justify-start'> <button className='uppercase border-b-4 rounded-xl py-2 px-6 hover:bg-gray-200 transition-all duration-500'>Read More</button></div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default FromOurMenu;