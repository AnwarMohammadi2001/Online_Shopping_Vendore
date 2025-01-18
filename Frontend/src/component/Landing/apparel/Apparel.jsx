import React from "react";
import Slider from "../../Hero/Slider";
import BuyInCategory from "../BuyInCategory";
import Product_List from "../../Product/Product_list";
import MainSlider from "../MainSlider";
import RecommendedCategory from "../RecommendedCategory";

const Apparel = () => {
  return (
    <div>
      {/* <Slider /> */}
      <MainSlider />
      <BuyInCategory />
      <Product_List />
      <RecommendedCategory />
    </div>
  );
};

export default Apparel;
