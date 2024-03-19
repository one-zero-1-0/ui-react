import React from 'react';
import { Link } from 'react-router-dom';
import UserNavbar from '../../components/Public/UserNavbar'; // Assuming you are using React Router for navigation

// Sample data for admission details (replace with actual data)
const admissionDetails = [
  {
    id: 1,
    studentName: 'Bruce Wayne',
    courseName: 'Computer Science',
    status: 'Accepted',
  },
  {
    id: 2,
    studentName: 'Albus Dumbledore',
    courseName: 'Electrical Engineering',
    status: 'Application Submitted',
  },
  // Add more admission details as needed
];

function ViewAdmissionStatus() {
  return (
    <div>
      <UserNavbar/>
    <div className="max-w-7xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Admission Status</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Admission ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {admissionDetails.map((admission) => (
              <tr key={admission.id}>
                <td className="px-6 py-4 whitespace-nowrap">{admission.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{admission.studentName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{admission.courseName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{admission.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {admission.status === 'Accepted' && (
                    <Link
                      to={`/payment`} // Replace with the path to the payment page
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Make Payment
                    </Link>
                  )}
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

export default ViewAdmissionStatus;
