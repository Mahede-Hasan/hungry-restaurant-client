import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

// import images
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';

const PopularItems = () => {

    return (
        <div className='my-20'>
            <SectionTitle heading="order online" subHeading="From 11:00am to 10:00pm"></SectionTitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper max-w-6xl mx-auto"
      >
        <SwiperSlide><img src={slide1} alt="" /><h1 className='absolute bottom-10 font-semibold bg-black z-10 w-full py-4 bg-opacity-50 text-white text-2xl text-center'>Salad</h1></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /><h1 className='absolute bottom-10 font-semibold bg-black z-10 w-full py-4 bg-opacity-50 text-white text-2xl text-center'>Pizza</h1> </SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /><h1 className='absolute bottom-10 font-semibold bg-black z-10 w-full py-4 bg-opacity-50 text-white text-2xl text-center'>Soup</h1> </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /><h1 className='absolute bottom-10 font-semibold bg-black z-10 w-full py-4 bg-opacity-50 text-white text-2xl text-center'>Cake</h1> </SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /><h1 className='absolute bottom-10 font-semibold bg-black z-10 w-full py-4 bg-opacity-50 text-white text-2xl text-center'>Salad</h1> </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default PopularItems;