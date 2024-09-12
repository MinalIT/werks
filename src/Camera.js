import React, {useEffect } from 'react';
import camera from './Images/camera.png';
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
  StarIcon
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
            <Bars3Icon className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold">Shopcart</h1>
        </div>

        <div className="flex items-center bg-white text-black px-2 py-1 rounded-md">
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
          <div className="flex items-center cursor-pointer">
            <Bars3Icon className="h-5 w-5 text-green mr-1" />
            <span>Categories</span>
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
        {/* Left Side: Product Image and Info */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex w-2/3">
          {/* Product Image */}
          <div className="w-full">
            <img
              src={camera}
              alt="Canon Camera"
              className="w-full object-cover rounded-lg hover:scale-105 transition-transform"
            />
          </div>

          {/* Product Info */}
          <div className="w-full pl-6">
            <h2 className="text-3xl font-bold">Canon EOS Rebel T7 DSLR Camera</h2>
            <p className="text-xl mt-2">₹5000.00 or 999.99/month</p>
            <p className="text-sm text-gray-500 mt-2">
              Canon EOS Rebel T7 DSLR Camera | 2 Lens Kit with EF18-55mm + EF 75-300mm Lens, Black
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
              <p className="text-sm">Free Delivery: Enter your postal code at checkout.</p>
              <p className="text-sm">Return Policy: Free 30-day returns for easy exchanges.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Expanded Product Details */}
        <div className="bg-gray-100 p-1 rounded-lg shadow-lg w-1/3 ml-6">
          <h3 className="text-2xl font-bold mb-4">Product Description</h3>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            The Canon EOS Rebel T7 is the perfect camera for both budding photographers and seasoned professionals. 
            It includes a dual-lens kit and captures high-quality images and video with its 24.1 MP sensor. 
           
          </p>

          <h3 className="text-2xl font-bold mt-1 mb-1">Specifications</h3>
          <table className="w-full bg-white shadow-md rounded-lg table-fixed text-left text-sm">
            <tbody>
              <tr className="border-t">
                <td className="p-2 font-semibold">Brand</td>
                <td className="p-2">Canon</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Megapixels</td>
                <td className="p-2">24.1 MP</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Lens</td>
                <td className="p-2">18-55mm + 75-300mm</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Connectivity</td>
                <td className="p-2">Wi-Fi, NFC</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Weight</td>
                <td className="p-2">1.5 lbs</td>
              </tr>
            </tbody>
          </table>
          <h3 className="text-2xl font-bold mt-1 mb-1">Publisher Info</h3>
          <p className="text-sm text-gray-700">Published by SoundPro. Visit our website for more info.</p>
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
