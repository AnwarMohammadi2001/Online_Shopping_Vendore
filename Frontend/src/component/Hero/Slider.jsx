import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import hero1 from "../../assets/images/hero1.webp";
import hero2 from "../../assets/images/her03.webp";
import hero3 from "../../assets/images/hero2.webp";
import hero4 from "../../assets/images/hero4.webp";
import hero5 from "../../assets/images/hero5.webp";
import hero6 from "../../assets/images/hero6.webp";
import hero7 from "../../assets/images/hero7.webp";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const images = [hero1, hero2, hero3, hero4, hero5, hero6 , hero7];

  return (
    <div className="w-full  group  mt-1 relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          clickable: true,
      
        }}
        autoplay={{ delay: 3000 }}
        loop
        spaceBetween={100}
        slidesPerView={1}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        grabCursor={true}
        className="overflow-hidden shadow-lg cursor-pointer"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer"
            />
          </SwiperSlide>
        ))}

        <div className="button-next-slide group-hover:flex hidden w-[40px] h-[40px] items-center justify-center rounded-full absolute right-10 z-20 bottom-10 bg-white">
          <MdArrowForwardIos />
        </div>
        <div className="button-prev-slide group-hover:flex hidden w-[40px] h-[40px] items-center justify-center rounded-full absolute right-24 z-20 bottom-10 bg-white">
          <MdArrowBackIos />
        </div>
      </Swiper>

 

    </div>
  );
};

export default Slider;
