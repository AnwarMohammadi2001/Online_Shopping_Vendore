import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { SiNike } from "react-icons/si";

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  // Load recent searches from localStorage on component mount
  useEffect(() => {
    const savedSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(savedSearches);
  }, []);

  // Save recent searches to localStorage whenever the list changes
  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  const handleSearchClick = () => {
    setIsExpanded(true);
  };

  const handleCancelClick = () => {
    setIsExpanded(false);
    setSearchValue("");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      // Add the search term to the list if it doesn't already exist
      if (!recentSearches.includes(searchValue)) {
        setRecentSearches((prev) => [searchValue, ...prev]);
      }
      setSearchValue("");
    }
  };

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isExpanded]);

  // Constant items
  const constantItems = [
    "Nike",
    "air max",
    "killshot",
    "jordan",
    "converse",
    "vans",
    "new balance",
  ];

  return (
    <div className={`relative ${isExpanded ? "w-full" : ""}`}>
      {/* Search Bar */}
      <form
        onSubmit={handleSearchSubmit}
        className={`flex items-center gap-2 bg-white border hover:bg-gray-300 rounded-full px-4 py-2 transition-all duration-300`}
        onClick={handleSearchClick}
      >
        <FiSearch size={24} className="text-gray-500" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search..."
          className={`flex bg-transparent outline-none w-32 text-gray-700`}
        />
      </form>

      {/* Search List & Cancel Button */}
      {isExpanded && (
        <div className="fixed top-0 left-0 right-0 px-8 pb-20 bg-white w-full z-40">
          {/* Header Section */}
          <div className="flex justify-between items-center border-gray-200 px-4">
            <div className="flex items-center gap-x-1">
              <span>
                <SiNike size={65} />
              </span>
              <p className="text-2xl font-bold">Nike</p>
            </div>

            <form
              onSubmit={handleSearchSubmit}
              className={`flex items-center gap-2 hover:bg-gray-300 bg-gray-200 border rounded-full px-4 py-2 transition-all duration-300`}
            >
              <FiSearch size={24} className="text-gray-500" />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search..."
                className={`flex bg-transparent w-[800px] font-semibold outline-none text-gray-800`}
              />
            </form>
            <button
              onClick={handleCancelClick}
              className="content-center py-2 text-gray-800 font-semibold hover:text-gray-500 text-lg transition"
            >
              Cancel
            </button>
          </div>

          {/* Popular Search Terms */}
          <h4 className="text-gray-500 text-md font-semibold p-4 text-center">
            Popular Search Terms
          </h4>
          <div className="w-full flex justify-center">
            <ul className="flex items-center w-[800px] flex-wrap gap-4 mb-4 px-4">
              {constantItems.concat(recentSearches).map((item, index) => (
                <li
                  key={index}
                  className="text-black py-1.5 font-semibold hover:bg-gray-300 px-5 rounded-3xl bg-gray-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
