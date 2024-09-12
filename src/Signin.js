import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showSignupOptions, setShowSignupOptions] = useState(false);
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email && password) {
      setSuccess('Congratulations, you are signed in!');
      setError('');
      if (role === 'seller') {
        navigate('/ProductMangPageUser');
      } else {
        navigate('/Newuser');
      }
    } else {
      setError('Please enter both email and password');
    }
  };

  const handleSignupClick = (role) => {
    setShowSignupOptions(false);
    if (role === 'manufacturer') {
      navigate('/SellerSelfRegistration');
    } else if (role === 'buyer') {
      navigate('/Newuser');
    }
  };

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
      <main className="flex-grow flex justify-center items-center">
        <div className="w-full max-w-sm p-4 rounded-lg shadow-lg bg-white mt-20">
          <div className="flex justify-center mb-6 text-3xl text-green-500/100">
            <b>ShopCart</b>
          </div>
          <h2 className="text-xl font-bold mb-4 text-center">
            Access and manage your instances from this ShopCart account.
          </h2>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2"
                required
              />
            </div>
            <div>
  <label htmlFor="role" className="block text-sm font-medium">I am signing in as</label>
  <select
    id="role"
    value={role}
    onChange={(e) => setRole(e.target.value)}
    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 hover:bg-green-100"
    required
  >
    <option value="">Select Role</option>
    <option value="seller">Seller</option>
    <option value="buyer">Buyer</option>
    <option value="manufacturer">Manufacturer</option>
  </select>
</div>


            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}
            <button
              type="submit"
              className="w-full py-2 px-4 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 bg-green-500 text-white"
            >
              Sign In
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm">
              Don't have an account?{' '}
              <button
                onClick={() => setShowSignupOptions(true)}
                className="text-green-500 hover:underline"
              >
                Sign Up
              </button>
            </p>
            <p className="text-sm mt-2">
              <button
                onClick={() => navigate('/ForgotPasswordPage')}
                className="text-green-500 hover:underline"
              >
                Forgot Password?
              </button>
            </p>
          </div>
        </div>

        {/* Signup Options Popup */}
        {showSignupOptions && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="p-6 rounded-md shadow-lg text-center bg-white">
              <h2 className="text-xl font-bold mb-4">Sign Up As:</h2>
              <div className="flex flex-col space-y-4">
                <button
                  className="bg-green-500 text-white py-2 rounded-md hover:bg-green-500"
                  onClick={() => handleSignupClick('manufacturer')}
                >
                  Seller
                </button>
                <button
                  className="bg-green-500 text-white py-2 rounded-md hover:bg-green-500"
                  onClick={() => handleSignupClick('buyer')}
                >
                  Buyer
                </button>
                <button
                  className="bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700"
                  onClick={() => setShowSignupOptions(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
    </div>
  );
};

export default SignInPage;
