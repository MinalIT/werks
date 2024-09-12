import React, { useState, useEffect } from 'react';
import B1 from './Images/Banner1.png';
import B2 from './Images/Banner2.png';
import B3 from './Images/Banner3.png';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [B1, B2, B3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]); // Include images.length in the dependency array

  return (
    <div className="mt-20 mb-20 px-4 flex justify-center">
      <div className="relative w-full max-w-7xl h-96 overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt="Banner"
          className="w-full h-full object-cover absolute transition-opacity duration-1000 ease-in-out"
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
