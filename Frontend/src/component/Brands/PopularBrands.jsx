import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

// Import your brand logo images
import brand1 from "../../assets/brands/brand1.png";
import brand2 from "../../assets/brands/brand2.png";
import brand3 from "../../assets/brands/brand3.jpg";
import brand4 from "../../assets/brands/brand4.jpg";
import brand5 from "../../assets/brands/brand5.jpg";
import brand6 from "../../assets/brands/brand5.jpg";
import brand7 from "../../assets/brands/brand7.jpg";
import brand8 from "../../assets/brands/brand8.png";
import brand9 from "../../assets/brands/brand9.png";

const PopularBrands = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % (brands.length - 5)); // to ensure we only slide 1 item at a time
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + (brands.length - 5)) % (brands.length - 5)); // to ensure we only slide 1 item at a time
  };

  return (
    <div className="w-full py-8 bg-white">
      <div className="relative max-w-7xl border h-[270px] mx-auto">
        <h2 className="text-2xl font-bold text-center mt-5">Popular Brands</h2>
        <div className="flex items-center justify-center mt-10 overflow-hidden">
          <div
            className="flex transition-transform gap-x-10 duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / 6)}%)`,
            }}
          >
            {brands.map((brand, index) => (
              <div
                key={index}
                className="w-[150px] rounded-full h-[150px] border flex items-center justify-center"
              >
                <img
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className="w-full h-full mix-blend-multiply object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute -left-6 top-1/2 transform flex justify-center items-center -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
        >
          <MdArrowBackIos size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-6 top-1/2 transform flex justify-center items-center -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
        >
          <MdArrowForwardIos size={24} />
        </button>
      </div>
    </div>
  );
};

export default PopularBrands;
