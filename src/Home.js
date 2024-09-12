import React, { useState, useEffect } from 'react';
import { FaSearch, FaUserCircle, FaShoppingCart, FaTimes } from 'react-icons/fa';
import chair from './Images/chair.jpg';
import cable from './Images/cable.jpg';
import capkeychain from './Images/capkeychain.jpg';
import Disposabletape from './Images/Disposabletape.jpg';
import Brake from './Images/Brake.jpg';
import transformer from './Images/transformer.jpg';
import Trampoline from './Images/Trampoline.jpg';
import ThermalPrinter from './Images/ThermalPrinter.jpg';
import setupbox from './Images/setupbox.jpg';
import Yogamat from './Images/Yogamat.jpg';
import firstaidkit from './Images/firstaidkit.jpg';
import footwear from './Images/footwear.jpg';
import Acmotor from './Images/Acmotor.jpg';
import img1 from './Images/bg1.png';
import img2 from './Images/try.jpeg';
import img3 from './Images/bgtry.jpeg';
import img4 from './Images/wheatgrinder.jpg';
import img5 from './Images/Fishmeal.jpg';
import img6 from './Images/Livestockfeed.jpg';
import img7 from './Images/maizgrinding.jpg';
import img8 from './Images/glasscutter.jpg';
import img9 from './Images/feedextruder.jpg';
import Meta from './Images/Meta.png';
import './animations.css';
import Popup from './Popup';
import Carousel from './Carousel';
import Chat from './Chat';
import NewLaunch from './NewLaunch';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPinterest, FaLinkedin } from 'react-icons/fa';
import SellOnMetaMarket from './SellOnMetaMarket';
import ManagementVendorApproval from './ManagementVendorApproval';
import { Link } from 'react-router-dom';
import appStoreImage from './Images/app_store.png'; // Ensure this image exists in the specified path
import googlePlayImage from './Images/google_play.png';
import bannerImage1 from './Images/bg4.jpg';
import bannerImage2 from './Images/bg3.jpg';
import bannerImage3 from './Images/bg66.jpg';
import { Bars3Icon } from '@heroicons/react/24/solid';



// CategoryCard Component
const CategoryCard = ({ title }) => (
  <div className="flex items-center space-x-2 p-1 bg-gray-100 ">
    {title}
  </div>
);

// Categories Component
const Categories = ({ onSelectCategory }) => {
  const categories = [
    "Chair",
    "Acmotor",
    "Cable",
    "Brake",
    "Cap Key Chain",
    "Disposable Tape",
    "First Aid Kit",
    "Footwear",
    "SetUp Box",
    "Thermal Printer",
    "Trampoline",
    "Transformer",
    "Cap Key Chain",
    "Disposable Tape",
    "First Aid Kit",
    "Footwear",
    "SetUp Box",
    "Thermal Printer",
    "Trampoline",
    "Transformer",
  ];


  return (
    <section className="p-2 h-64 overflow-y-auto">
    {categories.map((category, index) => (
      <div 
        key={index} 
        onClick={() => onSelectCategory(index)} 
        className="cursor-pointer hover:text-blue-500 active:text-blue-500"
      >
        <CategoryCard title={category} />
      </div>
    ))}
  </section>
  
  );
};
// NewLaunches Component





