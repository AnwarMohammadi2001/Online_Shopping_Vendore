import React, { useState, useEffect } from 'react';
import cat1 from "../../assets/product/New folder (2)/cat1.webp";
import cat2 from "../../assets/product/New folder (2)/cat2.webp";
import cat3 from "../../assets/product/New folder (2)/cat3.webp";
import cat4 from "../../assets/product/New folder (2)/cat4.webp";

const PopularBrands = () => {
  // Set the default selected category to the first category in the list
  const [selectedCategory, setSelectedCategory] = useState();

  const categories = [
    { name: 'Adult Clothing', brands: [{ name: 'RNS', image: cat1 }, { name: 'Elsana', image: cat2 }, { name: 'SERGE', image: cat3 }, { name: 'CASIO', image: cat4 }] },
    { name: 'Shoes', brands: [{ name: 'Brand 1', image: cat3 }, { name: 'Brand 2', image: cat2 }, { name: 'Brand 3', image: cat1 }] },
    { name: 'Watches and Sunglasses', brands: [{ name: 'Brand 1', image: cat4 }, { name: 'Brand 2', image: cat1 }, { name: 'Brand 3', image: cat3 }] },
    { name: 'Kids Clothing', brands: [{ name: 'Brand 1', image: cat1 }, { name: 'Brand 2', image: cat2 }, { name: 'Brand 3', image: cat3 }, { name: 'Brand 4', image: cat4 }] },
  ];

  useEffect(() => {
    // Set the first category as the default selected category on component mount
    if (!selectedCategory) {
      setSelectedCategory(categories[0].name);
    }
  }, [selectedCategory, categories]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const getBrandsForCategory = () => {
    const category = categories.find((category) => category.name === selectedCategory);
    return category ? category.brands : [];
  };

  return (
    <div className="container mx-auto border rounded-3xl p-4">
      <h2 className="text-xl font-semibold mb-4">Popular Brands</h2>

      <div className="mb-4">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
            className={`px-4 py-2 rounded-full mr-2 mb-2 ${selectedCategory === category.name ? 'border-red-500 text-red-500 font-semibold' : 'border-gray-300 font-semibold text-gray-700'} border`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div>
          <ul className="pl-5 flex items-center gap-x-5">
            {getBrandsForCategory().map((brand, index) => (
              <li key={index} className="text-gray-700 text-center">
                <img src={brand.image} alt={`Brand ${index + 1}`} className="w-32 h-auto rounded mb-2" />
                <p className="text-sm text-gray-600">{brand.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PopularBrands;
