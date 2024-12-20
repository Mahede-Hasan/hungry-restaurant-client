import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import axios from 'axios';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { ImQuotesLeft } from 'react-icons/im';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axios.get('./reviews.json')
            .then(res => setReviews(res.data))
    }, [])

    return (
        <div className='mb-20 max-w-6xl mx-auto'>
            <SectionTitle subHeading="What Our Clients Say" heading="testimonials"></SectionTitle>


            <Swiper
                autoplay={{
                    delay: 3000
                }}
                navigation={true}
                loop={true}
                modules={[Navigation, Autoplay]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center justify-center">

                            <Rating className='' 
                            style={{ maxWidth: 150 }} 
                            value={review.rating} />

                            <h1 className='text-5xl pt-6'><ImQuotesLeft /></h1>

                            <p className='px-20 tex-center py-5'>{review.details}</p>
                            <h3 className='text-center text-3xl font-semibold'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default CustomerReview;