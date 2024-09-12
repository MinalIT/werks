import React from 'react';
import messengerbag from './Images/messengerbag.png';
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
} from '@heroicons/react/24/solid';

const ProductPage = () => {
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
          <div className="relative group">
            <div className="flex items-center cursor-pointer hover:text-green-600 transition">
              <Bars3Icon className="h-5 w-5 text-green mr-1" />
              <span className="font-semibold">Categories</span>
            </div>
            {/* Dropdown content for Categories */}
            <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ul>
                <li className="py-2 hover:text-green-600">Electronics</li>
                <li className="py-2 hover:text-green-600">Fashion</li>
                <li className="py-2 hover:text-green-600">Home & Furniture</li>
              </ul>
            </div>
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
              src={messengerbag}
              alt="Messenger Bag"
              className="w-full object-cover rounded-lg hover:scale-105 transition-transform"
            />
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900">Messenger MacBook Office Bag</h2>
            <p className="text-xl mt-2 text-green-600">₹1200.00 or 99.99/month</p>
            <p className="text-sm text-gray-500 mt-2 leading-6">
              Trajectory Vegan Leather 15.6 Inch Laptop Messenger MacBook Office Bag with 2 Years Warranty and Dual Compartment
              with Expandable Bottom Used Shoulder and Handbag for Men and Women.
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center mt-4">
              <button className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300">-</button>
              <span className="px-4">1</span>
              <button className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300">+</button>
              <span className="text-red-500 ml-4">Only 12 items left!</span>
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
                onClick={() => navigate('/Cartpage')} 
              >
                Add to Cart
              </button>
            </div>

            {/* Delivery Info */}
            <div className="mt-6 text-gray-700">
              <p className="text-sm">Free Delivery: Enter your postal code at checkout.</p>
              <p className="text-sm">Return Delivery: Free 30-day returns for easy exchanges.</p>
            </div>
          </div>
        </div>

        {/* Expanded Product Details Section */}
        <div className="bg-gray-100 p-3 rounded-lg shadow-lg w-full lg:w-1/3">
          <h3 className="text-2xl font-bold mb-2">Product Description</h3>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            This messenger bag is crafted from high-quality vegan leather, designed for both style and practicality. Ideal for professional and casual use, it features ample space and a sleek design. Durable and elegant, it’s perfect for daily commutes.
          </p>
          
          <h3 className="text-2xl font-bold mt-2 mb-2">Specifications</h3>
          <table className="w-full bg-white shadow-md rounded-lg table-fixed text-left text-sm">
            <tbody>
              <tr className="border-t">
                <td className="p-2 font-semibold">Brand</td>
                <td className="p-2">Trajectory</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Material</td>
                <td className="p-2">Vegan Leather</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Color</td>
                <td className="p-2">Black</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Size</td>
                <td className="p-2">15.6 Inch</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-2xl font-bold mt-4 mb-4">Company Info</h3>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            Trajectory specializes in high-quality, eco-friendly leather goods designed for modern lifestyles. Our products are built to last, offering both functionality and style for every occasion.
          </p>
        </div>
      </main>

      {/* Customer Reviews Section */}
      <section className="bg-white p-1 mt-2">
        <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold">John Doe</h4>
            <p className="text-gray-700">Great bag, excellent quality. The vegan leather feels very durable and stylish. Worth the price!</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★★★★☆</span>
            </div>
          </div>
          <div className="border p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold">Jane Smith</h4>
            <p className="text-gray-700">I love this bag. It’s perfect for my laptop and has enough space for other essentials. Highly recommended!</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★★★★★</span>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ProductPage;
