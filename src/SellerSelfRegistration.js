import React, { useState, useEffect} from 'react';
import { FaUser, FaPhone, FaEnvelope, FaBuilding, FaRegCreditCard, FaUniversity, FaGlobe } from 'react-icons/fa';

const SuccessModal = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-green-600">Registration Successful</h2>
        <p className="mt-2 text-gray-800">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const SellerSelfRegistration = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);
  const [registrationMessage, setRegistrationMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const validateFile = (file, allowedFormats) => {
    if (!file || !file.name) return false;
    const fileExtension = file.name.split('.').pop().toLowerCase();
    return allowedFormats.includes(fileExtension);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const gstNumber = formData.get('gstNumber');
    const phoneNumber = formData.get('phoneNumber');
    const aadhaarCard = formData.get('aadhaarCard');
    const bankDetails = formData.get('bankDetails');
    const canceledCheque = formData.get('canceledCheque');
    const panCard = formData.get('panCard');
    const logo = formData.get('logo');

    let validationErrors = {};
    if (!/^(\d{16})$/.test(gstNumber)) {
      validationErrors.gstNumber = 'GST Number must be exactly 16 digits.';
    }
    if (!/^(\d{10})$/.test(phoneNumber)) {
      validationErrors.phoneNumber = 'Phone Number must be exactly 10 digits.';
    }
    if (aadhaarCard && !validateFile(aadhaarCard, ['pdf', 'jpeg', 'png'])) {
      validationErrors.aadhaarCard = 'Aadhaar Card must be in PDF, JPEG, or PNG format.';
    }
    if (bankDetails && !validateFile(bankDetails, ['pdf', 'jpeg', 'png'])) {
      validationErrors.bankDetails = 'Bank Details must be in PDF, JPEG, or PNG format.';
    }
    if (canceledCheque && !validateFile(canceledCheque, ['pdf', 'jpeg', 'png'])) {
      validationErrors.canceledCheque = 'Canceled Cheque must be in PDF, JPEG, or PNG format.';
    }
    if (panCard && !validateFile(panCard, ['pdf', 'jpeg', 'png'])) {
      validationErrors.panCard = 'PAN Card must be in PDF, JPEG, or PNG format.';
    }
    if (logo && !validateFile(logo, ['jpeg', 'png'])) {
      validationErrors.logo = 'Logo must be in JPEG or PNG format.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate successful registration
    setRegistrationMessage('Your registration was successful!');
    setShowModal(true);
    // Clear errors and form if needed
    setErrors({});
    e.target.reset();
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-green-600">Seller Self-Registration</h1>
        <p className="text-gray-600 mb-8 text-center">
          Quick and easy vendor registration. Fill in the details to create your vendor account.
        </p>
        <form onSubmit={handleRegistration}>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block1 text-sm font-medium text-gray-700 flex items-center">
                <FaUser className="mr-2 text-green-600" /> Full Name
              </label>
              <input
                type="text"
                name="fullName"
                className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:border-green-500"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label className="block2 text-sm font-medium text-gray-700 flex items-center">
                <FaPhone className="mr-2 text-green-600" /> Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:border-green-500"
                placeholder="Enter your phone number"
                required
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
            </div>
            <div>
              <label className="block3 text-sm font-medium text-gray-700 flex items-center">
                <FaBuilding className="mr-2 text-green-600" /> Address
              </label>
              <input
                type="text"
                name="address"
                className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:border-green-500"
                placeholder="Enter your address"
                required
              />
            </div>
            <div>
              <label className="block4 text-sm font-medium text-gray-700 flex items-center">
                <FaEnvelope className="mr-2 text-green-600" /> Business Email
              </label>
              <input
                type="email"
                name="businessEmail"
                className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:border-green-500"
                placeholder="Enter your business email"
                required
              />
            </div>
            <div>
              <label className="block5 text-sm font-medium text-gray-700 flex items-center">
                <FaRegCreditCard className="mr-2 text-green-600" /> GST Number
              </label>
              <input
                type="text"
                name="gstNumber"
                className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:border-green-500"
                placeholder="Enter your GST number"
                required
              />
              {errors.gstNumber && <p className="text-red-500 text-sm mt-1">{errors.gstNumber}</p>}
            </div>
            <div>
              <label className="block6 text-sm font-medium text-gray-700 flex items-center">
                <FaUniversity className="mr-2 text-green-600" /> Aadhaar Card
              </label>
              <input
                type="file"
                name="aadhaarCard"
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                accept=".pdf,.jpeg,.png"
              />
              {errors.aadhaarCard && <p className="text-red-500 text-sm mt-1">{errors.aadhaarCard}</p>}
            </div>
            <div>
              <label className="block7 text-sm font-medium text-gray-700 flex items-center">
                <FaBuilding className="mr-2 text-green-600" /> Bank Details
              </label>
              <input
                type="text"
                name="bankDetails"
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                placeholder="Enter your bank details"
              />
            </div>
            <div>
              <label className="block8 text-sm font-medium text-gray-700 flex items-center">
                <FaRegCreditCard className="mr-2 text-green-600" /> Canceled Cheque
              </label>
              <input
                type="file"
                name="canceledCheque"
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                accept=".pdf,.jpeg,.png"
              />
              {errors.canceledCheque && <p className="text-red-500 text-sm mt-1">{errors.canceledCheque}</p>}
            </div>
            <div>
              <label className="block9 text-sm font-medium text-gray-700 flex items-center">
                <FaRegCreditCard className="mr-2 text-green-600" /> PAN Card
              </label>
              <input
                type="file"
                name="panCard"
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                accept=".pdf,.jpeg,.png"
              />
              {errors.panCard && <p className="text-red-500 text-sm mt-1">{errors.panCard}</p>}
            </div>
            <div>
              <label className="block10 text-sm font-medium text-gray-700 flex items-center">
                <FaGlobe className="mr-2 text-green-600" /> Logo
              </label>
              <input
                type="file"
                name="logo"
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                accept=".jpeg,.png"
              /> 
              {errors.logo && <p className="text-red-500 text-sm mt-1">{errors.logo}</p>}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      {showModal && (
        <SuccessModal
          message={registrationMessage}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default SellerSelfRegistration;
