import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-lg ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/home" className="text-white text-2xl font-bold">CampusGate</Link>
            <div className="hidden md:block ml-10">
              <Link to="/home" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/adminDashboard" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
              <Link to="/editInstitute" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Institute</Link>
              <Link to="/editCourse" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Course</Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/login"><button className="text-white hidden md:block hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Log Out</button></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
