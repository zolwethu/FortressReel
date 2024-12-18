import React from "react";
import './movieSwiper.css';

// Import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import swiper modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';

function MovieSwiper({ slides, slideChange }) {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            loop={true}
            modules={[Autoplay, EffectCoverflow]}
            className="movieSwiper"
        >
            {slides && slides.length > 0 ? (
                slides.map((slide, index) => (
                    <SwiperSlide key={slide._id}>
                        <img src={slide.previewImg} alt={`Preview Image ${index}`} onClick={() => slideChange(slide._id)} />
                    </SwiperSlide>
                ))
            ) : (
                <p>No slides available</p>
            )}
        </Swiper>
    );
}

export default MovieSwiper;
