import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-yellow-500 h-80 flex items-center justify-center">
      <img src="hero-image.jpg" alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-50" />
      <div className="relative z-10 text-center text-white">
        <h2 className="text-4xl font-bold">World Food Day</h2>
        <p>Verified Suppliers & Quality Products</p>
        <button className="bg-white text-yellow-500 px-4 py-2 mt-4 rounded-full">
          View More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
