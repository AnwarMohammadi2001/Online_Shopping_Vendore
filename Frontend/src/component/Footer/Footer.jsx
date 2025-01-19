import React, { useState } from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaTiktok } from "react-icons/fa";
import {
  FaShippingFast,
  FaMoneyBillAlt,
  FaHeadset,
  FaUndoAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { SiNike } from "react-icons/si";

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleEmailChange = (e) => {
      const emailValue = e.target.value;
      setEmail(emailValue);
  
      // Basic email validation
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (emailRegex.test(emailValue)) {
        setIsValidEmail(true);
        setErrorMessage('');
      } else {
        setIsValidEmail(false);
        setErrorMessage('Please enter a valid email address.');
      }
    };
  return (
    <footer className="bg-gray-100 text-gray-700 border-t border-gray-300">
      <div className="w-full mx-auto container mb-5  flex justify-between items-center ">
        <div className="text-md">
          <div className="flex items-center gap-3">
            <SiNike size={100} />
            <p className="text-4xl font-bold ">Nike</p>
          </div>
          <div className="flex items-center gap-x-7">
            <p>Telephone : +93772387935</p>
            <p className="border-r border-l px-5 border-gray-700">
              +93772387935
            </p>
            <p className="text-md">
              We are available to assist you 24 hours a day, 7 days a week.
            </p>
          </div>
        </div>
      </div>
      {/* Quality */}
      <div className="py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
          {/* Express Delivery */}
          <div className="flex flex-col items-center">
            <FaShippingFast className="text-red-700 text-4xl mb-2" />

            <p className="text-sm">Fast and secure delivery service</p>
          </div>

          {/* Cash on Delivery */}
          <div className="flex flex-col items-center">
            <FaMoneyBillAlt className="text-red-700 text-4xl mb-2" />

            <p className="text-sm">Pay at your doorstep</p>
          </div>

          {/* Support */}
          <div className="flex flex-col items-center">
            <FaHeadset className="text-red-700 text-4xl mb-2" />

            <p className="text-sm">24/7 customer support</p>
          </div>

          {/* Days Return */}
          <div className="flex flex-col items-center">
            <FaUndoAlt className="text-red-700 text-4xl mb-2" />

            <p className="text-sm">Easy return within 7 days</p>
          </div>

          {/* Original Products */}
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-red-700 text-4xl mb-2" />

            <p className="text-sm">100% authentic products</p>
          </div>
        </div>
      </div>
      {/* Top Section */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}

        {/* Customer Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Customer Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="">
                News Room
              </a>
            </li>
            <li>
              <a href="#" className="">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="">
                Job Opportunities
              </a>
            </li>
            <li>
              <a href="#" className="">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="">
                Frequently Asked Questions (FAQ)
              </a>
            </li>
            <li>
              <a href="#" className="">
                Best Sellers
              </a>
            </li>
            <li>
              <a href="#" className="">
                Offers & Discounts
              </a>
            </li>
            <li>
              <a href="#" className="">
                Return Policies
              </a>
            </li>
            <li>
              <a href="#" className="">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="">
                Report a Bug
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Guide to Shopping</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="">
                How to Place an Order
              </a>
            </li>
            <li>
              <a href="#" className="">
                Order Shipping Process
              </a>
            </li>
            <li>
              <a href="#" className="">
                Payment Methods
              </a>
            </li>
          </ul>
        </div>
        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay with us!</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
              aria-label="Instagram"
            >
              <FaInstagram className="text-pink-600" size={30} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
              aria-label="Twitter"
            >
              <FaTwitter className="text-blue-500" size={30} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
              aria-label="Facebook"
            >
              <FaFacebook className="text-blue-800" size={30} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
              aria-label="TikTok"
            >
              <FaTiktok className="text-black" size={30} />
            </a>
          </div>
          <div>
            <h5 className="text-sm mt-5">
              By registering your email, get notified about the latest
              discounts.
            </h5>
            <form action="" className="flex items-center mt-3 space-x-4">
      <div className="flex flex-col">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          className="px-4 py-2 border border-gray-300 focus:outline-none rounded-lg w-64"
          required
        />
        {errorMessage && (
          <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={!isValidEmail}
        className={`px-6 py-2 rounded-lg ${
          isValidEmail
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-300 text-gray-600 cursor-not-allowed'
        }`}
      >
        Register
      </button>
    </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200 text-gray-600 text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} TET Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
