import React from 'react';
import imgshoes from '../src/Images/shoes.jpg';
import imgbooks from '../src/Images/books.jpg';
import imgbag from '../src/Images/bag.jpg';
import ProductCard from './Productcard'; // Import ProductCard

const ProductListing = () => {
  const products = [
    {
      id: 1,
      name: 'Classic Bag',
      image: imgbag,
      price: 5,
      isFeatured: true,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Man's training shoes",
      image: imgshoes,
      price: 13,
      originalPrice: 180,
      isOnSale: true,
      salePercentage: 20,
      rating: 4.7,
    },
    {
      id: 3,
      name: 'Books',
      image: imgbooks,
      price: 5,
      rating: 4.9,
    },
    // Add more products here
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Product Listing</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;