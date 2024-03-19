import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-500 to-gray-700 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-white mb-8">Welcome to Online College Admission Portal</h1>
      <p className="text-lg text-white mb-12">Simplify your admission process with us</p>
      <div className="flex space-x-4">
        <button className="bg-white text-blue-500 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg font-semibold shadow-md">
          Learn More
        </button>
        <Link to="/login"> 
          <button className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md">
            Get Started
          </button>
        </Link>
      </div>  
    </div>
  );
}

export default Home;