import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaStore, FaShippingFast, FaTag } from 'react-icons/fa';

const SellOnMetaMarket = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
      }, []);
    const [showPopup, setShowPopup] = useState(false);

    const handleLearnMoreClick = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="bg-gray-100 py-10 px-5">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-6 text-green-500">Sell on ShopCart</h1>
                <p className="text-lg text-center mb-12 text-gray-600">Reach millions of customers worldwide and grow your business with exclusive offers and benefits.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-4">
                            <FaStore className="text-green-600 text-3xl mr-3 transform hover:scale-110 transition-transform duration-300" />
                            <h2 className="text-2xl font-semibold text-gray-800">Register Your Account</h2>
                        </div>
                        <p className="text-gray-700 mb-4">Sign up and become a MetaMarket seller today. It’s easy, free, and takes just a few minutes.</p>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>Zero setup fees</li>
                            <li>Access to millions of customers</li>
                            <li>24/7 Seller support</li>
                            <li>Dedicated account management</li>
                        </ul>
                        <Link
                            to="/SellerSelfRegistration"
                            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                        >
                            Start Selling
                        </Link>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-4">
                            <FaShippingFast className="text-green-600 text-3xl mr-3 transform hover:scale-110 transition-transform duration-300" />
                            <h2 className="text-2xl font-semibold text-gray-800">Exclusive Seller Benefits</h2>
                        </div>
                        <p className="text-gray-700 mb-4">Enjoy special promotions and discounts designed to help you succeed.</p>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>Discounted shipping rates</li>
                            <li>Free marketing tools</li>
                            <li>Priority placement in search results</li>
                            <li>Seasonal discount campaigns</li>
                        </ul>
                        <button
                            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                            onClick={handleLearnMoreClick}
                        >
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="mt-12 bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-center mb-4">
                        <FaTag className="text-green-600 text-4xl mr-3 transform hover:scale-110 transition-transform duration-300" />
                        <h2 className="text-3xl font-semibold text-gray-800">Limited Time Offer</h2>
                    </div>
                    <p className="text-center text-gray-700 mb-6">Register now and get a 50% discount on your first three months of seller fees!</p>
                    <div className="flex justify-center">
                        <button className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition">
                            Claim Offer
                        </button>
                    </div>
                </div>

                {showPopup && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">More About ShopCartt</h2>
                            <p className="text-gray-700 mb-6">ShopCart is a leading platform that connects sellers with millions of buyers worldwide. Our exclusive seller benefits ensure you have everything you need to succeed.</p>
                            <button
                                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
                                onClick={closePopup}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SellOnMetaMarket;
