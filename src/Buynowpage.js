import React, {useEffect ,useState } from 'react';
import B3 from './Images/Banner3.png';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

// Import Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons
import { faFacebookF, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons';

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Before: history.push('/some-path');
    navigate('/Userdashboard');
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      {/* Container */}
      <div className="bg-white w-full max-w-6xl shadow-lg rounded-lg flex overflow-hidden">
        
        {/* Left section (Image/Ad) */}
        <div className="w-1/2 bg-blue-100 p-8 flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-4">Industrial Innovation Summit</h2>
          <p>Innovative Products for Peak Efficiency</p>
          <a href="#" className="text-blue-600 mt-4">Explore Now &rarr;</a>
          <img 
            src={B3}
            alt="Summit Ad" 
            className="mt-6 w-full object-cover"
          />
        </div>

        {/* Right section (Sign-in form) */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address or Member ID</label>
              <input 
                type="email" 
                id="email" 
                className="mt-1 w-full border border-gray-300 rounded-lg p-2" 
                required 
              />
            </div>

            <div className="relative">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
      <input 
        type={showPassword ? "text" : "password"} // Toggle between text and password
        id="password"
        className="mt-1 w-full border border-gray-300 rounded-lg p-2 pr-10" // Add padding to the right for the icon
        required 
      />
      {/* Eye icon to toggle password visibility */}
      <div 
        onClick={togglePasswordVisibility} 
        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
      >
        {showPassword ? (
          <EyeSlashIcon className="h-5 w-5 text-gray-500" /> // Eye slash when password is visible
        ) : (
          <EyeIcon className="h-5 w-5 text-gray-500" /> // Eye icon when password is hidden
        )}
      </div>
    </div>

            <div className="flex justify-between text-sm">
              <a href="/ForgotPasswordPage" className="text-blue-600">Forgot your password?</a>
              <a href="/Newuser" className="text-blue-600">New User? Join Free</a>
            </div>

          


            <button
          type="submit"
          onClick={handleSignIn}
          className="w-full bg-green-500 text-white rounded-lg p-2 hover:bg-green-600"
        >
          Sign In
        </button>

            <div className="text-center mt-4">
              <p className="text-gray-500">Or Sign in with</p>
              <div className="flex justify-center space-x-4 mt-2">
                {/* Facebook Icon and Text */}
                <a href="#" className="text-gray-600 flex items-center space-x-2">
                  <FontAwesomeIcon icon={faFacebookF} />
                  <span>Facebook</span>
                </a>

                {/* LinkedIn Icon and Text */}
                <a href="#" className="text-gray-600 flex items-center space-x-2">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                  <span>LinkedIn</span>
                </a>

                {/* Google Icon and Text */}
                <a href="#" className="text-gray-600 flex items-center space-x-2">
                  <FontAwesomeIcon icon={faGoogle} />
                  <span>Google</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
