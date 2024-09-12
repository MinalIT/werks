import React , {useEffect} from 'react';
import theodysy from './Images/theodysy.jpg';
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
              src={theodysy}
              alt="The Odyssey"
              className="w-1/2 object-cover rounded-lg hover:scale-105 transition-transform"
            />
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900">The Odyssey by Homer</h2>
            <p className="text-xl mt-2 text-green-600">₹1000.00 or 99.99/month</p>
            <p className="text-sm text-gray-500 mt-2 leading-6">
              The Odyssey is an epic poem in 24 books traditionally attributed to the ancient Greek poet Homer. 
              The poem is the story of Odysseus, king of Ithaca, who wanders for 10 years 
              (although the action of the poem covers only the final six weeks) trying to get home after the Trojan War.
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
              <p className="text-sm">Free Delivery: Enter your postal code at checkout.</p>
              <p className="text-sm">Return Delivery: Free 30-day returns for easy exchanges.</p>
            </div>
          </div>
        </div>

        {/* Expanded Product Details Section */}
        <div className="bg-gray-100 p-10 rounded-lg shadow-lg w-full lg:w-1/3">
          <h3 className="text-2xl font-bold mb-2">Product Description</h3>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            This edition of "The Odyssey" offers a profound narrative of Odysseus's adventures and challenges, enriched with Homer's legendary storytelling.
          </p>
          
          <h3 className="text-2xl font-bold mt-2 mb-2">Specifications</h3>
          <table className="w-full bg-white shadow-md rounded-lg table-fixed text-left text-sm">
            <tbody>
              <tr className="border-t">
                <td className="p-2 font-semibold">Author</td>
                <td className="p-2">Homer</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Genre</td>
                <td className="p-2">Epic Poetry</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Language</td>
                <td className="p-2">English</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-semibold">Publication Year</td>
                <td className="p-2">8th Century BC</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-2xl font-bold mt-4 mb-4">Publisher Info</h3>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            This edition of "The Odyssey" is published by a reputable publisher known for its classic literary works, presenting Homer's epic with great fidelity.
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
            <p className="mt-2 text-gray-700">"Amazing edition of Moby-Dick The quality is top-notch, and it’s a must-have Melville's classic novel."</p>
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
            <p className="mt-2 text-gray-700">"Great read with insightful annotations. Highly recommend for students and enthusiasts alike!"</p>
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
            <p className="mt-2 text-gray-700">"They are okay for the price, but I expected better material content."</p>
            <p className="mt-2 text-sm text-gray-500">- Alice Brown, September 5, 2024</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
