import React, { useState, useEffect } from 'react';

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div className="grid grid-cols-5 gap-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="border p-2 bg-white hover:shadow-md transition-shadow"
        >
          <h3 className="text-sm font-medium">{product.name}</h3>
          <p className="text-xs text-gray-500">{product.details}</p>
        </div>
      ))}
    </div>
  );
};

const CategoriesSidebar = ({ categories1 = [], categoryProducts = [] }) => {
  const [openCategory, setOpenCategory] = useState(0); // Default to the first category

  // Debugging: Log categories and products to see what is being passed
  useEffect(() => {
    console.log('Categories:', categories1);
    console.log('Category Products:', categoryProducts);
  }, [categories1, categoryProducts]);

  const handleMouseEnter = (index) => {
    setOpenCategory(index);
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="flex">
        <div className="w-1/4 bg-white p-4 shadow-md fixed">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <div className="relative">
            <ul className="space-y-2">
              {categories1.map((category, index) => (
                <li
                  key={index}
                  className="cursor-pointer relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  <span className="px-4 py-2 block hover:text-red-600">
                    {category.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="ml-64 w-full">
          <ProductGrid products={categoryProducts[openCategory]} />
        </div>
      </div>
    </div>
  );
};

export default CategoriesSidebar;
