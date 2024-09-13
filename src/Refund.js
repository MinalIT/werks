import React, { useEffect } from 'react';
import bg2 from './Images/bg4.jpg'; // Example background image for the return and refund policy page

const ReturnAndRefundPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-green-600 text-white text-center py-10">
        <h1 className="text-4xl font-bold">Return and Refund Policy</h1>
        <p className="mt-4 text-lg">
          Learn more about our return and refund policies for your purchases.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-5">Introduction</h2>
          <p className="text-lg text-gray-600">
            Our Return and Refund Policy outlines the process for returning products and receiving refunds. Please read carefully to understand your rights.
          </p>
        </div>
      </section>

      {/* Return Process Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-gray-50">
        <div>
          <h2 className="text-3xl font-semibold mb-5 text-center">Return Process</h2>
          <ul className="list-disc text-lg text-gray-600 ml-8">
            <li className="mb-4">
              Products can be returned within 30 days of purchase. The product must be in original condition.
            </li>
            <li className="mb-4">
              To initiate a return, contact our support team with your order details.
            </li>
            <li className="mb-4">
              We will provide a shipping label for the return. The return shipping fee will be deducted from your refund.
            </li>
          </ul>
        </div>
      </section>

      {/* Refund Policy Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-white">
        <div>
          <h2 className="text-3xl font-semibold mb-5 text-center">Refund Policy</h2>
          <ul className="list-disc text-lg text-gray-600 ml-8">
            <li className="mb-4">
              Refunds will be processed within 7-10 business days after receiving the returned product.
            </li>
            <li className="mb-4">
              Refunds will be cgreenited back to the original payment method used during the purchase.
            </li>
            <li className="mb-4">
              We reserve the right to refuse returns or refunds if the product is damaged or used.
            </li>
          </ul>
        </div>
      </section>

      {/* Dispute Resolution Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-left">
            <h3 className="text-2xl font-semibold mb-4">Dispute Resolution</h3>
            <p className="text-gray-600 mb-4">
              If you have any issues with your return or refund, please contact our support team. We aim to resolve all disputes amicably.
            </p>
          </div>
          <img
            src={bg2}
            alt="Dispute Resolution"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-5">Need Help?</h2>
        <p className="text-lg text-gray-600 mb-5">
          If you have questions about our return and refund policies, please reach out to our support team for assistance.
        </p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
          Contact Support
        </button>
      </section>
    </div>
  );
};

export default ReturnAndRefundPolicyPage;
