import React, { useState, useRef, useEffect } from 'react';
import ThermalPrinter from './Images/ThermalPrinter.jpg';
import Chair from './Images/chair.jpg';
import Yogamat from './Images/Yogamat.jpg';
import Footwear from './Images/footwear.jpg';
import setupbox from './Images/setupbox.jpg';

const products = [
  { id: 1, imgSrc: Yogamat, alt: 'Yogamat', title: 'Yogamat', description: 'Perfect for yoga comfort and style.', label: 'New' },
  { id: 2, imgSrc: ThermalPrinter, alt: 'Thermal Printer', title: 'Thermal Printer', description: 'High-quality thermal printer', label: 'Trending' },
  { id: 3, imgSrc: Chair, alt: 'Chair', title: 'Chair', description: 'Maximum comfort during long hours.', label: 'Limited Stock' },
  { id: 4, imgSrc: Footwear, alt: 'Footwear', title: 'Footwear', description: 'Comfortable footwear for everyday use.', label: 'Limited Stock' },
  { id: 5, imgSrc: setupbox, alt: 'SetUpBox', title: 'SetUpBox', description: 'Comfortable SetUpBox for everyday use.', label: 'Limited Stock' },
];

const NewLaunches = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Show four items at a time
  const carouselRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    // Function to calculate and set item width
    const updateItemWidth = () => {
      if (carouselRef.current) {
        setItemWidth(carouselRef.current.offsetWidth / itemsPerPage);
      }
    };

    // Set initial item width
    updateItemWidth();

    // Update item width on window resize
    window.addEventListener('resize', updateItemWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateItemWidth);
    };
  }, [itemsPerPage]); // Only re-run effect if itemsPerPage changes

  const nextProduct = () => {
    if (currentIndex < products.length - itemsPerPage) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevProduct = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section className="p-6 bg-gray-50 relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">New Launches</h2>
      <div className="relative flex items-center">
        <button
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${currentIndex === 0 ? 'invisible' : 'visible'} z-10`}
          onClick={prevProduct}
        >
          &lt;
        </button>
        <div className="overflow-hidden w-full" ref={carouselRef}>
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="w-1/4 p-4 flex-shrink-0">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
                  <div className="relative h-48">
                    <img src={product.imgSrc} alt={product.alt} className="h-full w-full object-cover" />
                    <span className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full text-white ${product.label === 'New' ? 'bg-blue-500' : product.label === 'Trending' ? 'bg-green-500' : 'bg-red-500'}`}>
                      {product.label}
                    </span>
                  </div>
                  <div className="p-4 h-40">
                    <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">View Product</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${currentIndex >= products.length - itemsPerPage ? 'invisible' : 'visible'} z-10`}
          onClick={nextProduct}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default NewLaunches;
