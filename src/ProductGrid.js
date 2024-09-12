import React from 'react';

const ProductGrid = ({ products }) => (
  <div className="absolute left-full top-0 w-[calc(100vw-25%)] bg-white shadow-lg transition-transform transform translate-x-full duration-300 ease-in-out" style={{ zIndex: 60 }}>
    <div className="p-4">
      <div className="grid grid-cols-5 gap-4">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center p-2 border border-gray-200 rounded">
            <img src={product.src} alt={product.alt} className="h-24 w-24 object-cover rounded mb-2" />
            <span className="text-center font-semibold">{product.text}</span>
            <p className="text-center text-sm text-gray-600">{product.details}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProductGrid;
