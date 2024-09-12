import React ,{useEffect} from 'react';
import leatherbag from './Images/leatherbag.png';
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
} from '@heroicons/react/24/solid';

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);
  const navigate = useNavigate(); 
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-700 text-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center">
          <button className="mr-4">
            <Bars3Icon className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold">Shopcart</h1>
        </div>

        <div className="flex items-center bg-white text-black px-2 py-1 rounded-md shadow-lg">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 mr-2" />
          <input
            type="text"
            className="outline-none bg-transparent"
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
      <main className="flex flex-col lg:flex-row justify-center items-start py-8 px-4">
        {/* Product Image */}
        <div className="flex flex-col lg:flex-row lg:w-2/3 lg:h-fit space-y-6 lg:space-y-0 lg:space-x-6 bg-white p-10 rounded-lg shadow-lg">
          <div className="w-full lg:w-1/2">
            <img
              src={leatherbag}
              alt="Leather Bag"
              className="w-full object-cover rounded-lg hover:scale-105 transition-transform"
            />
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900">Leatherette Stylish & Spacious Weekender Duffle Bag</h2>
            <p className="text-xl mt-2 text-green-600">₹1000.00 or 99.99/month</p>
            <p className="text-sm text-gray-500 mt-2 leading-6">
              Fur Jaden Brown Textured Leatherette Stylish & Spacious Weekender Duffle Bag for Travel for Women
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
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg mt-1 lg:mt-1 lg:w-1/3">
          <h3 className="text-2xl font-bold mb-0">Product Description</h3>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            This Leatherette Stylish & Spacious Weekender Duffle Bag is designed to offer both style and practicality. 
           Perfect for women on the go, this duffle bag combines elegance with functionality.
          </p>
          
          <h3 className="text-2xl font-bold mt-0 mb-1">Specifications</h3>
          <table className="w-full bg-white shadow-md rounded-lg table-fixed text-left text-sm">
            <tbody>
              <tr className="border-t">
                <td className="p-2 font-semibold">Brand</td>
                <td className="p-2">Fur Jaden</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Material</td>
                <td className="p-2">Leatherette</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Color</td>
                <td className="p-2">Brown</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Dimensions</td>
                <td className="p-2">20 x 10 x 12 inches</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Finish</td>
                <td className="p-2">Textured</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-2xl font-bold mt-1 mb-1">Company Info</h3>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            Fur Jaden is renowned for crafting stylish and high-quality accessories that complement your lifestyle. Our products are designed with both form and function in mind, ensuring you get durability and style with every purchase.
          </p>
        </div>
      </main>

      {/* Customer Reviews Section */}
      <section className="bg-white p-1 mt-1">
        <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <span className="font-semibold">Jane Doe</span>
              <span className="ml-2 text-yellow-500">★★★★☆</span>
            </div>
            <p className="text-sm text-gray-700">
              I love this duffle bag! The leatherette material looks and feels high-quality. It has enough space for my travel needs and looks stylish.
            </p>
          </div>
          <div className="border p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <span className="font-semibold">John Smith</span>
              <span className="ml-2 text-yellow-500">★★★☆☆</span>
            </div>
            <p className="text-sm text-gray-700">
              The bag is good but could be improved with more compartments. Overall, it’s a decent purchase for the price.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
