import React ,{useEffect} from 'react';
import bg2 from './Images/bg4.jpg'; // Example background image for the rules and regulations page

const RulesAndRegulationsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-green-600 text-white text-center py-10">
        <h1 className="text-4xl font-bold">Terms and Conditions</h1>
        <p className="mt-4 text-lg">
          Important guidelines for both users and buyers to follow.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-5">General Guidelines</h2>
          <p className="text-lg text-gray-600">
            Our rules and regulations are designed to create a safe, fair, and transparent 
            environment for all users and buyers. Please review these guidelines carefully.
          </p>
        </div>
      </section>

      {/* Rules for Users Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-gray-50">
        <div>
          <h2 className="text-3xl font-semibold mb-5 text-center">Rules for Users</h2>
          <ul className="list-disc text-lg text-gray-600 ml-8">
            <li className="mb-4">
              Users are expected to provide accurate and up-to-date information when creating an account.
            </li>
            <li className="mb-4">
              No spamming, offensive language, or inappropriate content is allowed on the platform.
            </li>
            <li className="mb-4">
              Users must respect other users' privacy and refrain from sharing private information without consent.
            </li>
            <li className="mb-4">
              Any attempt to exploit system vulnerabilities, engage in illegal activities, or disrupt service is prohibited.
            </li>
            <li className="mb-4">
              We reserve the right to suspend or terminate accounts found in violation of these rules.
            </li>
          </ul>
        </div>
      </section>

      {/* Rules for Buyers Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-white">
        <div>
          <h2 className="text-3xl font-semibold mb-5 text-center">Rules for Buyers</h2>
          <ul className="list-disc text-lg text-gray-600 ml-8">
            <li className="mb-4">
              Buyers are required to provide valid payment details and ensure timely payments.
            </li>
            <li className="mb-4">
              All purchases must be made in compliance with our terms of service.
            </li>
            <li className="mb-4">
              Buyers are responsible for providing accurate shipping information to avoid delivery issues.
            </li>
            <li className="mb-4">
              Refunds and returns will be processed in accordance with our refund and return policy.
            </li>
            <li className="mb-4">
              Buyers must report any issues with their purchases within 14 days of receiving the product.
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
              In the event of any disputes, users and buyers are encouraged to reach out to our 
              customer support team for assistance. We will work towards resolving all issues in 
              a fair and timely manner.
            </p>
            <p className="text-gray-600 mb-4">
              If necessary, disputes may be escalated to third-party arbitration or mediation services.
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
        <h2 className="text-3xl font-semibold mb-5">Compliance</h2>
        <p className="text-lg text-gray-600 mb-5">
          By using our platform, you agree to abide by these rules and regulations. Failure 
          to comply may result in account suspension or legal action.
        </p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
          Contact Support
        </button>
      </section>
    </div>
  );
};

export default RulesAndRegulationsPage;
