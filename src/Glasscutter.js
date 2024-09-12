import React from 'react';

const OrderPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Header */}
      <header className="flex justify-between items-center bg-white p-6 shadow-md">
        <div className="text-xl font-bold">My Orders</div>
        <nav className="space-x-4">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">All Orders</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Unpaid</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Preparing to Ship</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Shipped</a>
        </nav>
      </header>

      {/* Main Order Section */}
      <div className="bg-white mt-6 shadow-md rounded-lg p-6">
        {/* Order Status */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-gray-600">
            <p>Order #223840810000201805</p>
            <p>Order Date: 11 Sep 2024, GMT-07:00</p>
            <p>Total: USD 418.60</p>
          </div>
          <div className="text-gray-500">Request to be confirmed</div>
        </div>

        {/* Product Info */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center">
            <div className="flex">
              <img
                src="https://via.placeholder.com/80"
                alt="Product Image"
                className="w-16 h-16 rounded-md"
              />
              <div className="ml-4">
                <p className="text-gray-900 font-semibold">
                  Men's Summer Short Sports Suit Leisure
                </p>
                <p className="text-gray-500">Short Sleeve Men's T-Shirt And Shorts 2Pcs Set</p>
                <p className="text-gray-500">Gradient shorts suit, M, 20 items</p>
              </div>
            </div>
            <div>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
                View Order Details
              </button>
            </div>
          </div>
        </div>

        {/* More Actions */}
        <div className="mt-4 flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            More Actions
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-sm text-gray-500">
        <p>By placing this order, you agree to our Terms & Conditions, Privacy Policy, and Refund & Return Rules.</p>
      </footer>
    </div>
  );
};

export default OrderPage;
