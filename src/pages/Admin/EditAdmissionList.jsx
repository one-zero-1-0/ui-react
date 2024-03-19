
import React, { useState } from 'react';
import Navbar from '../../components/Public/Navbar';

// Sample data for admission details (replace with actual data)
const admissionDetailsData = [
  {
    id: 1,
    studentName: 'John Watson',
    courseName: 'Computer Science',
    status: 'Pending',
  },
  {
    id: 2,
    studentName: 'Patrick Jane',
    courseName: 'Psychology',
    status: 'Approved',
  },
  // Add more admission details as needed
];

function EditAdmissionList() {
  const [admissionDetails, setAdmissionDetails] = useState(admissionDetailsData);
  const [editingAdmissionId, setEditingAdmissionId] = useState(null);
  const [editedStatus, setEditedStatus] = useState('');

  const handleEditStatus = (id, currentStatus) => {
    setEditingAdmissionId(id);
    setEditedStatus(currentStatus);
  };

  const handleChangeStatus = (e) => {
    setEditedStatus(e.target.value);
  };

  const handleSaveStatus = (id) => {
    // Find the admission detail with the specified id
    const updatedAdmissionDetails = admissionDetails.map(admission => {
      if (admission.id === id) {
        return { ...admission, status: editedStatus };
      }
      return admission;
    });
    setAdmissionDetails(updatedAdmissionDetails);
    setEditingAdmissionId(null);
  };

  return (
    <div>
      <Navbar/>
    <div className="max-w-7xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Admission Details</h2>
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
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingAdmissionId === admission.id ? (
                    <select
                      className="form-select w-full rounded-md border-gray-300"
                      value={editedStatus}
                      onChange={handleChangeStatus}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  ) : (
                    admission.status
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingAdmissionId === admission.id ? (
                    <button
                      onClick={() => handleSaveStatus(admission.id)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEditStatus(admission.id, admission.status)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Update Status
                    </button>
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

export default EditAdmissionList;
