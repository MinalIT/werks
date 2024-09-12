import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the Bag component
    navigate('/bag');
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.isFeatured && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
            Featured
          </span>
        )}
        {product.isOnSale && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {product.salePercentage}% off
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-green-500 font-bold">${product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 mr-1">⭐</span>
          <span className="text-sm text-gray-600">{product.rating}</span>
        </div>

        <button
          onClick={handleClick}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Click Here for Details of the Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
