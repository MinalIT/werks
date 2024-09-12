// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPinterest, FaLinkedin } from 'react-icons/fa';
import appStoreImage from './Images/app_store.png'; // Ensure this image exists in the specified path
import googlePlayImage from './Images/google_play.png'; // Ensure this image exists in the specified path

const Footer = () => (
  <footer className="bg-gray-200 p-4 text-gray-700">
    <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">

      {/* Discover Products & Suppliers */}
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

      {/* Featured Service */}
      <div>
        <h3 className="font-semibold mb-4">Featured Service</h3>
        <ul className="space-y-1 text-md">
          <li>Star Buyer</li>
          <li>Trade Resources</li>
          <li>Logistics Partners</li>
        </ul>
      </div>

      {/* MetaMarket Services */}
      <div>
        <h3 className="font-semibold mb-4">MetaMarket Services</h3>
        <ul className="space-y-1 text-md">
          <li><Link to="/SellOnMetaMarket">Sell on MetaMarket</Link></li>
          <li><Link to="/ManagementVendorApproval">Management Vendor Approval</Link></li>
          <li>Protect and Build Your Brand</li>
          <li>MetaMarket Global Selling</li>
          <li>Supply to MetaMarket</li>
          <li>Become an Affiliate</li>
          <li>Fulfillment by MetaMarket</li>
          <li>Advertise Your Products</li>
          <li>MetaMarket Pay on Merchants</li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h3 className="font-semibold mb-4">Company</h3>
        <ul className="space-y-2 text-md">
          <li>About Made-in-China.com</li>
          <li>Site Map</li>
          <li>Trademark</li>
          <li>Friendly Links</li>
        </ul>
      </div>

      {/* Help */}
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
      {/* App Store and Google Play Links */}
      <div className="flex space-x-6">
        <a href="#"><img src={appStoreImage} alt="App Store" className="h-8" /></a>
        <a href="#"><img src={googlePlayImage} alt="Google Play" className="h-8" /></a>
      </div>

      {/* Copyright */}
      <div className="text-center text-md sm:text-md">
        <p>Copyright © 1998-2024 Focus Technology Co., Ltd. All Rights Reserved.</p>
      </div>

      {/* Social Media Icons */}
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
);

export default Footer;
