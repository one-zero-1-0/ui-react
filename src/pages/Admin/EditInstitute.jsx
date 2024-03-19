

import React, { useState } from 'react';
import Navbar from '../../components/Public/Navbar'

// Sample data for institutes (replace with actual data)
const institutesData = [
  {
    id: 1,
    name: 'Anna University',
    location: 'Chennai',
    contact: '123-456-7890',
    description: 'A prestigious university offering various programs.',
    email: 'annauniversity@gmail.edu.com',
    courses: 50,
  },
  {
    id: 2,
    name: 'Harvard University',
    location: 'Cambridge',
    contact: '987-654-3210',
    description: 'A leading college providing quality education.',
    email: 'harvard@gmail.edu.com',
    courses: 30,
  },
  
];

function EditInstitute() {
  const [institutes, setInstitutes] = useState(institutesData);
  const [editingInstitute, setEditingInstitute] = useState(null);

  const handleEdit = (id) => {
    // Find the institute being edited
    const instituteToEdit = institutes.find(institute => institute.id === id);
    // Set the institute to edit
    setEditingInstitute({ ...instituteToEdit });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingInstitute({ ...editingInstitute, [name]: value });
  };

  const handleSave = () => {
    // Find the index of the institute being edited
    const index = institutes.findIndex(institute => institute.id === editingInstitute.id);
    // Update the institute in the institutes array
    const updatedInstitutes = [...institutes];
    updatedInstitutes[index] = editingInstitute;
    setInstitutes(updatedInstitutes);
    // Clear the editingInstitute state
    setEditingInstitute(null);
  };

  const handleDelete = (id) => {
    // Filter out the institute with the specified id
    const updatedInstitutes = institutes.filter(institute => institute.id !== id);
    // Update state with the filtered institutes
    setInstitutes(updatedInstitutes);
  };

  return (
    <div>
      <Navbar/>
    <div className="max-w-7xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Available Institutes</h2>
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
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {institutes.map((institute) => (
              <tr key={institute.id}>
                <td className="px-6 py-4 whitespace-nowrap">{institute.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingInstitute && editingInstitute.id === institute.id ? (
                    <input
                      type="text"
                      name="name"
                      value={editingInstitute.name}
                      onChange={handleChange}
                      className="form-input w-full rounded-md border-gray-300"
                    />
                  ) : institute.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingInstitute && editingInstitute.id === institute.id ? (
                    <input
                      type="text"
                      name="location"
                      value={editingInstitute.location}
                      onChange={handleChange}
                      className="form-input w-full rounded-md border-gray-300"
                    />
                  ) : institute.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingInstitute && editingInstitute.id === institute.id ? (
                    <input
                      type="text"
                      name="contact"
                      value={editingInstitute.contact}
                      onChange={handleChange}
                      className="form-input w-full rounded-md border-gray-300"
                    />
                  ) : institute.contact}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingInstitute && editingInstitute.id === institute.id ? (
                    <textarea
                      name="description"
                      value={editingInstitute.description}
                      onChange={handleChange}
                      rows="2"
                      className="form-textarea w-full rounded-md border-gray-300"
                    />
                  ) : institute.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingInstitute && editingInstitute.id === institute.id ? (
                    <input
                      type="text"
                      name="email"
                      value={editingInstitute.email}
                      onChange={handleChange}
                      className="form-input w-full rounded-md border-gray-300"
                    />
                  ) : institute.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingInstitute && editingInstitute.id === institute.id ? (
                    <input
                      type="text"
                      name="courses"
                      value={editingInstitute.courses}
                      onChange={handleChange}
                      className="form-input w-full rounded-md border-gray-300"
                    />
                  ) : institute.courses}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingInstitute && editingInstitute.id === institute.id ? (
                    <button
                      onClick={handleSave}
                      className="text-indigo-600 hover:text-indigo-900 mr-2"
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(institute.id)}
                        className="text-indigo-600 hover:text-indigo-900 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(institute.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </>
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

export default EditInstitute;
