import React from 'react';
import ProductCard from './Productcard';

const products = [
  // Example products, replace with your data
  { id: 1, image: 'link-to-image', name: 'MIP MEP', rating: 4, reviews: 0 },
  { id: 2, image: 'link-to-image', name: 'Wire Stripper', rating: 3.5, reviews: 0 },
  { id: 3, image: 'link-to-image', name: 'Compact large capacity', rating: 4.5, reviews: 0 },
  // ... more products
];

const ProductsPage = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            rating={product.rating}
            reviews={product.reviews}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
