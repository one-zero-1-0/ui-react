
import React from 'react';
import { Link } from 'react-router-dom'; 
import UserNavbar from '../../components/Public/UserNavbar';// Assuming you are using React Router for navigation

// Sample data for courses (replace with actual data)
const coursesData = [
  {
    id: 1,
    name: 'Computer Science',
    description: 'Learn computer programming and software development.',
    duration: '4 years',
    fees: '$10,000 per year',
    seats: 100,
    institution: 'ABC University',
  },
  {
    id: 2,
    name: 'Electrical Engineering',
    description: 'Study electrical circuits and power systems.',
    duration: '4 years',
    fees: '$12,000 per year',
    seats: 80,
    institution: 'XYZ College',
  },
  // Add more courses as needed
];

function ViewCourses() {
  return (
    <div>
      <UserNavbar/>
    <div className="max-w-7xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Available Courses</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Duration
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fees
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No. of Seats
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Institution
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {coursesData.map((course) => (
              <tr key={course.id}>
                <td className="px-6 py-4 whitespace-nowrap">{course.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{course.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">{course.duration}</td>
                <td className="px-6 py-4 whitespace-nowrap">{course.fees}</td>
                <td className="px-6 py-4 whitespace-nowrap">{course.seats}</td>
                <td className="px-6 py-4 whitespace-nowrap">{course.institution}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={`/enrollment`} // Replace with the path to the enrollment page
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Enroll
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default ViewCourses;
