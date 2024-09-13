import React, { useEffect } from 'react';
import bg2 from './Images/bg4.jpg'; // Example background image for the privacy policy page

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-green-600 text-white text-center py-10">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-lg">
          How we handle your personal information and data.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-5">Introduction</h2>
          <p className="text-lg text-gray-600">
            This Privacy Policy explains how we collect, use, and protect your personal information. By using our platform, you agree to the terms outlined below.
          </p>
        </div>
      </section>

      {/* Data Collection Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-gray-50">
        <div>
          <h2 className="text-3xl font-semibold mb-5 text-center">Data Collection</h2>
          <ul className="list-disc text-lg text-gray-600 ml-8">
            <li className="mb-4">
              We collect personal data such as your name, email address, and payment information when you use our platform.
            </li>
            <li className="mb-4">
              We also gather usage data to improve the user experience and ensure the security of our services.
            </li>
          </ul>
        </div>
      </section>

      {/* Data Usage Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-white">
        <div>
          <h2 className="text-3xl font-semibold mb-5 text-center">Data Usage</h2>
          <ul className="list-disc text-lg text-gray-600 ml-8">
            <li className="mb-4">
              Personal data is used to provide and improve our services, process payments, and communicate with you.
            </li>
            <li className="mb-4">
              We may share data with third-party service providers to help us operate our platform effectively.
            </li>
          </ul>
        </div>
      </section>

      {/* Data Protection Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-left">
            <h3 className="text-2xl font-semibold mb-4">Data Protection</h3>
            <p className="text-gray-600 mb-4">
              We implement strong security measures to protect your personal information from unauthorized access.
            </p>
            <p className="text-gray-600 mb-4">
              You have the right to request access to or deletion of your personal data by contacting our support team.
            </p>
          </div>
          <img
            src={bg2}
            alt="Data Protection"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-5">Your Consent</h2>
        <p className="text-lg text-gray-600 mb-5">
          By using our platform, you consent to our Privacy Policy. We may update this policy from time to time.
        </p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
          Contact Support
        </button>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
