  // RegisterPage.js
  import React, { useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';

  function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
      // Implement registration logic here
      // Example:
      // Call API to register user with provided details
      // Redirect to login page after successful registration
      navigate('../Login');
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-400 py-3 px-4 sm:px-2 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-lg shadow-md p-8">
      <div className="bg-gradient-to-r from-white-500 to-gray-800 min-h-screen flex flex-col justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Register</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded-md shadow-sm"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded-md shadow-sm"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 rounded-md shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-semibold shadow-md hover:bg-blue-600 transition duration-300"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-700">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
      </div>
      </div>
    );
  }

  export default Register;
