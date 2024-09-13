import React, { useState ,useRef ,useEffect} from 'react';
import B1 from './Images/Banner1.png';
import B2 from './Images/Banner2.png';
import { Link } from 'react-router-dom';
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon, // Use this instead of SearchIcon
  MapPinIcon, // Use this instead of LocationMarkerIcon
  ChevronDownIcon,
  UserIcon,
  SparklesIcon,
  PhoneIcon,
  EnvelopeIcon, // Use this instead of MailIcon
  InformationCircleIcon,
  TagIcon,
  CheckCircleIcon, HomeIcon, CreditCardIcon
} from '@heroicons/react/24/solid';
import './Signin.css';

import girlheadphone from './Images/girlheadphone.png';
import tvstand from './Images/tvstand.png';
import wadrobe from './Images/wadrobe.png';
import sofa from './Images/sofa.png';
import bed from './Images/bed.png';
import Diningtable from './Images/Diningtable.png';
import chairnew from './Images/chairnew.png';
import cofeetable from './Images/cofeetable.png';
import bookshelf from './Images/bookshelf.png';

import backpack from './Images/backpack.png';
import tote from './Images/tote.png';
import slingbag from './Images/slingbag.png';
import satchel from './Images/satchel.png';
import clutch from './Images/clutch.png';
import hobebag from './Images/hobebag.png';
import leatherbag from './Images/leatherbag.png';
import leatherbagdeal from './Images/leatherbagdeal.png';
import leatherbagdeal1 from './Images/leatherbagdeal1.png';
import messengerbag from './Images/messengerbag.png';

import warandpeace from './Images/warandpeace.png';
import thegreatgatsby from './Images/thegreatgatsby.jpg';
import book from './Images/1984.png';
import hamlet from './Images/hamlet.jpg';
import moby from './Images/moby.jpg';
import pride from './Images/pride.jpg';
import theodysy from './Images/theodysy.jpg';
import tokillabird from './Images/tokillabird.jpg';

import vr from './Images/vr.png';
import phone from './Images/phone.png';
import gaming from './Images/gaming.png';
import bud from './Images/bud.png';
import laptop from './Images/laptop.png';
import tablet from './Images/tablet.png';
import drone from './Images/drone.png';
import smartwatch from './Images/smartwatch.png';

import trainer from './Images/trainer.png';
import tennis from './Images/tennis.png';
import runningshoes from './Images/runningshoes.png';
import basketball from './Images/basketball.png';
import casual from './Images/casual.png';
import hightops from './Images/hightops.png';
import skate from './Images/skate.png';
import sliponshoe from './Images/sliponshoe.png';

import headphones from './Images/headphones.png';
import bluetooth from './Images/bluetooth.png';
import camera from './Images/camera.png';
import keyboard from './Images/keyboard.png';
import monitor from './Images/monitor.png';
import mouse from './Images/mouse.png';


import catbag from './Images/catbag.jpg';
import catbook from './Images/catbook.jpg';
import catelectronics from './Images/catelectronics.jpg';
import catfur from './Images/catfur.jpg';
import cattech from './Images/cattech.jpg';
import catsneakers from './Images/catsneakers.jpg';

import gammingheadphones from './Images/gammingheadphone.png';
import pro13 from './Images/pro13.png';
import Airpodmax from './Images/Airpodmax.png';
import ipadmini from './Images/ipadmini.png';

import stigaTableTennis from './Images/stigaTableTennis.png';
import spaldingBasketball from './Images/spaldingBasketball.png';
import wilsonBasketball from './Images/wilsonBasketball.png';
import yonexRacket from './Images/yonexRacket.png';
import appStoreImage from './Images/app_store.png'; 
import googlePlayImage from './Images/google_play.png';
import { useNavigate } from 'react-router-dom'; 


