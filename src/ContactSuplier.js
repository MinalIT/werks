import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const InquiryForm = () => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate('/'); // Navigate to the Home page
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('Pieces');
  const [content, setContent] = useState('');
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!quantity) formErrors.quantity = 'Quantity is required';
    if (!content) formErrors.content = 'Content is required';
    if (!email) formErrors.email = 'Email is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      console.log('Form Submitted', { quantity, unit, content, email });
      setShowPopup(true);  // Show the popup when form is successfully submitted
    } else {
      setErrors(formErrors);
    }
  };

  const closePopup = () => {
    // Reset all form fields and hide the popup
    setQuantity('');
    setUnit('Pieces');
    setContent('');
    setEmail('');
    setErrors({});
    setShowPopup(false);
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-white shadow-lg rounded-lg relative">
      {/* Title with a Picture Icon */}
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
          alt="Inquiry Icon"
          className="w-8 h-8 mr-2"
        />
        Send Inquiry
      </h1>

      <form onSubmit={handleSubmit}>
        {/* Quantity Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="quantity">
            Quantity
          </label>
          <div className="flex">
            <input
              type="number"
              id="quantity"
              placeholder="Enter quantity"
              className={`border rounded-l px-3 py-2 w-1/2 ${errors.quantity ? 'border-red-500' : ''}`}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <select
              className="border rounded-r px-3 py-2 w-1/2"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <option value="Pieces">Pieces</option>
              <option value="Bags">Bags</option>
              <option value="Boxes">Boxes</option>
              <option value="Foot">Foot</option>
              <option value="Meter">Meter</option>
              <option value="Pairs">Pairs</option>
              <option value="Reams">Reams</option>
              <option value="Rolls">Rolls</option>
              <option value="Sets">Sets</option>
              <option value="Square Meters">Square Meters</option>
            </select>
          </div>
          {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity}</p>}
        </div>

        {/* Content Textarea */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            placeholder="Please enter details such as material, size, application, etc."
            className={`border rounded w-full px-3 py-2 ${errors.content ? 'border-red-500' : ''}`}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength="4000"
          />
          {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className={`border rounded w-full px-3 py-2 ${errors.email ? 'border-red-500' : ''}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 text-white font-bold py-2 px-2 rounded hover:bg-green-600 w-full"
        >
          Send Inquiry Now
        </button>

        
      </form>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-opacity-10 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Inquiry Sent!</h2>
            <p>Your inquiry has been successfully submitted.</p>
            <button
              onClick={closePopup}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Close
            </button>
            <button
      type="button"
      onClick={handleGoToHome} // Trigger navigation on click
      className="bg-green-500 text-white py-2 px-2  ml-4 rounded hover:bg-green-600 "
    >
      Go To Home Page
    </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InquiryForm;
