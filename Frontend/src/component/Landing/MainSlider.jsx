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
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainSlider = () => {
  const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];

  return (
    <div className="w-full group mt-1 relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} bg-gray-300  text-gray-800 rounded-full w-8 h-8 flex items-center justify-center mx-1 font-bold hover:bg-red-500 hover:text-white transition duration-200"></span>`,
        }}
        autoplay={{ delay: 3000 }}
        loop
        spaceBetween={50}
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
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}

        {/* Navigation buttons */}
        <div className="button-next-slide flex w-[60px] h-[40px] items-center justify-center rounded-l-full absolute top-1/2 -translate-y-1/2 right-0 px-4 z-20 bg-white shadow-md hover:bg-gray-200 transition duration-200">
          <MdArrowForwardIos className="font-bold text-red-600" />
        </div>
        <div className="button-prev-slide flex w-[60px] h-[40px] items-center justify-center rounded-r-full absolute top-1/2 -translate-y-1/2 left-0 px-4 z-20 bg-white shadow-md hover:bg-gray-200 transition duration-200">
          <MdArrowBackIos className="text-red-600 font-bold" />
        </div>
      </Swiper>

      {/* Tailwind styles for active pagination */}
      <style>
        {`
          .swiper-pagination-bullet-active {
            @apply bg-red-500 text-white  scale-110;
          }
        `}
      </style>
    </div>
  );
};

export default MainSlider;
