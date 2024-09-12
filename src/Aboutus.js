import React, { useEffect} from 'react';
import bg1 from './Images/bg1.png';



const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []); 
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-green-600 text-white text-center py-10">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">
          Learn more about our mission, vision, and values.
        </p>
      </header>

      {/* Intro Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-5">Who We Are</h2>
          <p className="text-lg text-gray-600">
            We are a global company dedicated to providing high-quality services and 
            products. Our mission is to enrich lives with innovation and convenience, 
            while constantly pushing the boundaries of technology.
          </p>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
            <p className="text-gray-600">
              We operate in over 100 countries with a customer base of millions worldwide.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Innovative Solutions</h3>
            <p className="text-gray-600">
              Continuously innovating to create world-class solutions for everyday problems.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
            <p className="text-gray-600">
              Committed to reducing our environmental impact and creating a more sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-5">Our Mission</h2>
          <p className="text-lg text-gray-600">
            To be the most customer-centric company, where people can find and discover 
            anything they want to buy online. Our mission is to continually raise the bar 
            of the customer experience by using the internet and technology to help consumers 
            find, discover and buy anything, and empower businesses to maximize their success.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-left">
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <p className="text-gray-600 mb-4">
              We believe in fostering a workplace that embraces diversity, encourages 
              creativity, and empowers our employees to achieve their full potential.
            </p>
            <p className="text-gray-600 mb-4">
              We are committed to making ethical decisions, always putting our customers 
              first, and striving for excellence in everything we do.
            </p>
          </div>
          <img
            src={bg1}
            alt="Our Values"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 px-5 md:px-20 lg:px-40 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-5">Get In Touch</h2>
        <p className="text-lg text-gray-600 mb-5">
          Have questions or want to learn more? Feel free to reach out to us anytime.
        </p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
          Contact Us
        </button>
      </section>

    
    </div>
  );
};

export default AboutUsPage;