import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPinterest, FaLinkedin } from 'react-icons/fa';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);
  const [selectedCategory, setSelectedCategory] = useState('Furniture');
  const [rating, setRating] = useState(0); // Initial rating is 0
    const [hover, setHover] = useState(0); 
    const [showPopup, setShowPopup] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const dealsRef = useRef(null); 
  const newRef = useRef(null); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup1, setShowPopup1] = useState(false);
  const navigate = useNavigate();
  const quickLinksRef = useRef(null);
    const [query, setQuery] = useState('');
    
  
    const handleSearch = () => {
      // Normalize the query for case-insensitive comparison
      const normalizedQuery = query.toLowerCase();
      
      let found = false;
      
      // Iterate through product categories and check if the query matches any product
      for (const category in products) {
        const result = products[category].find(product => 
          product.name.toLowerCase().includes(normalizedQuery)
        );
  
        if (result) {
          navigate(result.route);
          found = true;
          break;
        }
      }
  
      // If no product found, navigate to 404 page
      if (!found) {
        navigate('/PageNotFound');
      }
    }


  const handleOptionquickClick = () => {
    quickLinksRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOptionClick = (path) => {
    setShowPopup1(false); // Close the popup
    navigate(path); // Navigate to the chosen page
  };
  const images = [B1, B2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]); // Include images.length in the dependency array

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
    const scrollToDeals = () => {
      if (dealsRef.current) {
        dealsRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the Deals section
      }
    };
   
    const scrollToNews = () => {
      if (newRef.current) {
        newRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the Deals section
      }
    };

    const handleCart = () => {
      navigate('/Userdashboard');
    };
    
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

   

    const categories = [
      { name: 'Furniture', image: catfur },
      { name: 'Hand Bag', image: catbag },
      { name: 'Books', image: catbook },
      { name: 'Tech', image: cattech },
      { name: 'Sneakers', image: catsneakers},
      { name: 'Electronics', image: catelectronics },
  ];


  const products = {
    Furniture: [
      { id: 1, name: 'Sofa Set', price: ' ₹2000', image: sofa , route: '/Sofaset'},
      { id: 2, name: 'Dining Table', price: ' ₹4000', image: Diningtable , route: '/Dinningtable'},
      { id: 3, name: 'Wardrobe', price: ' ₹4000', image: wadrobe , route: '/Wadrobe' },
      { id: 4, name: 'Chair', price: ' ₹1000', image: chairnew , route: '/Chair'},
      { id: 5, name: 'Bed', price: ' ₹2000', image: bed , route: '/Bed'},
      { id: 6, name: 'Coffee Table', price: ' ₹2000', image: cofeetable , route: '/Coffeetable'},
      { id: 7, name: 'Bookshelf', price: ' ₹2000', image: bookshelf , route: '/Bookshelf'},
      { id: 8, name: 'TV Stand', price: ' ₹2000', image: tvstand , route: '/Tvstand'},
    ],
    'Hand Bag': [
      { id: 1, name: 'Leather Bag', price: ' ₹2000', image: leatherbag , route: '/Leatherbag'},
      { id: 2, name: 'Canvas Tote', price: ' ₹1500', image: tote , route: '/Canvas'},
      { id: 3, name: 'Backpack', price: ' ₹1500', image: backpack , route: '/Backpack'},
      { id: 4, name: 'Clutch', price: ' ₹1000', image: clutch , route: '/Clutch'},
      { id: 5, name: 'Sling Bag', price: ' ₹1200', image: slingbag , route: '/Slingbag'},
      { id: 6, name: 'Satchel', price: ' ₹1000', image: satchel , route: '/Satchel'},
      { id: 7, name: 'Messenger Bag', price: ' ₹1000', image: messengerbag , route: '/Messesnger'},
      { id: 8, name: 'Hobo Bag', price: ' ₹1000', image: hobebag , route: '/Hobe'},
    ],
    Books: [
      { id: 1, name: 'The Great Gatsby', price: ' ₹1000', image: thegreatgatsby, route: '/Thegreat' },
      { id: 2, name: '1984', price: ' ₹1000', image: book , route: '/The1984'},
      { id: 3, name: 'To Kill a Mockingbird', price: ' ₹1000', image: tokillabird , route: '/Kill'},
      { id: 4, name: 'Pride and Prejudice', price: ' ₹1000', image: pride , route: '/Pride'},
      { id: 5, name: 'Moby Dick', price: ' ₹1000', image: moby , route: '/Moby'},
      { id: 6, name: 'War and Peace', price: ' ₹1000', image: warandpeace , route: '/Warandpeace'},
      { id: 7, name: 'The Odyssey', price: ' ₹1000', image: theodysy , route: '/Theodysy'},
      { id: 8, name: 'Hamlet', price: ' ₹1000', image: hamlet , route: '/Hamlet'},
    ],
    Tech: [
      { id: 1, name: 'Wireless Earbuds', price: ' ₹99', image: bud , route: '/Airdot' },
      { id: 2, name: 'Smartphone', price: ' ₹799', image: phone , route: '/Smartphone'},
      { id: 3, name: 'Laptop', price: ' ₹999', image: laptop , route: '/Laptop'},
      { id: 4, name: 'Smartwatch', price: ' ₹199', image: smartwatch , route: '/Smartwatch'},
      { id: 5, name: 'Tablet', price: ' ₹499', image: tablet , route: '/Tablet'},
      { id: 6, name: 'Gaming Console', price: ' ₹399', image: gaming , route: '/Gamming'},
      { id: 7, name: 'Drone', price: ' ₹599', image: drone , route: '/Drone'},
      { id: 8, name: 'VR Headset', price: ' ₹299', image: vr , route: '/Vrset'},
    ],
    Sneakers: [
      { id: 1, name: 'Running Shoes', price: ' ₹59', image: runningshoes , route: '/Running'},
      { id: 2, name: 'Basketball Shoes', price: ' ₹89', image: basketball , route: '/Basketball'},
      { id: 3, name: 'Casual Sneakers', price: ' ₹69', image: casual , route: '/Casual'},
      { id: 4, name: 'High Tops', price: ' ₹99', image: hightops , route: '/Hightops'},
      { id: 5, name: 'Tennis Shoes', price: ' ₹79', image: tennis , route: '/Tennis'},
      { id: 6, name: 'Slip-ons', price: ' ₹49', image: sliponshoe , route: '/Slipon'},
      { id: 7, name: 'Trainers', price: ' ₹89', image: trainer , route: '/Trainers'},
      { id: 8, name: 'Skate Shoes', price: ' ₹79', image: skate , route: '/Skate'},
    ],
    Electronics: [
      { id: 1, name: 'Bluetooth Speaker', price: ' ₹49', image: bluetooth , route: '/Bluetooth' },
      { id: 2, name: 'Smartwatch', price: ' ₹199', image: smartwatch , route: '/Smartwatch'},
      { id: 3, name: 'Camera', price: ' ₹699', image: camera , route: '/Camera'},
      { id: 4, name: 'Headphones', price: ' ₹149', image: headphones , route: '/Headphone'},
      { id: 5, name: 'Tablet', price: ' ₹299', image: tablet , route: '/Tablet'},
      { id: 6, name: 'Monitor', price: ' ₹249', image: monitor , route: '/Monitor'},
      { id: 7, name: 'Keyboard', price: ' ₹69', image: keyboard , route: '/Keyboard'},
      { id: 8, name: 'Mouse', price: ' ₹39', image: mouse , route: '/Mouse'},
    ],
  };
  const handleBuyNow = () => {
    setShowPopup(true);
  };

  const handleAddToCart = () => {
    setShowPopup(false);
    setShowSignIn(true);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setShowSignIn(false);
    setOrderSuccess(true);
  };

  const productnew = [
    { id: 1, name: 'iPad Mini', price: 569, image: ipadmini , route: '/Ipadmini'},
    { id: 2, name: 'Gaming Headphone', price: 239, image: gammingheadphones , route: '/Headphone'},
    { id: 3, name: 'Macbook Pro 13"', price: 1099, image: pro13 , route: '/Mac13pro'},
    { id: 4, name: 'AirPods Max', price: 559, image: Airpodmax, route: '/Airpodmax' },
   
    // Add more products here
  ];

  const productdeal = [
    { id: 1, name: 'Red Leather Bag', price: 239, image: leatherbag, route: '/Leatherbag' },
    { id: 2, name: 'Hobe Bag', price: 1099, image: hobebag, route: '/Hobe' },
    { id: 3, name: 'Running Shoe', price: 559, image: runningshoes, route: '/Running' },
    { id: 4, name: 'ipad mini ', price: 559, image: ipadmini, route: '/Ipadmini' },
  ];

  const sportsProducts = [
    { id: 1, name: 'Wilson Evolution Basketball', price: 75, image: wilsonBasketball, route: '/WilsonBasketBall' },
    { id: 2, name: 'Spalding NBA Official Game Ball', price: 120, image: spaldingBasketball, route: '/Spadling' },
    { id: 3, name: 'Yonex Astrox 88D Badminton Racket', price: 150, image: yonexRacket, route: '/YonexRacket' },
    { id: 4, name: 'STIGA Advantage Table Tennis Table', price: 350, image: stigaTableTennis, route: '/StigaTableTennis' }, // Dynamic route
];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  
   
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
     
      <header className="bg-green-700 text-white p-2 flex flex-col animate-fadeIn">
      {/* Flash Offer Banner */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-1 space-y-2 sm:space-y-0 sm:space-x-4">
        <div className="flex items-center space-x-4">
        <button
        className="transition-transform transform hover:scale-105"
        onClick={() => setShowPopup1(!showPopup1)} // Toggle the popup
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
          aria-label="Menu"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <div
        className={`absolute top-14 text-cyan-600 left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transform transition-all duration-1000 ease-in-out ${
          showPopup1 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <ul className="p-2">
          <li
            className="cursor-pointer py-2 px-4 hover:bg-gray-100"
            onClick={() => handleOptionClick('/Aboutus')}
          >
            About Us
          </li>
          <li
            className="cursor-pointer py-2 px-4 hover:bg-gray-100"
            onClick={() => handleOptionClick('/CustomerServices')}
          >
            Customer Service
          </li>
          
          <li
            className="cursor-pointer py-2 px-4 hover:bg-gray-100"
            onClick={() => handleOptionClick('/Rules')}
          >
            Terms & Conditions
          </li>
          <li
            className="cursor-pointer py-2 px-4 hover:bg-gray-100"
            onClick={handleOptionquickClick}
          >
            Quick Links
          </li>
          <li
            className="cursor-pointer py-2 px-4 hover:bg-gray-100"
            onClick={() => handleOptionClick('/CustomerServices')}
          >
            Contact
          </li>
          <li
            className="cursor-pointer py-2 px-4 hover:bg-gray-100"
            onClick={() => handleOptionClick('/Privacy')}
          >
            Privacy And Policy
          </li>
          <li
            className="cursor-pointer py-2 px-4 hover:bg-gray-100"
            onClick={() => handleOptionClick('/Refund')}
          >
            Return And Refund Policy
          </li>
          <li
            className="cursor-pointer py-2 px-4 hover:bg-gray-100"
            onClick={() => handleOptionClick('/CustomerServices')}
          >
            Submit a Complaint
          </li>
        </ul>
        {/* Close Button */}
        <div className="flex justify-end p-2">
          <button
            onClick={() => setShowPopup1(false)}
            className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    
  

          <h1 className="text-2xl font-bold transition-colors duration-300 hover:text-gray-300">ShopCart</h1>
        </div>

        <div className="container mx-auto p-1">
      {/* Latest Deals Section */}
      
      <div className="flex justify-center items-center space-x-1 animate-wipe">
  <p className="font-bold text-white text-lg animate-flash m-0">
    🌟 Latest Deals 🌟 Check out our latest deals and save big on your favorite products!
  </p>
  <button
    onClick={scrollToDeals}
    className="ml-4 px-2 py-1 text-black font-semibold bg-gray-100 rounded-full transition-transform duration-300 hover:scale-105 hover:bg-gray-200"
  >
    Check All Deals
  </button>
</div> </div>

<div className="flex items-center bg-white text-black px-2 py-1 rounded-md transition-shadow duration-300 hover:shadow-lg">
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 mr-2" aria-label="Search Icon" />
      <input
        type="text"
        className="outline-none flex-grow"
        placeholder="Search product"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <span className="ml-6 font-semibold">+001234567890</span>
    </div>
      </div>

    </header>

      {/* Navigation */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <div className="flex space-x-8">
          <div className="relative">
           

          <div className="relative flex items-center cursor-pointer">
      {/* Button to toggle the dropdown */}
      <button onClick={toggleDropdown} className="text-lg">Categories</button>

      {/* Dropdown section */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 bg-white shadow-lg mt-2 p-6 z-50 w-screen">
          {/* Dropdown spans the full width of the screen */}
          <div className="grid grid-cols-6 gap-8">
            {Object.entries(products).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-teal-600 font-bold text-lg">{category.toUpperCase()}</h3>
                <ul className="mt-2 space-y-2">
                  {items.map(item => (
                    <li key={item.id} className="flex items-center space-x-2">
                    
                      <Link to={item.route} className="text-gray-700 hover:text-teal-500">
                        <div>
                          <div className="font-semibold">{item.name}</div>
                          
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Close Button */}
          <div className="absolute top-2 right-8">
            <button onClick={toggleDropdown} className="text-gray-600 hover:text-gray-800 text-xl">&times;</button>
          </div>
        </div>
      )}
    </div>

 </div>         
          <div className="flex items-center cursor-pointer" onClick={scrollToDeals}>
          <TagIcon className="h-5 w-5 text-green mr-1" />
          <span>Deals</span>
        </div>
        <div className="flex items-center cursor-pointer" onClick={scrollToNews}>
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
      <Link to="/Buynowpage" className="flex items-center mr-4">
      <UserIcon className="h-5 w-5 text-green mr-2" />
      <span>Account</span>
    </Link>
      <Link to="/Userdashboard" className="flex items-center mr-4">
      <ShoppingCartIcon className="h-6 w-6 text-green ml-4" />
      <span>Cart</span>
    </Link>
        </div>
      </nav>
      <section className="bg-green-200 p-10 flex justify-around items-center mb-8">

        {/*Buy now*/ }
        <div className='mt-20 mb-20'>
      <h1 className="text-3xl font-bold">Grab Up to 50% Off On Selected Headphones</h1>
      <button className="bg-green-500 text-white px-10 py-2 rounded-full mt-14 flex items-center" onClick={handleBuyNow}>
        Buy Now <ShoppingCartIcon className="h-5 w-5 ml-2" />
      </button>

      {showPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg relative">
      {/* Close Button */}
      <button
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
        onClick={() => setShowPopup(false)}
      >
        &times;
      </button>

      {/* Image Section */}
      <img 
        src={headphones}
        alt="Handset" 
        className="w-32 h-32 object-cover mx-auto mb-4" 
      />

      {/* Popup Content */}
      <h2 className="text-2xl font-bold">50% Off on Handset</h2>
      <p>Original Price: ₹2000</p>
      <p>Discounted Price: ₹1000</p>

      <button
        className="bg-green-500 text-white px-4 py-2 rounded-full mt-4 flex items-center"
        onClick={handleAddToCart}
      >
        Add to Cart <ShoppingCartIcon className="h-5 w-5 ml-2" />
      </button>
    </div>
  </div>
)}


{showSignIn && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
      {/* Close Button */}
      <button
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
        onClick={() => setShowSignIn(false)} // Close the sign-in popup
      >
        &times;
      </button>
            <h2 className="text-2xl font-bold">Enter Delivery & Payment Details</h2>
            <form onSubmit={handleSignIn}>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium">Delivery Address</label>
                <div className="flex items-center border w-full p-2 rounded mb-3">
                  <HomeIcon className="h-5 w-5 text-gray-500 mr-2" />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full outline-none"
                    required
                  />
                </div>
                <div className="flex items-center border w-full p-2 rounded mb-3">
                  <HomeIcon className="h-5 w-5 text-gray-500 mr-2" />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full outline-none"
                    required
                  />
                </div>
                <div className="flex items-center border w-full p-2 rounded mb-3">
                  <HomeIcon className="h-5 w-5 text-gray-500 mr-2" />
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full outline-none"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium">Payment Details</label>
                <div className="flex items-center border w-full p-2 rounded mb-3">
                  <CreditCardIcon className="h-5 w-5 text-gray-500 mr-2" />
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full outline-none"
                    required
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="flex items-center border w-full p-2 rounded mb-3">
                    <CreditCardIcon className="h-5 w-5 text-gray-500 mr-2" />
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="Expiry Date (MM/YY)"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="w-full outline-none"
                      required
                    />
                  </div>
                  <div className="flex items-center border w-full p-2 rounded mb-3">
                    <CreditCardIcon className="h-5 w-5 text-gray-500 mr-2" />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="w-full outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-full mt-4 flex items-center"
              >
                Proceed to Payment <CreditCardIcon className="h-5 w-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      )}

      {orderSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-600 flex items-center">
              <CheckCircleIcon className="h-6 w-6 mr-2" />
              Order Successful!
            </h2>
            <p>Thank you for your purchase. Your order will be delivered soon.</p>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-full mt-4"
              onClick={() => setOrderSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
            <img src={girlheadphone} alt="Headphones" className="h-40 w-50"/>
            

          </section>

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-1/12 bg-white p-6 space-y-3 overflow-y-auto">
      <div className="font-bold text-l">Categories</div>
      <ul className="space-y-3">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`cursor-pointer p-1 rounded-lg ${
              selectedCategory === category.name
                ? 'bg-green-300 text-white border border-green-300'
                : 'bg-gray-200 text-gray-600'
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            <img
              src={category.image}
              alt={category.name}
              className={`w-20 h-20 object-cover rounded-lg flex justify-items-center ${
                selectedCategory === category.name ? 'border-separate border-green-300' : ''
              }`}
            />
          </li>
        ))}
      </ul>
    </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 bg-white overflow-y-auto">
                <h2 className="text-lg font-bold mb-4">{selectedCategory}</h2>
                <div className="grid grid-cols-4 gap-4">
                    {products[selectedCategory]?.map((product) => (
                        <div key={product.id} className="bg-slate-200 p-4 rounded-xl shadow-md">
                           


<Link to={product.route}>
             {/*} <img
                src={product.image}
                alt={product.name}
                className="w-40 h-32 object-cover mb-2 rounded-md cursor-pointer displaiflex align-center"
              />*/}


<div className="flex justify-center items-center">
  <img
    src={product.image}
    alt={product.name}
    className="w-40 h-32 object-cover mb-2 rounded-md cursor-pointer"
  />
</div>

            </Link>

                            <div className="text-lg font-bold">{product.name}</div>
                            <div className="text-gray-600">{product.price}</div>
                            <div className="flex">
                                {[...Array(5)].map((star, index) => {
                                    index += 1;
                                    return (
                                        <button
                                            type="button"
                                            key={index}
                                            className={
                                                index <= (hover || rating)
                                                    ? 'text-green-500'
                                                    : 'text-white'
                                            }
                                            onClick={() => setRating(index)}
                                            onMouseEnter={() => setHover(index)}
                                            onMouseLeave={() => setHover(rating)}
                                        >
                                            <span className="text-2xl">&#9733;</span>
                                        </button>
                                    );
                                })}
                            </div>
                            <div className="px-0.1">
                            <button
      className="w-1/2 center bg-white-500 text-green text-xs py-2 px-1 rounded-full hover:bg-gray-200 border border-green-700 transition-colors"
      onClick={handleCart}
    >
      Add to Cart
    </button></div>
                        </div>
                    ))}
                </div>
            </main> 
              </div>
           

    {/*deal*/}
    <div className="container mx-auto p-1">
      {/* Deals of the Day Section */}
      <main className="flex-1 p-4 bg-white overflow-y-auto mt-0"  ref={dealsRef}>
        <h2 className="text-2xl font-bold mb-4 text-red-700 ">Deals of the Day - 20:45:12 Left</h2>
        <div className="grid grid-cols-4 gap-4">
          {productdeal.map((product) => (
            <div key={product.id} className="bg-gray-200 p-4 rounded-xl shadow-md">
              <Link to={product.route}>
               {/*} <img
                  src={product.image}
                  alt={product.name}
                  className="w-1/2 h-32 object-cover mb-2 rounded-md cursor-pointer"
                />*/}

<div className="flex justify-center items-center">
  <img
    src={product.image}
    alt={product.name}
    className="w-40 h-32 object-cover mb-2 rounded-md cursor-pointer"
  />
</div>
              </Link>
              <div className="text-lg font-bold text-green-700">{product.name}</div>
              <div className="text-gray-600">₹{product.price}</div>
              <div className="flex mt-2">
                {[...Array(5)].map((star, i) => {
                  i += 1;
                  return (
                    <button
                      type="button"
                      key={i}
                      className={i <= (hover || rating) ? 'text-green-500' : 'text-white'}
                      onClick={() => setRating(i)}
                      onMouseEnter={() => setHover(i)}
                      onMouseLeave={() => setHover(rating)}
                    >
                      <span className="text-2xl">&#9733;</span>
                    </button>
                  );
                })}
              </div>
              <div className="px-0.1 mt-4">
              <button
      className="w-1/2 center bg-white-500 text-green text-xs py-2 px-1 rounded-full hover:bg-gray-200 border border-green-700 transition-colors"
      onClick={handleCart}
    >
      Add to Cart
    </button>
        </div>
              </div>
            
          ))}
        </div>
      </main>
    

 {/*other*/}
 <main className="flex-1 p-1 bg-white overflow-y-auto mt-1" >
  <h2 className="text-2xl font-bold mb-4 text-green-700"> Similar Items</h2>
  <div className="grid grid-cols-4 gap-4">
    {productnew.map((product) => (
      <div key={product.id} className="bg-gray-200 p-4 rounded-xl shadow-md">
        <Link to={product.route}>
        <div className="flex justify-center items-center">
  <img
    src={product.image}
    alt={product.name}
    className="w-40 h-32 object-cover mb-2 rounded-md cursor-pointer"
  />
</div>
        </Link>

        <div className="text-lg font-bold text-green-700">{product.name}</div>
        <div className="text-gray-600">₹{product.price}</div>
        <div className="flex mt-2">
          {[...Array(5)].map((star, i) => {
            i += 1;
            return (
              <button
                type="button"
                key={i}
                className={i <= (hover || rating) ? 'text-green-500' : 'text-white'}
                onClick={() => setRating(i)}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className="text-2xl">&#9733;</span>
              </button>
            );
          })}
        </div>
        <div className="px-0.1 mt-4">
        <button
      className="w-1/2 center bg-white-500 text-green text-xs py-2 px-1 rounded-full hover:bg-gray-200 border border-green-700 transition-colors"
      onClick={handleCart}
    >
      Add to Cart
    </button>
        </div>
      </div>
    ))}
  </div>
