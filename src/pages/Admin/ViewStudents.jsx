import React, { useState } from 'react';
import Navbar from '../../components/Public/Navbar';

// Sample data for students (replace with actual data)
const studentsData = [
  {
    id: 1,
    userId: '7589',
    name: 'Atchu Kuttan',
    gender: 'Male',
    nationality: 'Indian',
    dob: '2003-05-15',
    age: 21,
    address: 'Shanthi colony , Chennai',
    mobile: '123-456-7890',
    sslcMarks: 85,
    hscMarks: 90,
    eligibility: 'Eligible',
  },
  {
    id: 2,
    userId: '7456',
    name: 'Janet Patrick',
    gender: 'Female',
    nationality: 'British',
    dob: '1999-08-20',
    age: 22,
    address: '456 Elm St, Townsville, UK',
    mobile: '987-654-3210',
    sslcMarks: 90,
    hscMarks: 88,
    eligibility: 'Eligible',
  },
  // Add more students as needed
];

function ViewStudents() {
  const [students, setStudents] = useState(studentsData);

  return (
    <div>
      <Navbar/>
    <div className="max-w-7xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Student List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Gender
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nationality
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date of Birth
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mobile No
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                SSLC Marks
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                HSC Marks
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Eligibility
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap">{student.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.userId}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.gender}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.nationality}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.dob}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.age}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.address}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.mobile}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.sslcMarks}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.hscMarks}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.eligibility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default ViewStudents;
