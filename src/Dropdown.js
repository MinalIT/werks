// DropdownMenu.js
import React, { useState } from 'react';
import CategoryColumn from './CategoryColumn';

const categories = [
  {
    name: 'Furniture',
    subCategories: ['Beds', 'Sofas', 'Chairs', 'Tables', 'Cabinets'],
  },
  {
    name: 'Electronics',
    subCategories: ['Phones', 'Laptops', 'Cameras', 'Headphones', 'Speakers'],
  },
  // Add more categories as needed
];

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Categories
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 shadow-lg flex">
          {categories.map((category, index) => (
            <CategoryColumn key={index} category={category} />
          ))}
        </div>
      )}
    </div>
  );
};



export default Dropdown;