</main>
    



      {/* Product Category Section */}
      <main className="flex-0 p-1 bg-white overflow-y-auto mt-1" ref={newRef}>
  <h2 className="text-2xl font-bold mb-4 text-green-700"> New Equipment Launches</h2>
  <div className="grid grid-cols-4 gap-4">
    {sportsProducts.map((product) => (
      <div key={product.id} className="bg-gray-200 p-4 rounded-xl shadow-md">
        <Link to={product.route}>
        <div className="flex justify-center items-center">
  <img
    src={product.image}
    alt={product.name}
    className="w-40 h-32 object-cover mb-2 rounded-md cursor-pointer"
  />
</div>
        </Link>

        <div className="text-lg font-bold text-green-700">{product.name}</div>
        <div className="text-gray-600">₹{product.price}</div>
        <div className="flex mt-2">
          {[...Array(5)].map((star, i) => {
            i += 1;
            return (
              <button
                type="button"
                key={i}
                className={i <= (hover || rating) ? 'text-green-500' : 'text-white'}
                onClick={() => setRating(i)}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className="text-2xl">&#9733;</span>
              </button>
            );
          })}
        </div>
        <div className="px-0.1 mt-4">
        <button
      className="w-1/2 center bg-white-500 text-green text-xs py-2 px-1 rounded-full hover:bg-gray-200 border border-green-700 transition-colors"
      onClick={handleCart}
    >
      Add to Cart
    </button>
        </div>
      </div>
    ))}
  </div>
