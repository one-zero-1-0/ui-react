import React from 'react';
import UserNavbar from '../../components/Public/UserNavbar';

// Sample data for institutes (replace with actual data)
const institutesData = [
  {
    id: 1,
    name: 'Anna Institute',
    location: 'Chennai, India',
    contactNumber: '123-456-7890',
    description: 'It offers higher education in Engineering, Technology, Architecture and Applied Sciences relevant to the current and projected needs of the society',
    email: 'abc@example.com',
    numOfCourses: 5,
  },
  {
    id: 2,
    name: 'VIT University',
    location: 'Chennai, India',
    contactNumber: '987-654-3210',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    email: 'xyz@example.com',
    numOfCourses: 3,
  },
  // Add more institutes as needed
];

function ViewInstitute() {
  return (
    <div>
      <UserNavbar/>
    <div className="max-w-7xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Institutes Available</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Institute ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Institute Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact Number
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Number of Courses Available
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {institutesData.map((institute) => (
              <tr key={institute.id}>
                <td className="px-6 py-4 whitespace-nowrap">{institute.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{institute.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{institute.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">{institute.contactNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{institute.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">{institute.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{institute.numOfCourses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default ViewInstitute;
