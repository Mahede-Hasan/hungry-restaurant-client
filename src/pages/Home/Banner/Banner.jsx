import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import banner images
import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';
import img5 from '../../../assets/home/05.png';
import img6 from '../../../assets/home/06.png';
import './Banner.css'

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';

import './Banner.css'

const Banner = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    
    const images = [img1, img2, img3, img4, img5, img6]
    return (
        <div>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                autoplay={{ delay: 3000 }}
                spaceBetween={0}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
                
            >

                {
                    images.map((img,index) => <SwiperSlide key={index}>
                        <img className='md:h-[600px] lg:h-[750px] w-full mb-10' src={img} />
                    </SwiperSlide>)
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={0}
                slidesPerView={6}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={`mySwiper w-[80%] lg:w-[50%] mx-auto mb-10`}
                
            >
                {
                    images.map((img,index) => <SwiperSlide className='cursor-pointer swiper-thumbnail' key={index}>
                        <img className='lg:px-6 px-0.5 w-full' src={img} />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Banner;