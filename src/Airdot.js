import React, { useState ,useEffect} from 'react';
import bud from './Images/bud.png';
import whiteairdot from './Images/whiteairdot.png';
import { useNavigate } from 'react-router-dom'; 

import {
  ShoppingCartIcon,
  MagnifyingGlassIcon, // Use this instead of SearchIcon
  MapPinIcon, // Use this instead of LocationMarkerIcon
  ChevronDownIcon,
  UserIcon,
  SparklesIcon,
  Bars3Icon,
  TagIcon,
  StarIcon
} from '@heroicons/react/24/solid';

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []); 
  const [selectedColor, setSelectedColor] = useState(whiteairdot);
  const navigate = useNavigate(); // Initialize useNavigate
  
  const changeColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-green-700 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <button className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-bold">Shopcart</h1>
        </div>

        <div className="flex items-center bg-white text-black px-2 py-1 rounded-md">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 mr-2" />
          <input
            type="text"
            className="outline-none"
            placeholder="Search product"
          />
          <span className="ml-6">+001234567890</span>
        </div>    
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <div className="flex space-x-8">
          <div className="relative">
            <div className="flex items-center cursor-pointer">
              <Bars3Icon className="h-5 w-5 text-green mr-1" />
              <span>Categories</span>
            </div>
            {/* Dropdown content for Categories */}
            <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg p-4 hidden">
              <ul>
                <li className="py-2">Electronics</li>
                <li className="py-2">Fashion</li>
                <li className="py-2">Home & Furniture</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center cursor-pointer">
            <TagIcon className="h-5 w-5 text-green mr-1" />
            <span>Deals</span>
          </div>
          <div className="flex items-center cursor-pointer">
            <SparklesIcon className="h-5 w-5 text-green mr-1" />
            <span>What's New</span>
          </div>
        </div>
        <div className="flex items-center ml-4 mr-8">
          <span>Eng</span>
          <div className="flex items-center ml-4 mr-4">
            <MapPinIcon className="h-5 w-5 text-green mr-2" />
            <span>Location</span>
            <ChevronDownIcon className="h-4 w-4 ml-2 text-green-500" />
          </div>
          <div className="flex items-center mr-4">
            <UserIcon className="h-5 w-5 text-green mr-2" />
            <span>Account</span>
          </div>
          <div className="relative cursor-pointer">
            <ShoppingCartIcon className="h-6 w-6 text-green ml-4" />
            <span>Cart</span>
          </div>
        </div>
      </nav>

      {/* Main Product Section */}
      <main className="flex flex-col lg:flex-row justify-center items-start py-8 space-y-10 lg:space-y-0 lg:space-x-6 px-4">
                {/* Product Info and Image */}
                <div className="flex flex-col lg:flex-row lg:w-2/3 lg:h-fit space-y-6 lg:space-y-10 lg:space-x-6 bg-white p-10 rounded-lg shadow-lg">
                    {/* Product Image */}
                    <div className="w-full lg:w-1/2">
            <img
              src={selectedColor}  // Dynamically changing the image based on color selection
              alt="Airpods Max"
              className="w-1/2 h-auto object-cover rounded-lg"
            />
            {/* Color Options */}
            <div className="flex space-x-4 mt-4">
              <button
                className="w-10 h-10 rounded-full bg-gray-200"
                onClick={() => changeColor(whiteairdot)}
              ></button>
              <button
                className="w-10 h-10 rounded-full bg-black"
                onClick={() => changeColor(bud)}
              ></button>
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 pl-0 lg:pl-6">
            <h2 className="text-3xl font-bold mb-2">Redmi Airdots Earphones</h2>
            <p className="text-xl text-green-600 mb-2">₹549.00 or 99.99/month</p>
            <p className="text-sm text-gray-500 mb-4">
              Xiaomi TWSEJ04LS Redmi Airdots Earphones, Bluetooth, Sweatproof, 
              True Wireless Earbuds, Global Version - Black/White, Small
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center mb-4">
              <button className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300">-</button>
              <span className="px-4">1</span>
              <button className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300">+</button>
              <span className="text-red-500 ml-4">Only 12 items left!</span>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 mb-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600"
                onClick={() => navigate('/buynowpage')}
              >
                Buy Now
              </button>
              <button
                className="bg-gray-500 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-600 transition"
                onClick={() => navigate('/Userdashboard')} 
              >
                Add to Cart
              </button>
            </div>

            {/* Delivery Info */}
            <div>
              <p className="text-sm">Free Delivery: Enter your postal code at checkout.</p>
              <p className="text-sm">Return Delivery: Free 30-day returns for easy exchanges.</p>
            </div>
          </div>
        </div>

        {/* Expanded Product Details Section */}
        <div className="bg-gray-100 p-2 rounded-lg shadow-lg w-full lg:w-1/3">
          <h3 className="text-2xl font-bold mb-2">Product Description</h3>
          <p className="text-sm text-gray-700 mb-4">
            Xiaomi TWSEJ04LS Redmi Airdots Earphones provide excellent sound quality with a comfortable fit. Featuring Bluetooth connectivity and sweatproof design, these true wireless earbuds are perfect for on-the-go use.
          </p>
          
          <h3 className="text-2xl font-bold mb-2">Specifications</h3>
          <table className="w-full bg-white shadow-md rounded-lg table-fixed text-left text-sm">
            <tbody>
              <tr className="border-t">
                <td className="p-2 font-semibold">Brand</td>
                <td className="p-2">Xiaomi</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Model</td>
                <td className="p-2">TWSEJ04LS</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Connectivity</td>
                <td className="p-2">Bluetooth</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Color Options</td>
                <td className="p-2">Black, White</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-2xl font-bold mt-4 mb-2">Publisher Info</h3>
          <p className="text-sm text-gray-700">
            Published by Xiaomi, known for their high-quality electronics and innovative technology.
          </p>
        </div>
      </main>

 {/* Customer Reviews Section */}
 <section className="bg-white p-1 mt-1">
        <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
        <div className="space-y-4">
          {/* Review 1 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-gray-300" />
              <span className="ml-2 text-sm text-gray-500">4.0</span>
            </div>
            <p className="mt-2 text-gray-700">"Very comfortable and stylish. Worth every penny!"</p>
            <p className="mt-2 text-sm text-gray-500">- John Doe, August 24, 2024</p>
          </div>

          {/* Review 2 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <span className="ml-2 text-sm text-gray-500">5.0</span>
            </div>
            <p className="mt-2 text-gray-700">"The quality is superb and they fit perfectly. I will definitely buy again!"</p>
            <p className="mt-2 text-sm text-gray-500">- Jane Smith, September 1, 2024</p>
          </div>

          {/* Review 3 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-gray-300" />
              <StarIcon className="h-5 w-5 text-gray-300" />
              <span className="ml-2 text-sm text-gray-500">3.0</span>
            </div>
            <p className="mt-2 text-gray-700">"They are okay for the price, but I expected better material quality."</p>
            <p className="mt-2 text-sm text-gray-500">- Alice Brown, September 5, 2024</p>
          </div>
        </div>
      </section>
        </div>
    );
};

export default ProductPage;
