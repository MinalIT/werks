import React, {useEffect } from 'react';
import chairnew from './Images/chairnew.png';
import { useNavigate } from 'react-router-dom'; 
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon, 
  MapPinIcon, 
  ChevronDownIcon,
  UserIcon,
  SparklesIcon,
  Bars3Icon, 
  TagIcon,
  StarIcon,
} from '@heroicons/react/24/solid';

const ChairProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);
  const navigate = useNavigate(); 

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-700 text-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center">
          <button className="mr-4 hover:scale-105 transition-transform">
            <Bars3Icon className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-extrabold tracking-wide">Shopcart</h1>
        </div>

        <div className="flex items-center bg-white text-black px-3 py-1 rounded-md shadow-lg">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 mr-2" />
          <input type="text" className="outline-none bg-transparent" placeholder="Search product" />
          <span className="ml-6 font-semibold text-gray-700">+001234567890</span>
        </div>    
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <div className="flex space-x-8 text-gray-700">
          <div className="flex items-center cursor-pointer hover:text-green-600 transition">
            <Bars3Icon className="h-5 w-5 text-green mr-1" />
            <span className="font-semibold">Categories</span>
          </div>
          <div className="flex items-center cursor-pointer hover:text-green-600 transition">
            <TagIcon className="h-5 w-5 text-green mr-1" />
            <span className="font-semibold">Deals</span>
          </div>
          <div className="flex items-center cursor-pointer hover:text-green-600 transition">
            <SparklesIcon className="h-5 w-5 text-green mr-1" />
            <span className="font-semibold">What's New</span>
          </div>
        </div>

        <div className="flex items-center ml-4 mr-8 text-gray-700">
          <span className="font-semibold">Eng</span>
          <div className="flex items-center ml-4 mr-4 cursor-pointer hover:text-green-600 transition">
            <MapPinIcon className="h-5 w-5 text-green mr-2" />
            <span>Location</span>
            <ChevronDownIcon className="h-4 w-4 ml-2 text-green-500" />
          </div>
          <div className="flex items-center mr-4 cursor-pointer hover:text-green-600 transition">
            <UserIcon className="h-5 w-5 text-green mr-2" />
            <span>Account</span>
          </div>
          <div className="relative cursor-pointer">
            <ShoppingCartIcon className="h-6 w-6 text-green ml-4 hover:scale-105 transition-transform" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
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
              src={chairnew}
              alt="Chair"
              className="w-full object-cover rounded-lg hover:scale-105 transition-transform"
            />
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900">Ergonomic Chair</h2>
            <p className="text-xl mt-2 text-green-600">₹2500.00 or 249.99/month</p>
            <p className="text-sm text-gray-500 mt-2 leading-6">
              Ergonomic office chair with adjustable height, breathable mesh back, and lumbar support. Ideal for long working hours.
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center mt-4">
              <button className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300">-</button>
              <span className="px-4">1</span>
              <button className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300">+</button>
              <span className="text-red-500 ml-4">Only 5 items left!</span>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex space-x-4">
              <button
                className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition"
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
            <div className="mt-6 text-gray-700">
              <p className="text-sm">Free Delivery: Enter your postal code</p>
              <p className="text-sm">Return Delivery: Free 30-day returns</p>
            </div>
          </div>
        </div>

        {/* Expanded Product Details Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full lg:w-1/3">
          <h3 className="text-2xl font-bold mb-1">Product Description</h3>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            The ergonomic chair is designed for optimal comfort and support during long work hours. With adjustable height, a breathable mesh back, and a lumbar support feature, this chair helps reduce fatigue and improve posture.
          </p>
          
          <h3 className="text-2xl font-bold mt-1 mb-1">Specifications</h3>
          <table className="w-full bg-white shadow-md rounded-lg table-fixed text-left text-sm">
            <tbody>
              <tr className="border-t">
                <td className="p-2 font-semibold">Brand</td>
                <td className="p-2">ErgoPro</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Material</td>
                <td className="p-2">Mesh, Metal, Plastic</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Color</td>
                <td className="p-2">Black</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Max Weight</td>
                <td className="p-2">120 kg</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Height Adjustment</td>
                <td className="p-2">Yes</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-2xl font-bold mt-1 mb-1">Company Info</h3>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            ErgoPro is a leading brand in ergonomic furniture, offering top-quality products that ensure comfort and productivity. Our chairs are designed for professionals who prioritize health and ergonomics.
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
              <span className="ml-2 text-gray-700">4/5</span>
            </div>
            <p className="mt-2 text-sm text-gray-700">"Great chair! Comfortable and easy to assemble. Would definitely recommend to anyone who works long hours."</p>
            <span className="text-xs text-gray-500">- Sarah L., August 2024</span>
          </div>

          {/*Review 2*/}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-gray-300" />
              <span className="ml-2 text-gray-700">4/5</span>
            </div>
            <p className="mt-2 text-sm text-gray-700">"Would definitely recommend to anyone who works long hours."</p>
            <span className="text-xs text-gray-500">- Minal S., July 2024</span>
          </div>

          {/* Add more reviews */}
        </div> 
      </section>

    </div>
  );
};

export default ChairProductPage;
