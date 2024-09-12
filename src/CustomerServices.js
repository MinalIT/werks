
import React, { useEffect} from 'react';
import Chat from './Chat';


const CustomerServicesPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []); 
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-green-600 text-white text-center py-10">
        <h1 className="text-4xl font-bold">Customer Services</h1>
        <p className="mt-4 text-lg">
          We're here to assist you with any questions or issues you may have.
        </p>
      </header>

      {/* Contact Information Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-5">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-5">
            Our customer service team is available 24/7 to assist you with any inquiries or concerns.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-600">+1-800-123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-600">support@example.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Address</h3>
              <p className="text-gray-600">123 Main Street, Anytown, USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-5">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What is your return policy?</h3>
              <p className="text-gray-600">
                We offer a 30-day return policy for most items. Please visit our return policy page for more details.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How can I track my order?</h3>
              <p className="text-gray-600">
                Once your order has been shipped, you will receive a tracking number via email.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How do I update my account information?</h3>
              <p className="text-gray-600">
                You can update your account information by logging into your account and accessing the settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-5">Support Options</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
              <p className="text-gray-600">
                Chat with our support team in real-time for quick assistance with your questions.  <Chat />
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Help Center</h3>
              <p className="text-gray-600">
                Visit our Help Center for detailed articles and guides on common issues and questions.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Phone Support</h3>
              <p className="text-gray-600">
                Reach out to our support team via phone for personalized assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-5">Send Us a Message</h2>
          <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md" required></textarea>
            </div>
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default CustomerServicesPage;
