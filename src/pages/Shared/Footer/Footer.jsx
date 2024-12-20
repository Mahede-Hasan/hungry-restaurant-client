import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>

          <div className='grid md:grid-cols-2 grid-cols-1'>

            <div className='flex flex-col justify-center items-center bg-[#1F2937] py-10 text-white'>
            <h2 className='uppercase text-3xl font-semibold text-white pb-4'>Contact us</h2>
            <p className='text-[13px] pt-2'>265/70 ABC street, road-4, Bangladesh</p>
             <p className='text-[13px] pt-2'>Call Us: +8801965877742</p>
             <p className='text-[13px] pt-2'>Mon-Fri: 08:00-22:00</p>
             <p className='text-[13px] pt-2'>Sat-Sun: 10:00-23:00</p>
            </div>

            <div className='flex flex-col justify-center items-center bg-[#111827] py-10 text-white'>
            <h2 className='uppercase text-3xl font-semibold pb-4'>Follow us</h2>
            <p className='text-[13px] pt-2'>Follow us on social media</p>
            <div className='flex mt-4 gap-4 text-xl'>
              <FaFacebook className='cursor-pointer hover:text-gray-400 transition-all duration-500'></FaFacebook>
              <FaInstagram className='cursor-pointer hover:text-gray-400 transition-all duration-500'></FaInstagram>
              <FaTwitter className='cursor-pointer hover:text-gray-400 transition-all duration-500'></FaTwitter>
            </div>
            </div>

          </div>

          <div className='bg-black opacity-90  text-white py-3'>
          <small className='text-center'><p>Copyright ©HungryRestaurant. All right reserve</p></small>
          </div>
        </footer>
    );
};

export default Footer;