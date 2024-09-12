import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate sending a password reset email
      setMessage('Your password has been sent to the provided email.');
      setTimeout(() => navigate('/Signin'), 2000); // Redirect after 2 seconds
    } else {
      setMessage('Please enter your email.');
    }
  };

  return (
    <div className="fade-in flex items-center justify-center min-h-screen bg-gray-100 background-image">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
        <form onSubmit={handleResetPassword} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {message && <p className="text-green-500 text-sm text-center">{message}</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
