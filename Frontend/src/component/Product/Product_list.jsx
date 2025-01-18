import React from "react";
import { Link } from "react-router-dom";
import pro1 from "../../assets/product/pro1.webp";
import pro2 from "../../assets/product/pro2.webp";
import pro3 from "../../assets/product/pro3.webp";
import pro4 from "../../assets/product/pro4.webp";

const Product_List = () => {
  const products = [pro1, pro2, pro3, pro4];

  return (
    <div className="flex flex-col mt-14 items-center py-7 justify-center w-full">
      <div className="w-[90%] grid grid-cols-2 gap-10">
        {products.map((pro, index) => (
          <Link
            key={index}
            className="w-full h-[300px] rounded-2xl cursor-pointer overflow-hidden"
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

export default Product_List;
