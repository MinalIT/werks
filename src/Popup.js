import React from 'react';
import './animations.css'; 
import discount from '../src/Images/20.jpg'; // Import your image

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button
          className="close-button"
          onClick={onClose}
        >
          X
        </button>

        <h2 className="text-center text-xl font-bold mb-4">Welcome to Our Website!</h2>
        <p className="text-center mb-4">Enjoy exploring our site.</p>
        <img src={discount} alt="Discount" className="popup-image mb-4" />
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-4">Avail the offer</h1>
        <p className="text-center text-lg text-gray-600 mb-8">on your first order</p>
      </div>
    </div>
  );
};

export default Popup;
