import React from 'react';
import recimg1 from "../../assets/reccat/reccom1.webp";
import recimg2 from "../../assets/reccat/reccom2.webp";
import recimg3 from "../../assets/reccat/reccom3.webp";
import recimg4 from "../../assets/reccat/reccom4.webp";
import recimg5 from "../../assets/reccat/reccom5.webp";
import recimg6 from "../../assets/reccat/reccom6.webp";
import recimg7 from "../../assets/reccat/reccom7.webp";
import recimg8 from "../../assets/reccat/reccom8.webp";
import recimg9 from "../../assets/reccat/reccom9.webp";
import recimg10 from "../../assets/reccat/reccom10.webp";
import recimg11 from "../../assets/reccat/reccom11.webp";
import recimg12 from "../../assets/reccat/reccom12.webp";
import recimg13 from "../../assets/reccat/reccom13.webp";
import recimg14 from "../../assets/reccat/reccom14.webp";
import recimg15 from "../../assets/reccat/reccom15.webp";
import recimg16 from "../../assets/reccat/reccom16.webp";
import recimg17 from "../../assets/reccat/reccom17.webp";
import recimg18 from "../../assets/reccat/reccom18.webp";
import recimg19 from "../../assets/reccat/reccom19.webp";
import recimg20 from "../../assets/reccat/reccom20.webp";

const RecommendedCategory = () => {
    const recommcate = [
        {
            name: "Men's Hoodie",
            image: recimg1,
            path: "/categories/mens-hoodie",
        },
        {
            name: "Women's Hoodie",
            image: recimg2,
            path: "/categories/womens-hoodie",
        },
        {
            name: "Men's Sleepwear",
            image: recimg3,
            path: "/categories/mens-sleepwear",
        },
        {
            name: "Women's Sleepwear",
            image: recimg4,
            path: "/categories/womens-sleepwear",
        },
        {
            name: "Men's Boots",
            image: recimg5,
            path: "/categories/mens-boots",
        },
        {
            name: "Women's Boots",
            image: recimg6,
            path: "/categories/womens-boots",
        },
        {
            name: "Men's Coats and Jackets",
            image: recimg7,
            path: "/categories/mens-coats",
        },
        {
            name: "Women's Coats and Jackets",
            image: recimg8,
            path: "/categories/womens-coats",
        },
        {
            name: "Men's Sunglasses",
            image: recimg9,
            path: "/categories/mens-sunglasses",
        },
        {
            name: "Women's Sunglasses",
            image: recimg10,
            path: "/categories/womens-sunglasses",
        },
        {
            name: "Men's Watches",
            image: recimg11,
            path: "/categories/mens-watches",
        },
        {
            name: "Women's Watches",
            image: recimg12,
            path: "/categories/womens-watches",
        },
        {
            name: "Scarves and Headwear",
            image: recimg13,
            path: "/categories/scarves-headwear",
        },
        {
            name: "Men's Pants",
            image: recimg14,
            path: "/categories/mens-pants",
        },
        {
            name: "Women's Pants",
            image: recimg15,
            path: "/categories/womens-pants",
        },
        {
            name: "Men's Casual Shoes",
            image: recimg16,
            path: "/categories/mens-casual-shoes",
        },
        {
            name: "Women's Casual Shoes",
            image: recimg17,
            path: "/categories/womens-casual-shoes",
        },
        {
            name: "Men's Bags",
            image: recimg18,
            path: "/categories/mens-bags",
        },
        {
            name: "Women's Bags",
            image: recimg19,
            path: "/categories/womens-bags",
        },
    ];

  return (
    <div className='w-full flex items-center justify-center'>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mx-auto lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 place-content-center gap-4 w-[70%] p-4">
                {recommcate.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-auto object-cover mb-2 rounded"
                        />
                        <h3 className="text-center text-sm text-gray-600 font-semibold">{item.name}</h3>
                    </div>
                ))}
            </div>
        </div>
  );
}

export default RecommendedCategory;
