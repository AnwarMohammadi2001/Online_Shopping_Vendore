import React from "react";
import { Link } from "react-router-dom";

import pro1 from "../../assets/product/New folder/pro1.webp";
import pro2 from "../../assets/product/New folder/pro2.webp";
import pro3 from "../../assets/product/New folder/pro3.webp";
import pro4 from "../../assets/product/New folder/pro4.webp";


const SearchProduct = () => {
  const products = [pro1, pro2, pro3, pro4];

  return (
    <div className="flex flex-col mt-5 items-center py-7 justify-center w-full">
      <div className="w-[80%] grid  grid-cols-4 gap-5">
        {products.map((pro, index) => (
          <Link
            key={index}
            className="w-full h-[270px] rounded-2xl cursor-pointer overflow-hidden"
          >
            <img
              src={pro}
              alt={`Product ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchProduct;
