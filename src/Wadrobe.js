import React, {useEffect} from 'react';
import Wadrobe from './Images/wadrobe.png';
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
          <div className="relative flex items-center cursor-pointer hover:text-green-600 transition">
            <Bars3Icon className="h-5 w-5 text-green mr-1" />
            <span>Categories</span>
            {/* Dropdown content for Categories */}
            <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg p-4 hidden">
              <ul>
                <li className="py-2">Electronics</li>
                <li className="py-2">Fashion</li>
                <li className="py-2">Home & Furniture</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center cursor-pointer hover:text-green-600 transition">
            <TagIcon className="h-5 w-5 text-green mr-1" />
            <span>Deals</span>
          </div>
          <div className="flex items-center cursor-pointer hover:text-green-600 transition">
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
      <main className="flex flex-col lg:flex-row justify-center items-start py-8 space-y-10 lg:space-y-0 lg:space-x-6 px-4">
                {/* Product Info and Image */}
                <div className="flex flex-col lg:flex-row lg:w-2/3 lg:h-fit space-y-6 lg:space-y-10 lg:space-x-6 bg-white p-10 rounded-lg shadow-lg">
                <div className="w-full lg:w-1/2">
                 <img
            src={Wadrobe}
            alt="Wadrobe"
            className="w-full object-cover rounded-lg hover:scale-105 transition-transform"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col lg:w-1/2 lg:pl-6">
          <h2 className="text-3xl font-bold text-gray-900">Wadrobe</h2>
          <p className="text-xl mt-2 text-green-600">₹6000.00 or 999.99/month</p>
          <p className="text-sm text-gray-500 mt-2 leading-6">
            @home by Nilkamal Engineered Wood Wardrobe (Urban Teak) | 1 Year Warranty (Joyce Without Mirror)
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center mt-4">
            <button className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">-</button>
            <span className="px-4">1</span>
            <button className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">+</button>
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
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full lg:w-1/3">
        <h3 className="text-2xl font-bold mb-4">Product Details</h3>
        
          <p className="text-sm text-gray-700 leading-relaxed">
            This wardrobe is crafted from high-quality engineered wood, designed for durability and elegance. It features a spacious interior and a stylish Urban Teak finish, perfect for modern living spaces.
          </p>

          <h3 className="text-xl font-bold mt-4 mb-2">Specifications</h3>
          <table className="w-full bg-white shadow-md rounded-lg text-left text-sm">
            <tbody>
              <tr className="border-t">
                <td className="p-2 font-semibold">Brand</td>
                <td className="p-2">@home by Nilkamal</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Material</td>
                <td className="p-2">Engineered Wood</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Color</td>
                <td className="p-2">Urban Teak</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Dimensions</td>
                <td className="p-2">180 x 60 x 200 cm</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Warranty</td>
                <td className="p-2">1 Year</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl font-bold mt-4 mb-2">Company Info</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Nilkamal is a well-known brand in the furniture industry, recognized for its quality and innovative designs. Our products are designed to meet the highest standards of durability and style.
          </p>
        
      </div>
      </main>

      {/* Customer Reviews Section */}
      <section className="bg-white p-6">
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
            </div>
            <p className="text-gray-700 mt-2">
              “The wardrobe is beautiful and well-made. The Urban Teak finish is perfect, and it was easy to assemble. Highly recommend!”
            </p>
            <p className="text-gray-500 mt-1">- Sarah K.</p>
          </div>

          {/* Review 2 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-gray-300" />
            </div>
            <p className="text-gray-700 mt-2">
              “Very sturdy and stylish wardrobe. It fits perfectly in my room and matches my other furniture well.”
            </p>
            <p className="text-gray-500 mt-1">- John D.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
