import React, { useState } from 'react';
import captcha from './Images/captcha.png';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const RegistrationPage = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [productList, setProductList] = useState([]);
    const [popupMessage, setPopupMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const goToNextStep = () => {
        if (step === 1) {
            if (!emailPattern.test(email)) {
                setEmailError('Please enter a valid email address');
            } else {
                setEmailError('');
                setStep(2);
            }
        } else if (step === 2) {
            if (!password || !confirmPassword) {
                setPasswordError('Both password fields are required');
            } else if (password !== confirmPassword) {
                setPasswordError('Passwords do not match');
            } else {
                setPasswordError('');
                setStep(3);
            }
        }
    };

    const addProduct = (product) => {
        if (product) {
            setProductList([...productList, product]);
            setPopupMessage('Product added successfully!');
            setShowPopup(true);
        }
    };

    const handlePopupClose = () => setShowPopup(false);

    const handleResendEmail = () => {
        if (!emailPattern.test(email)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
            setPopupMessage('Email resent successfully!');
            setShowPopup(true);
        }
    };

    return (
        <div className="container mx-auto p-12 bg-white min-h-screen max-w-7xl flex flex-col justify-center items-center">
            {/* Step Indicator */}
            <div className="flex justify-between mb-8 items-center">
                {[1, 2, 3].map((s) => (
                    <div
                        key={s}
                        className={`w-10 h-10 ml-5 mr-5 rounded-full flex items-center justify-center text-white font-bold
                        ${step >= s ? 'bg-green-500' : 'bg-gray-300'}`}
                    >
                        {s}
                    </div>
                ))}
            </div>

            {/* Popup */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold text-green-600">{popupMessage}</h2>
                            <button onClick={handlePopupClose} className="text-red-500">
                                <FaTimesCircle size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Step Content */}
            {step === 1 && (
                <div className="step-content bg-white p-6 shadow-lg rounded-lg text-center w-full max-w-md">
                    <h2 className="text-3xl font-semibold mb-4 text-green-600">Email Verification</h2>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-green-300 p-3 mb-4 w-3/4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    {emailError && <p className="text-red-500 mb-4">{emailError}</p>}
                    <p className="mb-4 text-gray-600">Please enter the characters you see in the image</p>
                    <img src={captcha} alt="Captcha" className="mb-4 mx-auto" />
                    <input
                        type="text"
                        placeholder="Verification Code"
                        className="border border-green-300 p-3 mb-4 w-3/4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    <button
                        onClick={goToNextStep}
                        className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-200 w-3/4"
                    >
                        Next
                    </button>
                    <p className="mt-4 text-gray-600">A confirmation email has been sent to {email}.</p>
                    <a href="#" onClick={handleResendEmail} className="text-green-500 underline">
                        Click here to resend the email
                    </a>
                    <p className="mt-4 text-gray-600">
                        Having problems receiving email?{' '}
                        <a href="#" onClick={() => setPopupMessage('Rewrite the correct email')} className="text-green-500 underline">
                            Try to change your email address
                        </a>.
                    </p>
                </div>
            )}

            {step === 2 && (
                <div className="step-content bg-white p-6 shadow-lg rounded-lg text-center w-full max-w-xl">
                    <h2 className="text-3xl font-semibold mb-4 text-green-600">Account Information</h2>
                    <input
                        type="text"
                        placeholder="Company Name"
                        className="border border-green-300 p-3 mb-4 w-3/4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password (6-20 characters)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-green-300 p-3 mb-4 w-3/4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border border-green-300 p-3 mb-4 w-3/4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    {passwordError && <p className="text-red-500 mb-4">{passwordError}</p>}
                    <select className="border border-green-300 p-3 mb-4 w-3/4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required>
                        <option value="">Country/Region</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                    </select>
                    <button
                        onClick={goToNextStep}
                        className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-200 w-3/4"
                    >
                        Next
                    </button>
                </div>
            )}

            {step === 3 && (
                <div className="step-content bg-white p-6 shadow-lg rounded-lg text-center w-full max-w-md">
                    <h2 className="text-3xl font-semibold mb-4 text-green-600">Sourcing Products</h2>
                    <input
                        type="text"
                        placeholder="Sourcing Products"
                        className="border border-green-300 p-3 mb-4 w-3/4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    <button
                        onClick={() => addProduct('New Product')}
                        className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-200 w-3/4"
                    >
                        Add Product
                    </button>
                    {productList.length > 0 && (
                        <ul className="mt-4 w-full text-left">
                            {productList.map((product, index) => (
                                <li key={index} className="text-gray-600 mb-2">
                                    <FaCheckCircle className="inline-block text-green-600 mr-2" /> {product}
                                </li>
                            ))}
                        </ul>
                    )}
                    <select className="border border-green-300 p-3 mb-4 w-3/4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required>
                        <option value="">Business Type</option>
                        <option value="Retailer">Retailer</option>
                        <option value="Wholesaler">Wholesaler</option>
                    </select>
                    <select className="border border-green-300 p-3 mb-4 w-3/4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required>
                        <option value="">Annual Purchase Volume</option>
                        <option value="Less than $1 million">Less than $1 million</option>
                        <option value="$1 million - $10 million">$1 million - $10 million</option>
                        <option value="More than $10 million">More than $10 million</option>
                    </select>
                    <button
                        onClick={() => {
                            setPopupMessage('Registration successful!');
                            setShowPopup(true);
                        }}
                        className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-200 w-3/4"
                    >
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};

export default RegistrationPage;
