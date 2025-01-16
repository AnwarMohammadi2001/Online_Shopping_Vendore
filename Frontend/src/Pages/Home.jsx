import React from "react";
import { Link } from "react-router-dom";

import nike from "../assets/images/nike1.png";
import bag from "../assets/images/categories/bags.jpg";
import boot from "../assets/images/categories/boot.jpg";
import jewelry from "../assets/images/categories/jewelry.jpeg";
import kids from "../assets/images/categories/kids.jpeg";
import men from "../assets/images/categories/men.jpeg";
import shoes from "../assets/images/categories/shoes.webp";
import shose1 from "../assets/images/categories/shose1.webp";
import watch from "../assets/images/categories/wathc.jpeg";
import women from "../assets/images/categories/women.jpeg";
import Hero from "../component/Hero/Hero";
import PopularBrands from "../component/Brands/PopularBrands";

const Home = () => {
  const categories = [
    { name: "Men", image: men, link: "/men" },
    { name: "Women", image: women, link: "/women" },
    { name: "Kids & Baby", image: kids, link: "/kids" },
    { name: "Dresses", image: kids, link: "/dresses" },
    { name: "Tops", image: bag, link: "/tops" },
    { name: "Sports & Outdoor", image: shoes, link: "/sports-outdoor" },
    { name: "Underwear", image: women, link: "/underwear" },
    { name: "Home & Living", image: shose1, link: "/home-living" },
    { name: "Shoes", image: boot, link: "/shoes" },
    { name: "Bags", image: bag, link: "/bags" },
    { name: "Jewelry", image: jewelry, link: "/jewelry" },
    { name: "Watches", image: watch, link: "/watches" },
    // { name: "Beauty", image: shoes, link: "/beauty" },
  ];

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center cursor-pointer h-[80vh] flex items-center justify-center text-center relative"
        style={{ backgroundImage: `url(${nike})` }}
      >
        {/* Content */}
      </section>
      <Hero />
      {/* Featured Categories */}
      <section className="py-12">
        <div className="max-w-8xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {/* Category Cards */}
            {categories.map((category, index) => (
              <Link
                to={category.link}
                key={index}
                className=" block overflow-hidden rounded-md"
              >
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-60 object-cover   transition-transform duration-300 group-hover:scale-105"
                />
                {/* Title Below Image */}
                <div className="text-center mt-3">
                  <h3 className="text-black text-xl font-semibold ">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Limited Time Offers
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Don’t miss out on our special deals! Shop now and enjoy amazing
            discounts on your favorite items.
          </p>
          <Link
            to="/offers"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg shadow-md font-medium hover:bg-gray-100 transition duration-300"
          >
            View Offers
          </Link>
        </div>
      </section>

     
      <PopularBrands />
    </div>
  );
};

export default Home;
