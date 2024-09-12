import React from 'react';

function OfferPage({ onClose }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 relative">
      {/* Offer Banner */}
      <div className="bg-white p-8 rounded-lg shadow-lg text-center z-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">20% OFF</h1>
        <p className="text-xl text-gray-600 mb-8">on your first order</p>
        <button
          className="px-8 py-3 bg-red-600 text-white rounded-full text-lg shadow-lg hover:bg-red-700 transition-all"
          onClick={onClose} // Call the onClose function
        >
          Continue to Shop
        </button>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="w-32 h-32 bg-white opacity-10 rounded-full absolute top-16 left-32 animate-pulse"></div>
        <div className="w-24 h-24 bg-white opacity-10 rounded-full absolute bottom-32 right-32 animate-pulse"></div>
      </div>
    </div>
  );
}

export default OfferPage;
