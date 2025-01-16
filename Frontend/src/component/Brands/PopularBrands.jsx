import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import brand1 from "../../assets/brands/brand1.png";
import brand2 from "../../assets/brands/brand2.png";
import brand3 from "../../assets/brands/brand3.jpg";
import brand4 from "../../assets/brands/brand4.jpg";
import brand5 from "../../assets/brands/brand5.jpg";
import brand6 from "../../assets/brands/brand5.jpg";
import brand7 from "../../assets/brands/brand7.jpg";
import brand8 from "../../assets/brands/brand8.png";
import brand9 from "../../assets/brands/brand9.png";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { GiStarFormation } from "react-icons/gi";

import "swiper/css";
import "swiper/css/navigation";

const PopularBrands = () => {
  const brands = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
  ];

  return (
    <div className="w-full py-8  bg-white">
      <div className="relative group max-w-[90%] border rounded-3xl h-[270px] mx-auto">
        <div className=" font-bold  flex justify-center items-center gap-x-5 mt-5">
          <span className="text-3xl">Popular Brands</span>
          <span>
            <GiStarFormation size={32} className="text-yellow-500" />
          </span>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10} // Space between slides
          slidesPerView={8} // Show 6 items at once
          autoplay={{
            delay: 1000, // Delay between slides
            disableOnInteraction: false, // Continue autoplay even after user interaction
          }}
          loop={true} // Enable loop
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          className="mt-10"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="w-[150px] h-[150px]  justify-center  flex items-center">
                <img
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className="w-full h-full mix-blend-multiply object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="button-prev-slide hidden group-hover:flex  w-[40px] h-[40px] items-center justify-center rounded-full absolute left-2 z-20 top-1/2 -translate-y-1/2 bg-gray-300">
          <MdArrowBackIos size={24} />
        </div>
        <div className="button-next-slide hidden group-hover:flex   w-[40px] h-[40px] items-center justify-center rounded-full absolute right-2 z-20 top-1/2 -translate-y-1/2 bg-gray-300">
          <MdArrowForwardIos size={24} />
        </div>
      </div>
    </div>
  );
};

export default PopularBrands;