</main>
    </div>


    <div className="mt-2 mb-2 px-4 flex justify-center">
      <div className="relative w-full max-w-7.01xl h-96 overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt="Banner"
          className="w-full h-full object-cover absolute transition-opacity duration-1000 ease-in-out"
        />
      </div>
    </div>
    
         
      

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-800 p-4">
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
      </ul>
    </div>

    <div ref={quickLinksRef}>
      <h3 className="font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-1 text-md">
        <li><Link to="/SellOnMetaMarket">Sell on ShopCart</Link></li>
        <li><Link to="/ManagementVendorApproval">ManagementVendorApproval</Link></li>
        <li>Protect and Build Your Brand</li>
        <li>MetaMarket Global Selling</li>
        <li>Supply to ShopCart</li>
        <li>Become an Affiliate</li>
        <li>Fulfilment by ShopCart</li>
        <li>Advertise Your Products</li>
        <li>MetaMarket Pay on Merchants</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-4">About Us</h3>
      <ul className="space-y-2 text-md">
        <li className="flex items-center">
          <InformationCircleIcon className="h-4 w-4 mr-2" />
          <Link to="/Aboutus">About Us</Link>
        </li>
        <li className="flex items-center">
          <PhoneIcon className="h-4 w-4 mr-2" />
          <Link to="/CustomerServices"> Contact</Link>
         
        </li>

        <li className="flex items-center">
          <EnvelopeIcon className="h-4 w-4 mr-2" />
          <Link to="/CustomerServices"> Email</Link>
        </li>

      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-4">Help</h3>
      <ul className="space-y-2 text-md">
        <li><Link to="/CustomerServices"> Customer Services</Link></li>
        <li><Link to="/Privacy"> Privacy policy</Link></li>
        <li><Link to="/Refund"> Return and Refund</Link></li>
      </ul>
    </div>
  </div>

  <div className="flex flex-col sm:flex-row justify-between items-center mt-6 border-t pt-4 space-y-4 sm:space-y-0">
    <div className="flex space-x-6">
      <a href="#"><img src={appStoreImage} alt="App Store" className="h-8" /></a>
      <a href="#"><img src={googlePlayImage} alt="Google Play" className="h-8" /></a>
    </div>

    <div className="text-center text-md sm:text-md">
      <p>Copyright © 2024 Vibe Copilot All Rights Reserved.</p>
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
}

export default App;