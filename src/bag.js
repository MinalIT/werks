
import React, { useEffect } from 'react';
import imgbag from '../src/Images/bag.jpg'; // Adjust the path if necessary

const ProductPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
      }, []); 
    return (
        <div className="container mx-auto p-6">
            <div className="flex">
                {/* Image Section */}
                <div className="w-1/2 p-4">
                    <img src={imgbag} alt="Product" className="w-full h-auto rounded-md shadow-lg" />
                </div>
                {/* Product Details Section */}
                <div className="w-1/2 p-4">
                    <h1 className="text-3xl font-bold mb-4">MIP MEP</h1>
                    <p className="text-gray-700 mb-2">It is a product of Big Hybrid, and you can check the respiratory muscle and lung capacity in conjunction with the app. Breathing exercise is possible at the same time as checking the user's condition.</p>
                    <ul className="mb-4">
                        <li><strong>Item Number:</strong> 00</li>
                        <li><strong>Minimum Order Quantity:</strong> -</li>
                        <li><strong>Supply Ability (Per month):</strong> -</li>
                        <li><strong>Packaging Type:</strong> Brown Box</li>
                        <li><strong>Manufacturer:</strong> <a href="#" className="text-blue-600">GH Innotek Co., Ltd.</a></li>
                    </ul>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add to Cart</button>
                </div>
            </div>
            {/* More About Product Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">More About Product</h2>
                <div className="bg-gray-100 p-4 rounded-md">
                    <h3 className="text-xl font-semibold mb-2">Product Details</h3>
                    <p>No records found.</p>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
