import React, { useState ,useEffect} from 'react';
import chairnew from './Images/chairnew.png';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);
  const Navigate = useNavigate();
  const [showCancelPopup, setShowCancelPopup] = useState(false);

  // Toggle the cancel order popup
  const handleCancelOrder = () => {
    setShowCancelPopup(!showCancelPopup);
  };

  // Navigate to home page after order cancellation
  const confirmCancelOrder = () => {
    setShowCancelPopup(false);
    alert('Your order has been cancelled successfully!');
    Navigate('/'); // Navigate to the home page
  };
  
  // Navigate to the ContactSupplier page
  const contactSupplier = () => {
    Navigate('/ContactSuplier');
  };


  const OrderConfirm = () => {
    setShowCancelPopup(false);
    alert('Your order confirmed successfully!');
    Navigate('/'); // Navigate to the home page
  };


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
            <p><strong>Order #223840810000201805</strong></p>
            <p>Order Date: 11 Sep 2024, GMT-07:00</p>
            <p>Total: <strong>INR 34,750.00</strong></p>
          </div>
          <div className="text-gray-500 bg-yellow-100 px-3 py-1 rounded-full">Request to be confirmed</div>
        </div>

        {/* Shipping Address */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
          <p className="text-gray-600">John Doe</p>
          <p className="text-gray-600">123 Elm Street, Apartment 4B</p>
          <p className="text-gray-600">New York, NY, 10001, USA</p>
          <p className="text-gray-600">Phone: +1 555 555 5555</p>
        </div>

        {/* Payment Method */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
          <p className="text-gray-600">PayPal - john.doe@example.com</p>
          <p className="text-gray-600">Transaction ID: 9H84938HFH94J</p>
        </div>

        {/* Product Info */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg font-semibold mb-2">Product Details</h3>
          <div className="flex justify-between items-center">
            <div className="flex">
              <img
                src={chairnew}
                alt="Product Image"
                className="w-20 h-20 rounded-md"
              />
              <div className="ml-4">
                <p className="text-gray-900 font-semibold">Ergonomic Chair - Optimal Comfort & Support</p>
                <p className="text-gray-500">Perfect for long work hours, with adjustable height and lumbar support.</p>
                <p className="text-gray-500">Quantity: 1</p>
                <p className="text-gray-500">Price: INR 18,150.00</p>
              </div>
            </div>
            <div>
              <button
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
                onClick={() => alert("Order Details:\nOrder ID: #223840810000201805\nStatus: Request to be confirmed")}
              >
                View Order Details
              </button>
            </div>
          </div>
        </div>

        {/* Order Tracking */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg font-semibold mb-2">Order Tracking</h3>
          <p className="text-gray-600">Carrier: FedEx</p>
          <p className="text-gray-600">Tracking Number: 848329485093</p>
          <p className="text-gray-600">Estimated Delivery: 18 Sep 2024</p>
          <div className="mt-2">
            {/*<button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              onClick={() => alert('Tracking package: 848329485093')}
            >
              Track Package
            </button>*/}
            <button
  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
  onClick={() => Navigate('/Trackorder')}
>
  Track Package
</button>

          </div>
        </div>

        {/* More Actions */}
        <div className="mt-4 flex justify-end space-x-4">
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            onClick={handleCancelOrder}
          >
            Cancel Order
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
            onClick={contactSupplier}
          >
            Contact Supplier
          </button>

          <button
      onClick={OrderConfirm}
      className="bg-green-600 hover:bg-green-700 text-white px-2 py-2 rounded-lg"
    >
      Order Confirmed
    </button>
        </div>
      </div>

      {/* Cancel Order Popup */}
      {showCancelPopup && (
        <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Cancel Order</h3>
            <p className="text-gray-700 mb-4">Are you sure you want to cancel this order?</p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                onClick={handleCancelOrder}
              >
                No, Keep Order
              </button>
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                onClick={confirmCancelOrder}
              >
                Yes, Cancel Order
              </button>

             
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-8 text-sm text-gray-500">
        <p>By placing this order, you agree to our Terms & Conditions, Privacy Policy, and Refund & Return Rules.</p>
      </footer>
    </div>
  );
};

export default OrderPage;
