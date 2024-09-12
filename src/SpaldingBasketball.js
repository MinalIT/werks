import React ,{useEffect} from 'react';
import spaldingBasketball from './Images/spaldingBasketball.png';
import { useNavigate } from 'react-router-dom'; 
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon, // Use this instead of SearchIcon
  MapPinIcon, // Use this instead of LocationMarkerIcon
  ChevronDownIcon,
  UserIcon,
  SparklesIcon,
  Bars3Icon, TagIcon,
} from '@heroicons/react/24/solid';

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);
  const navigate = useNavigate(); 
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
    <ShoppingCartIcon className="h-6 w-6 text-green ml-4" />
    <span>Cart</span>
      </div>
    </nav>


      {/* Main Product Section */}
      <main className="flex justify-center items-start py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg flex">
          {/* Product Image */}
          <div className="w-80 max-h-50">
            <img
              src= {spaldingBasketball}
              alt="spaldingBasketball"
              className="w-full object-cover rounded-lg"
            />
            {/* Color Options */}
          
          </div>

          {/* Product Info */}
          <div className="w-1/2 pl-6">
            <h2 className="text-3xl font-bold"> Spalding Flight Lines Rubber Basketball (Size-7), Multicolor</h2>
            <p className="text-xl mt-2">₹50000.00 or 999.99/month</p>
            <p className="text-sm text-gray-500 mt-2 justify-center">
            Spalding Rebound Professional Match Ball for Indoor/Outdoor Play Rubber Moulded Basketball for Women Men Youths
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center mt-4">
              <button className="p-2 bg-gray-200 rounded-lg">-</button>
              <span className="px-4">1</span>
              <button className="p-2 bg-gray-200 rounded-lg">+</button>
              <span className="text-red-500 ml-4">Only 12 items left!</span>
            </div>

            {/* Buttons */}
            <div className="mt-6">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
                onClick={() => navigate('/buynowpage')}  // Navigate to Buy Now Page
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
            <div className="mt-6">
              <p className="text-sm">Free Delivery: Enter your postal code</p>
              <p className="text-sm">Return Delivery: Free 30-day returns</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;