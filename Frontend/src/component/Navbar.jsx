import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import MegaMenu from "./MegaMenu"; // Import the MegaMenu component
import { MdKeyboardArrowDown } from "react-icons/md";
import { SiNike } from "react-icons/si";
import SearchBar from "./Navbar/SearchBar";
import { NIKE_ITEMS } from "./deta";
import { CiHeart } from "react-icons/ci";
import { LuBaggageClaim } from "react-icons/lu";

const Navbar = () => {
  const navItems = [
    {
      name: "New",
      path: "/home",
      content: {
        sections: [
          {
            title: "Men's Collection",
            items: ["Shoes", "T-Shirts", "Hats", "Accessories"],
          },
          {
            title: "Women's Collection",
            items: ["Dresses", "Bags", "Shoes"],
          },
          {
            title: "Exclusive",
            items: ["Limited Edition", "Seasonal Picks"],
          },
          {
            title: "Exclusive",
            items: ["Limited Edition", "Seasonal Picks"],
          },
        ],
      },
    },
    {
      name: "Mew",
      path: "/about",
      content: {
        sections: [
          {
            title: "Our Story",
            items: ["History", "Vision", "Mission"],
          },
          {
            title: "Team",
            items: ["Leadership", "Staff"],
          },
          {
            title: "Careers",
            items: ["Job Openings", "Internships"],
          },
          {
            title: "Team",
            items: ["Leadership", "Staff"],
          },
        ],
      },
    },
    {
      name: "Women",
      path: "/women",
      content: {
        sections: [
          {
            title: "Clothing",
            items: ["Dresses", "Tops", "Jeans", "Activewear"],
          },
          {
            title: "Accessories",
            items: [
              "Handbags",
              "Jewelry",
              "Scarves",
              "Watches",
              "Dresses",
              "Tops",
              "Jeans",
              "Activewear",
            ],
          },
          {
            title: "Shoes",
            items: ["Heels", "Flats", "Boots", "Sandals"],
          },
          {
            title: "Team",
            items: ["Leadership", "Staff"],
          },
        ],
      },
    },
    {
      name: "Kids",
      path: "/kids",
      content: {
        sections: [
          {
            title: "Clothing",
            items: [
              "T-Shirts",
              "Shorts",
              "Jackets",
              "Sleepwear",
              "Caps",
              "Socks",
              "Bags",
            ],
          },
          {
            title: "Toys & Games",
            items: [
              "Puzzles",
              "Action Figures",
              "Educational Toys",
              "Caps",
              "Socks",
              "Bags",
            ],
          },
          {
            title: "Toys & Games",
            items: [
              "Puzzles",
              "Action Figures",
              "Educational Toys",
              "Caps",
              "Socks",
              "Bags",
            ],
          },
          {
            title: "Shoes",
            items: ["Sneakers", "Boots", "Sandals", "Caps", "Socks", "Bags"],
          },
        ],
      },
    },
    {
      name: "Jordan",
      path: "/jordan",
      content: {
        sections: [
          {
            title: "Air Jordan Collection",
            items: [
              "Retro Sneakers",
              "New Releases",
              "Signature Styles",
              "Apparel",
              "Accessories",
            ],
          },
          {
            title: "Apparel",
            items: [
              "Hoodies",
              "T-Shirts",
              "Tracksuits",
              "Caps",
              "Socks",
              "Bags",
            ],
          },
          {
            title: "Accessories",
            items: ["Caps", "Socks", "Bags", "Caps", "Socks", "Bags"],
          },
          {
            title: "Air Jordan Collection",
            items: [
              "Retro Sneakers",
              "New Releases",
              "Signature Styles",
              "Apparel",
              "Accessories",
            ],
          },
        ],
      },
    },
  ];

  const [hoveredItem, setHoveredItem] = useState(null);
  const [delayedItem, setDelayedItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const hoverTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (index) => {
    hoverTimeout.current = setTimeout(() => setDelayedItem(index), 200);
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    setDelayedItem(null);
    setHoveredItem(null);
  };

  return (
    <nav
      className={`bg-white w-full px-8  shadow-md ${
        isScrolled ? "" : "relative"
      } z-30`}
    >
      <div className="py-3 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-1">
            <span>
              <SiNike size={65} />
            </span>
            <p className="text-2xl font-bold">Nike</p>
          </div>

          <ul className="flex justify-center  w-full gap-x-3">
            {NIKE_ITEMS.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className={`px-2 py-2  ${
                  hoveredItem === index ? "" :""
                } `}
              >
                <Link
                  to={item.href}
                  className="text-gray-700 hover:text-blue-500 flex items-center gap-x-2 font-medium transition duration-300"
                >
                  {item.category}
                  <MdKeyboardArrowDown
                    className={`transform transition-transform duration-300 ${
                      hoveredItem === index ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                 
                </Link>

                {delayedItem === index && (
                  <>
                  
                    <div
                      className={`fixed   left-0 right-0 top-20 bottom-0 w-full  bg-black   h-screen opacity-50 z-10 ${
                        isScrolled ? "" : ""
                      }`}
                      onMouseEnter={handleMouseLeave}
                    ></div>

                  
                    <div
                      className={`${
                        isScrolled ? "fixed top-0" : "absolute top-14  "
                      } left-0 w-full   z-20`}
                    >
                      <MegaMenu
                        itemName={item.category}
                        content={item.product}
                        isVisible={true}
                      />
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
          <div className="relative z-30 flex items-center gap-x-1 ">
          <div className="mr-2">
          <SearchBar />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200">
            <CiHeart size={28} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200">
            <LuBaggageClaim  size={24} />
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
