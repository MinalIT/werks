import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import chairnew from './Images/chairnew.png';

const OrderPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
      }, []);
      const [packingType, setPackingType] = useState('');
  const [email, setEmail] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [vatId, setVatId] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [shippingMethod, setShippingMethod] = useState('');
  const [shippingCost, setShippingCost] = useState('');
  const [insurance, setInsurance] = useState('');
 
  

   // Define pricing based on quantity
   const getPrice = (qty) => {
    if (qty >= 6) return 250; // Price for 6 or more items
    if (qty >= 3) return 270; // Price for 3-5 items
    if (qty >= 2) return 280; // Price for 2 items
    return 289; // Default price
  }


  const productPrice = getPrice(quantity);
 // const totalPrice = quantity * productPrice;

  // Function to calculate shipping cost based on the selected option
  const getShippingCost = () => {
    switch (shippingCost) {
      case 'Free':
        return 0;
      case 'FlatRate':
        return 100;
      case 'Variable':
        return 150; // Example variable rate
      default:
        return 0;
    }
  };

  // Function to calculate insurance cost based on the selected option
  const getInsuranceCost = () => {
    switch (insurance) {
      case 'Basic':
        return 50;
      case 'Comprehensive':
        return 100;
      default:
        return 0;
    }
  };

  //const totalPrice = quantity * getPrice(quantity);
  const navigate = useNavigate();

  const totalPrice = quantity * productPrice + getShippingCost() + getInsuranceCost();

  const handleContactSupplier = () => {
    navigate('/ContactSuplier');
  };

  const handleSubmitOrder = () => {
    navigate('/OrderSummary');
};

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white text-green-900">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Combined Buyer Info and Tax Info */}
        <div className="bg-green-50 shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Buyer & Tax Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
              <input
                type="text"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                placeholder="Add Address"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Billing Address</label>
              <input
                type="text"
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
                placeholder="Add Address"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">VAT/Tax ID</label>
              <input
                type="text"
                value={vatId}
                onChange={(e) => setVatId(e.target.value)}
                placeholder="Enter VAT/Tax ID"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter Company Name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
        </div>

        {/* Combined Product Info and Pricing */}
        <div className="bg-green-50 shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Product Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={chairnew}
              alt="Ergonomic Chair"
              className="w-full h-auto object-cover rounded-md"
            />
            <div>
              <p className="font-bold">Ergonomic Chair - Optimal Comfort & Support</p>
              <p className="text-sm text-gray-500">Perfect for long work hours, with adjustable height and lumbar support.</p>
              <label className="block text-sm font-medium text-gray-700 mt-4">Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
              <p className="mt-2 text-sm font-bold">Price per unit: ₹{productPrice}</p>
            <p className="text-lg font-bold mt-2">Total Price: ₹{totalPrice}</p>
            <p className="text-sm text-gray-500 mt-2">
              Approximate pricing: 
              {quantity >= 6 && ' ₹250 per unit for 6 or more items.'}
              {quantity >= 3 && quantity < 6 && ' ₹270 per unit for 3-5 items.'}
              {quantity === 2 && ' ₹280 per unit for 2 items.'}
              {quantity < 2 && ' ₹289 per unit for 1 item.'}
            </p>
            </div>
          </div>
        </div>
      </div>

    


  {/* Shipping Info */}
  <div className="bg-green-50 shadow-md p-6 mt-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Logistics Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Shipping Method</label>
            <select
              value={shippingMethod}
              onChange={(e) => setShippingMethod(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            >
              <option value="">Select a method</option>
              <option value="Standard">Standard Shipping</option>
              <option value="Express">Express Shipping</option>
              <option value="Overnight">Overnight Shipping</option>
            </select>
          </div>
          <div>
      <label className="block text-sm font-medium text-gray-700">Packing Type</label>
      <select
        value={packingType}
        onChange={(e) => setPackingType(e.target.value)}
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
      >
        <option value="">Select packing type</option>
        <option value="Box">Box - Standard packaging</option>
        <option value="Envelope">Envelope - For documents</option>
        <option value="Crate">Crate - Heavy and bulky items</option>
        <option value="Pallet">Pallet - For bulk shipments</option>
        <option value="Tube">Tube - For rolled items</option>
        <option value="Bag">Bag - Lightweight and flexible</option>
      </select>

      {/* Optionally display the selected packing type */}
      {packingType && (
        <p className="mt-2 text-sm text-gray-600">
          You have selected: <strong>{packingType}</strong>
        </p>
      )}
    </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Shipping Cost</label>
            <select
              value={shippingCost}
              onChange={(e) => setShippingCost(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            >
              <option value="">Select cost</option>
              <option value="Free">Free Shipping</option>
              <option value="FlatRate">Flat Rate Shipping - ₹100</option>
              <option value="Variable">Variable Rate Shipping</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Insurance</label>
            <select
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            >
              <option value="">Select insurance</option>
              <option value="None">No Insurance</option>
              <option value="Basic">Basic Insurance - ₹50</option>
              <option value="Comprehensive">Comprehensive Insurance - ₹100</option>
            </select>
          </div>
        </div>
      </div>


      

      {/* Submit Order & Contact Supplier */}
      <div className="bg-green-50 shadow-md p-6 rounded-lg mb-6">
  <div className="flex justify-center gap-4">
    <button
      onClick={handleSubmitOrder}
      className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
    >
      Submit Order Request
    </button>
    <button
      onClick={handleContactSupplier}
      className="bg-white text-green-600 border border-green-600 px-6 py-3 rounded-lg shadow-md hover:bg-green-50 transition duration-300"
    >
      Contact Supplier
    </button>
  </div>
  <p className="text-sm text-gray-500 mt-4 text-center">
    This order needs to be confirmed by the supplier to continue to payment.
  </p>
</div>

{/* comment */}

      {/* Terms & Conditions */}
      <div className="text-center text-sm text-gray-500">
        <p>Total: Negotiable</p>
        <p>
          By placing this order, you agree to our{' '}
          <a href="/Rules" className="text-green-600">Terms and Conditions</a>,{' '}
          <a href="/Privacy" className="text-green-600">Privacy Policy</a>, and{' '}
          <a href="/Refund" className="text-green-600">Return & Refund Rules</a>. hello
        </p>
      </div>
    </div>
  );
};

export default OrderPage;
