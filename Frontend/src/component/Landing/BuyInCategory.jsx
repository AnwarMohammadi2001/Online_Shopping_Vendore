import React from "react";
import men from "../../assets/images/categories/men.jpeg";
import women from "../../assets/images/categories/women.jpeg";
import kids from "../../assets/images/categories/kids.jpeg";
import bag from "../../assets/images/categories/bags.jpg";
import boot from "../../assets/images/categories/boot.jpg";
import jewelry from "../../assets/images/categories/jewelry.jpeg";

const BuyInCategory = () => {
  const categories = [
    { name: "Men", image: men, link: "/men" },
    { name: "Women", image: women, link: "/women" },
    { name: "Kids & Baby", image: kids, link: "/kids" },
    { name: "Dresses", image: boot, link: "/dresses" },
    { name: "Bags", image: bag, link: "/bags" },
    { name: "Jewelry", image: jewelry, link: "/jewelry" },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full mt-5 ">
      <h2 className="text-3xl font-bold text-center mb-8">
        Shop by Categories
      </h2>
      <div className="w-[80%] mx-auto h-full  flex items-center gap-4">
        {categories.map((item, index) => (
          <div key={index} className="h-full w-full text-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px]  object-contain"
            />
            <h2 className="mt-2 font-bold">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyInCategory;
