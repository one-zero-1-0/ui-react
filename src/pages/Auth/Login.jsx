// LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement login logic here, check credentials
    // If credentials are correct, redirect to appropriate dashboard
    // Example:
    if (username === 'admin' && password === 'admin') {
      navigate('../adminDashboard');
    } else {
      navigate('../userDashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400 py-4 px-4 sm:px-5 lg:px-5">
      <div className="max-w-md w-full space-y-8 bg-white rounded-lg shadow-md p-5">
    <div className="bg-gradient-to-r from-white-500 to-gray-800 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 rounded-md shadow-sm"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded-md shadow-sm"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-semibold shadow-md hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
        <p className="mt-4 text-sm text-gray-700">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
    </div>
    </div>
  );
}

export default LoginPage;