// Main HomePage Component
const HomePage = () => {
  
    const [searchQuery, setSearchQuery] = useState("");
    const [showPopup, setShowPopup] = useState(true);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [openCategory, setOpenCategory] = useState(0);
    const [searchType, setSearchType] = useState("Product");
    const [selectedOption, setSelectedOption] = useState("Product");
    const [categoryProducts, setCategoryProducts] = useState([]);
   
  
    const images = [img1, img2, img3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Logic for the carousel
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    // Mock data for categories
    const categoryItems = [
      [
        { src: img4, alt: 'wheatgrinder', text: 'Wheat Grinder', to: '/Wheatgrinder' },
        { src: img5, alt: 'Fishmeal', text: 'Fish Meal', to: '/Fishmeal' },
        { src: img6, alt: 'Livestockfeed', text: 'Livestock Feed', to: '/Livestockfeed' },
        { src: img7, alt: 'maizgrinding', text: 'Maiz Grinding', to: '/Maizgrinding' },
        { src: img8, alt: 'glasscutter', text: 'Glass Cutter', to: '/Glasscutter' },
        { src: img9, alt: 'feedextruder', text: 'Feed Extruder', to: '/Feedextruder' },
      ],

      [
        { src: img9, alt: 'feedextruder', text: 'Feed Extruder', to: '/Feedextruder' },
        { src: img4, alt: 'wheatgrinder', text: 'Wheat Grinder', to: '/Wheatgrinder' },
        { src: img5, alt: 'Fishmeal', text: 'Fish Meal', to: '/Fishmeal' },
        { src: img6, alt: 'Livestockfeed', text: 'Livestock Feed', to: '/Livestockfeed' },
        { src: img7, alt: 'maizgrinding', text: 'Maiz Grinding', to: '/Maizgrinding' },
        { src: img8, alt: 'glasscutter', text: 'Glass Cutter', to: '/Glasscutter' },
        
      ],
      [ { src: img7, alt: 'maizgrinding', text: 'Maiz Grinding', to: '/Maizgrinding' },
        { src: img9, alt: 'feedextruder', text: 'Feed Extruder', to: '/Feedextruder' },
        { src: img4, alt: 'wheatgrinder', text: 'Wheat Grinder', to: '/Wheatgrinder' },
        { src: img5, alt: 'Fishmeal', text: 'Fish Meal', to: '/Fishmeal' },
        { src: img6, alt: 'Livestockfeed', text: 'Livestock Feed', to: '/Livestockfeed' },
        { src: img8, alt: 'glasscutter', text: 'Glass Cutter', to: '/Glasscutter' },
        
      ],
      [ { src: img5, alt: 'Fishmeal', text: 'Fish Meal', to: '/Fishmeal' },
        { src: img9, alt: 'feedextruder', text: 'Feed Extruder', to: '/Feedextruder' },
        { src: img4, alt: 'wheatgrinder', text: 'Wheat Grinder', to: '/Wheatgrinder' },
        { src: img6, alt: 'Livestockfeed', text: 'Livestock Feed', to: '/Livestockfeed' },
        { src: img7, alt: 'maizgrinding', text: 'Maiz Grinding', to: '/Maizgrinding' },
        { src: img8, alt: 'glasscutter', text: 'Glass Cutter', to: '/Glasscutter' },
      ],
      [ { src: img5, alt: 'Fishmeal', text: 'Fish Meal', to: '/Fishmeal' },
        { src: img9, alt: 'feedextruder', text: 'Feed Extruder', to: '/Feedextruder' },
        { src: img4, alt: 'wheatgrinder', text: 'Wheat Grinder', to: '/Wheatgrinder' },
        { src: img6, alt: 'Livestockfeed', text: 'Livestock Feed', to: '/Livestockfeed' },
        { src: img7, alt: 'maizgrinding', text: 'Maiz Grinding', to: '/Maizgrinding' },
        { src: img8, alt: 'glasscutter', text: 'Glass Cutter', to: '/Glasscutter' },
      ],
      [  { src: img8, alt: 'glasscutter', text: 'Glass Cutter', to: '/Glasscutter' },
        { src: img5, alt: 'Fishmeal', text: 'Fish Meal', to: '/Fishmeal' },
        { src: img9, alt: 'feedextruder', text: 'Feed Extruder', to: '/Feedextruder' },
        { src: img4, alt: 'wheatgrinder', text: 'Wheat Grinder', to: '/Wheatgrinder' },
        { src: img6, alt: 'Livestockfeed', text: 'Livestock Feed', to: '/Livestockfeed' },
        { src: img7, alt: 'maizgrinding', text: 'Maiz Grinding', to: '/Maizgrinding' },
      ],
      [ { src: img4, alt: 'wheatgrinder', text: 'Wheat Grinder', to: '/Wheatgrinder' },
        { src: img5, alt: 'Fishmeal', text: 'Fish Meal', to: '/Fishmeal' },
        { src: img9, alt: 'feedextruder', text: 'Feed Extruder', to: '/Feedextruder' },
        { src: img6, alt: 'Livestockfeed', text: 'Livestock Feed', to: '/Livestockfeed' },
        { src: img7, alt: 'maizgrinding', text: 'Maiz Grinding', to: '/Maizgrinding' },
        { src: img4, alt: 'wheatgrinder', text: 'Wheat Grinder', to: '/Wheatgrinder' },
      ],
      [ { src: img5, alt: 'Fishmeal', text: 'Fish Meal', to: '/Fishmeal' },
        { src: img9, alt: 'feedextruder', text: 'Feed Extruder', to: '/Feedextruder' },
        { src: img4, alt: 'wheatgrinder', text: 'Wheat Grinder', to: '/Wheatgrinder' },
        { src: img6, alt: 'Livestockfeed', text: 'Livestock Feed', to: '/Livestockfeed' },
        { src: img7, alt: 'maizgrinding', text: 'Maiz Grinding', to: '/Maizgrinding' },
        { src: img8, alt: 'glasscutter', text: 'Glass Cutter', to: '/Glasscutter' },
      ],
      [ { src: img7, alt: 'maizgrinding', text: 'Maiz Grinding', to: '/Maizgrinding' },
        { src: img5, alt: 'Fishmeal', text: 'Fish Meal', to: '/Fishmeal' },
        { src: img9, alt: 'feedextruder', text: 'Feed Extruder', to: '/Feedextruder' },
        { src: img4, alt: 'wheatgrinder', text: 'Wheat Grinder', to: '/Wheatgrinder' },
        { src: img6, alt: 'Livestockfeed', text: 'Livestock Feed', to: '/Livestockfeed' }, 
        { src: img8, alt: 'glasscutter', text: 'Glass Cutter', to: '/Glasscutter' },
      ],
      [ { src: img5, alt: 'Fishmeal', text: 'Fish Meal', to: '/Fishmeal' },
        { src: img9, alt: 'feedextruder', text: 'Feed Extruder', to: '/Feedextruder' },
        { src: img4, alt: 'wheatgrinder', text: 'Wheat Grinder', to: '/Wheatgrinder' },
        { src: img6, alt: 'Livestockfeed', text: 'Livestock Feed', to: '/Livestockfeed' },
        { src: img7, alt: 'maizgrinding', text: 'Maiz Grinding', to: '/Maizgrinding' },
        { src: img8, alt: 'glasscutter', text: 'Glass Cutter', to: '/Glasscutter' },
      ],
      [ 
       { src: img8, alt: 'glasscutter', text: 'Glass Cutter', to: '/Glasscutter' },
       { src: img5, alt: 'Fishmeal', text: 'Fish Meal', to: '/Fishmeal' },
        { src: img9, alt: 'feedextruder', text: 'Feed Extruder', to: '/Feedextruder' },
        { src: img4, alt: 'wheatgrinder', text: 'Wheat Grinder', to: '/Wheatgrinder' },
        { src: img6, alt: 'Livestockfeed', text: 'Livestock Feed', to: '/Livestockfeed' },
        { src: img7, alt: 'maizgrinding', text: 'Maiz Grinding', to: '/Maizgrinding' },
       
      ],
      [ { src: img6, alt: 'Livestockfeed', text: 'Livestock Feed', to: '/Livestockfeed' },
        { src: img5, alt: 'Fishmeal', text: 'Fish Meal', to: '/Fishmeal' },
        { src: img9, alt: 'feedextruder', text: 'Feed Extruder', to: '/Feedextruder' },
        { src: img4, alt: 'wheatgrinder', text: 'Wheat Grinder', to: '/Wheatgrinder' },
        { src: img7, alt: 'maizgrinding', text: 'Maiz Grinding', to: '/Maizgrinding' },
        { src: img8, alt: 'glasscutter', text: 'Glass Cutter', to: '/Glasscutter' },
      ],
    ];

    setCategoryProducts(categoryItems);
  }, []);

  const handleSearch = () => {
    console.log('Search:', searchQuery, 'Type:', searchType);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleSearchIconClick = () => {
    setShowSearchBar(true);
  };

  const handleCloseSearchBar = () => {
    setShowSearchBar(false);
  };

  const handleMouseEnter = (index) => {
    setOpenCategory(index);
  };

  const handleMouseLeave = () => {
    setOpenCategory(null);
  };

  const handleSelectCategory = (index) => {
    setOpenCategory(index);
    // Set the products based on the selected category
    // For example, based on the mock data
    // This would be dynamically fetched or updated based on category
  };

  const categories1 = [
    {
      name: "Manufacturing & Processing Machinery",
      subcategories: [
        "Agriculture Machinery",
        "Machine Tools",
        "Other Machinery & Parts",
        "Construction Machinery",
        "Plastic & Woodworking Machinery",
      ],
    },
    {
      name: "Consumer Electronics",
      subcategories: [
        "Home Appliances",
        "Mobile Phones",
        "Electronic Gadgets",
        "Audio & Video Devices",
      ],
    },
  ];

  const items = [
    { src: img4, alt: 'wheatgrinder', text: 'Wheat Grinder', to: '/Wheatgrinder' },
    { src: img5, alt: 'Fishmeal', text: 'Fish Meal', to: '/Fishmeal' },
    { src: img6, alt: 'Livestockfeed', text: 'Livestock Feed', to: '/Livestockfeed' },
    { src: img7, alt: 'maizgrinding', text: 'Maiz Grinding', to: '/Maizgrinding' },
    { src: img8, alt: 'glasscutter', text: 'Glass Cutter', to: '/Glasscutter' },
    { src: img9, alt: 'feedextruder', text: 'Feed Extruder', to: '/Feedextruder' },
  ];

  const chunkSize = 6;

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {showPopup && <Popup onClose={handlePopupClose} />}

      {/* Top Navigation */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={Meta} alt="Logo" className="h-10" />
          <i><b className="flip-flop text-blue-600/100 text-xl">Meta Market</b></i>
        </div>
        <div className="flex space-x-4 items-center">
          <button
            onClick={handleSearchIconClick}
            className="bg-blue-500 text-white p-2 rounded-full flex items-center"
          >
            <FaSearch className="text-2xl" />
          </button>

          

          <button
            className="bg-blue-500 text-white p-2 rounded-full flex items-center"
          >
           <Link to="/Signin">
          <FaUserCircle className="text-2xl cursor-pointer" />
        </Link>
          </button>

          <button
            className="bg-blue-500 text-white p-2 rounded-full flex items-center"
          >
            <FaShoppingCart className="text-2xl" />
          </button>
          <button className="text-gray-700">Post My RFQ</button>
          <button className="text-gray-700">Account</button>
          <button className="text-gray-700">Messages</button>
          <button className="text-gray-700">Inquiry Basket</button>
        </div>
      </div>
      <Chat />
      <div className="banner-section bg-cover bg-center h-60 flex items-center justify-center relative" style={{ backgroundImage: `url(${bannerImage3})` }}>
      <div className="banner-content text-center text-white z-10">
        <h1 className="text-4xl md:text-4xl font-bold">Welcome to MetaMarket!</h1>
        <p className="text-lg md:text-xl mt-4">All Products at one place</p>
        <a href="./" className="mt-7 inline-block px-5 py-2 bg-blue-500 text-white font-medium text-md rounded-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </a>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text readability */}
    </div>
     

        {/* Middle Banner */}
        <div className="bg-gray-100 ">
        <div className="flex">
       
        <div className="w-1/4 bg-white shadow-sm overflow-y-scroll h-full">
      <h2 className="text-2xl font-semibold hover:text-blue-500 active:text-blue-500 cursor-pointer flex items-center">
        <Bars3Icon className="h-6 w-6 text-gray-500" /> {/* Adjust size and margin as needed */}
         Categories
      </h2>
      <Categories onSelectCategory={handleSelectCategory} />
    </div>



          <div className="w-3/4 p-4 border h-full">
            <div className="grid grid-cols-3 gap-4">
              {categoryProducts.length > 0 && categoryProducts[openCategory]?.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-4">
                  <img src={item.src} alt={item.alt} className="h-32 w-full object-cover rounded" />
                  <h3 className="mt-2 text-gray-700">{item.text}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <NewLaunch/>
      </div> 
        
      {/* Bottom Section */}
      <div className="flex space-x-4 p-4 bg-white shadow-md">
        {items.slice(0, chunkSize).map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center p-2 border border-gray-200 rounded">
            <img src={item.src} alt={item.alt} className="h-24 w-24 object-cover rounded mb-2" />
            <span className="text-center">{item.text}</span>
          </div>
        ))}
         
      </div>

      
      <div className="w-full center p-4 relative">
          <Carousel images={images} interval={3000} />
        </div>

      
       {/* Search Bar */}
       <div className={`fixed top-0 right-0 p-4 bg-white shadow-md transition-transform ${showSearchBar ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex space-x-2">
          <select 
            value={selectedOption} 
            onChange={handleOptionChange} 
            className="border border-gray-300 p-2 rounded-lg"
          >
            <option value="Product">Product</option>
            <option value="Supplier">Supplier</option>
          </select>
          <input
            type="text"
            placeholder="Enter a keyword to search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="border border-gray-300 p-2 rounded-lg w-80"
          />
          <button 
            onClick={handleSearch} 
            className="bg-blue-500 text-white p-2 rounded-lg"
          >
            Search
          </button>
          <button 
            onClick={handleCloseSearchBar} 
            className="bg-blue-500 text-white p-2 rounded-full ml-2"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>
      </div>

      <footer className="bg-gray-200 p-4 text-gray-700">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">

        <div>
          <h3 className="font-semibold mb-4">Discover Products & Suppliers</h3>
          <ul className="space-y-1 text-md">
            <li>Industry Sites</li>
            <li>Regional Channels</li>
            <li>Special Channel</li>
            <li>Custom Products</li>
            <li>Video Show</li>
            <li>Secured Trading Service</li>
            <li>Business Guide</li>
          </ul>
        </div>

        <div>
  <h3 className="font-semibold mb-4">Featured Service</h3>
  <ul className="space-y-1 text-md">
    <li>Star Buyer</li>
    <li>Trade Resources</li>
    <li>Logistics Partners</li>
  </ul> </div>

  <div>
      <h3 className="font-semibold mb-4">About Us</h3>
      <ul className="space-y-1 text-md">
        <li><Link to="/SellOnMetaMarket">Sell on MetaMarket</Link></li>
        <li><Link to="/ManagementVendorApproval">ManagementVendorApproval</Link></li>
        <li>Protect and Build Your Brand</li>
        <li>MetaMarket Global Selling</li>
        <li>Supply to MetaMarket</li>
        <li>Become an Affiliate</li>
        <li>Fulfilment by MetaMarket</li>
        <li>Advertise Your Products</li>
        <li>MetaMarket Pay on Merchants</li>
      </ul>
    </div>


        <div>
          <h3 className="font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-md">
            <li>About Made-in-China.com</li>
            <li>Site Map</li>
            <li>Trademark</li>
            <li>Friendly Links</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-md">
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Submit a Complaint</li>
          </ul>
        </div>


      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 border-t pt-4 space-y-4 sm:space-y-0">
      <div className="flex space-x-6">
        <a href="#"><img src={appStoreImage} alt="App Store" className="h-8" /></a>
        <a href="#"><img src={googlePlayImage} alt="Google Play" className="h-8" /></a>
      </div>

        <div className="text-center text-md sm:text-md">
          <p>Copyright © 1998-2024 Focus Technology Co., Ltd. All Rights Reserved.</p>
        </div>

        <div className="flex space-x-4 px-12">
  <a href="#" className="ml-[-10px] text-gray-700 hover:text-blue-600"><FaFacebook size={20} /></a>
  <a href="#" className="text-gray-700 hover:text-pink-500"><FaInstagram size={20} /></a>
  <a href="#" className="text-gray-700 hover:text-blue-400"><FaTwitter size={20} /></a>
  <a href="#" className="text-gray-700 hover:text-red-600"><FaYoutube size={20} /></a>
  <a href="#" className="text-gray-700 hover:text-red-400"><FaPinterest size={20} /></a>
  <a href="#" className="text-gray-700 hover:text-blue-700"><FaLinkedin size={20} /></a>
</div>

      </div>
    </footer>

    </div>
  );
};

export default HomePage;
