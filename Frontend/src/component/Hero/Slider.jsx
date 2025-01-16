import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import hero1 from '../../assets/images/hero1.webp'
import hero2 from '../../assets/images/her03.webp'
import hero3 from '../../assets/images/hero2.webp'
import hero4 from '../../assets/images/hero4.webp'
import hero5 from '../../assets/images/hero5.webp'
import hero6 from '../../assets/images/hero6.webp'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const images = [
    hero1,
    hero2,
    hero3,
    hero4,
    hero5,
    hero6
  ];

  return (
    <div className="w-full border h-[400px] mt-1">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className=" overflow-hidden shadow-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full  object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
