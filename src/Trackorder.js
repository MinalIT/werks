import React, { useEffect } from 'react';
import { FaShippingFast, FaMapMarkerAlt, FaTruck, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 

const TrackOrderPage = () => {
    const navigate = useNavigate(); 
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

  const trackingDetails = {
    carrier: 'FedEx',
    trackingNumber: '848329485093',
    status: 'In Transit',
    estimatedDelivery: '18 Sep 2024',
    lastLocation: 'Chicago, IL',
    departureTime: '15 Sep 2024, 10:00 AM',
  };

  // Tracking status steps (visualization)
  const trackingSteps = [
    { label: 'Order Placed', icon: <FaCheckCircle />, isCompleted: true },
    { label: 'Shipped', icon: <FaTruck />, isCompleted: true },
    { label: 'In Transit', icon: <FaShippingFast />, isCompleted: true },
    { label: 'Out for Delivery', icon: <FaMapMarkerAlt />, isCompleted: false },
    { label: 'Delivered', icon: <FaCheckCircle />, isCompleted: false },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Header */}
      <header className="bg-white shadow-md p-6 mb-8 rounded-lg flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Track Your Package</h1>
        <div className="text-sm text-gray-600">
          <strong>Tracking Number:</strong> {trackingDetails.trackingNumber}
        </div>
      </header>

      {/* Main Content */}
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Tracking Progress Bar */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Tracking Progress</h2>
          <div className="flex items-center justify-between">
            {trackingSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div
                  className={`p-3 rounded-full ${
                    step.isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {step.icon}
                </div>
                <p
                  className={`mt-2 text-sm font-medium ${
                    step.isCompleted ? 'text-green-600' : 'text-gray-400'
                  }`}
                >
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tracking Details */}
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Tracking Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-800"><strong>Carrier:</strong> {trackingDetails.carrier}</p>
              <p className="text-gray-800"><strong>Status:</strong> {trackingDetails.status}</p>
              <p className="text-gray-800"><strong>Estimated Delivery:</strong> {trackingDetails.estimatedDelivery}</p>
            </div>
            <div>
              <p className="text-gray-800"><strong>Last Location:</strong> {trackingDetails.lastLocation}</p>
              <p className="text-gray-800"><strong>Departure Time:</strong> {trackingDetails.departureTime}</p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="border-t border-gray-200 pt-6 mt-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Order Summary</h2>
          <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
            <p className="text-gray-600 mb-2">
              Your package is <strong>{trackingDetails.status}</strong> and is currently at{' '}
              <strong>{trackingDetails.lastLocation}</strong>. The estimated delivery date is{' '}
              <strong>{trackingDetails.estimatedDelivery}</strong>. Stay tuned for further updates!
            </p>
            <div className="flex justify-between items-center mt-4">
            <button
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
          onClick={() => navigate('/')} // Correct onClick syntax
        >
          Track Another Package
        </button>


              
        <button
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg"
          onClick={() => navigate('/CustomerServices')} // Correct onClick syntax
        >
          Contact Support
        </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrderPage;
