import React from "react";
import Slider from "../../Hero/Slider";
import BuyInCategory from "../BuyInCategory";
import Product_List from "../../Product/Product_list";
import MainSlider from "../MainSlider";
import RecommendedCategory from "../RecommendedCategory";
import SearchProduct from "../../Search/SearchProduct";
import PopularBrands from "../PopularBrands";

const Apparel = () => {
  return (
    <div>
      {/* <Slider /> */}
      <MainSlider />
      <BuyInCategory />
      <Product_List />
      <RecommendedCategory />
      <SearchProduct />
      <PopularBrands />
    </div>
  );
};

export default Apparel;
