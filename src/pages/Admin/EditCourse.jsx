import React, { useState } from 'react';
import Navbar from '../../components/Public/Navbar';

// Sample data for courses (replace with actual data)
const coursesData = [
  {
    id: 1,
    name: 'Computer Science',
    description: 'Learn computer programming and software development.',
    duration: '4 years',
    fees: '$10,000 per year',
    seats: 100,
    institution: 'Anna University',
  },
  {
    id: 2,
    name: 'Chemical Engineering',
    description: 'Study of Chemicals and their properties.',
    duration: '4 years',
    fees: '$12,000 per year',
    seats: 80,
    institution: 'Harvard University',
  },
  // Add more courses as needed
];

function EditCourse() {
  const [courses, setCourses] = useState(coursesData);
  const [editingCourse, setEditingCourse] = useState(null);

  const handleEdit = (id) => {
    // Find the course being edited
    const courseToEdit = courses.find(course => course.id === id);
    // Set the course to edit
    setEditingCourse({ ...courseToEdit });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingCourse({ ...editingCourse, [name]: value });
  };

  const handleSave = () => {
    // Find the index of the course being edited
    const index = courses.findIndex(course => course.id === editingCourse.id);
    // Update the course in the courses array
    const updatedCourses = [...courses];
    updatedCourses[index] = editingCourse;
    setCourses(updatedCourses);
    // Clear the editingCourse state
    setEditingCourse(null);
  };

  const handleDelete = (id) => {
    // Filter out the course with the specified id
    const updatedCourses = courses.filter(course => course.id !== id);
    // Update state with the filtered courses
    setCourses(updatedCourses);
  };

  return (
    <div>
      <Navbar/>
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
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingCourse && editingCourse.id === course.id ? (
                    <input
                      type="text"
                      name="name"
                      value={editingCourse.name}
                      onChange={handleChange}
                      className="form-input w-full rounded-md border-gray-300"
                    />
                  ) : course.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingCourse && editingCourse.id === course.id ? (
                    <textarea
                      name="description"
                      value={editingCourse.description}
                      onChange={handleChange}
                      rows="2"
                      className="form-textarea w-full rounded-md border-gray-300"
                    />
                  ) : course.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingCourse && editingCourse.id === course.id ? (
                    <input
                      type="text"
                      name="duration"
                      value={editingCourse.duration}
                      onChange={handleChange}
                      className="form-input w-full rounded-md border-gray-300"
                    />
                  ) : course.duration}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingCourse && editingCourse.id === course.id ? (
                    <input
                      type="text"
                      name="fees"
                      value={editingCourse.fees}
                      onChange={handleChange}
                      className="form-input w-full rounded-md border-gray-300"
                    />
                  ) : course.fees}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingCourse && editingCourse.id === course.id ? (
                    <input
                      type="text"
                      name="seats"
                      value={editingCourse.seats}
                      onChange={handleChange}
                      className="form-input w-full rounded-md border-gray-300"
                    />
                  ) : course.seats}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingCourse && editingCourse.id === course.id ? (
                    <input
                      type="text"
                      name="institution"
                      value={editingCourse.institution}
                      onChange={handleChange}
                      className="form-input w-full rounded-md border-gray-300"
                    />
                  ) : course.institution}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingCourse && editingCourse.id === course.id ? (
                    <button
                      onClick={handleSave}
                      className="text-indigo-600 hover:text-indigo-900 mr-2"
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(course.id)}
                        className="text-indigo-600 hover:text-indigo-900 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(course.id)}
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

export default EditCourse;
