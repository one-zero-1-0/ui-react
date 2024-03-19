import React, { useState } from 'react';
import UserNavbar from '../../components/Public/UserNavbar';

function Enrollment() {
  const [courseName, setCourseName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [instituteName, setInstituteName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseFees, setCourseFees] = useState('');

  const handleEnroll = () => {
    // Perform enrollment logic here, e.g., saving enrollment data to a backend
    console.log('Enrollment details:', { courseName, studentName, instituteName, courseDescription, courseFees });
    // Reset form fields
    setCourseName('');
    setStudentName('');
    setInstituteName('');
    setCourseDescription('');
    setCourseFees('');
  };

  return (
    <div>
      <UserNavbar/>
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Enroll in Course</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label htmlFor="courseName" className="block text-gray-700 font-medium mb-2">
            Course Name
          </label>
          <input
            type="text"
            id="courseName"
            className="form-input w-full rounded-md border-gray-300"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="studentName" className="block text-gray-700 font-medium mb-2">
            Student Name
          </label>
          <input
            type="text"
            id="studentName"
            className="form-input w-full rounded-md border-gray-300"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="instituteName" className="block text-gray-700 font-medium mb-2">
            Institute Name
          </label>
          <input
            type="text"
            id="instituteName"
            className="form-input w-full rounded-md border-gray-300"
            value={instituteName}
            onChange={(e) => setInstituteName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="courseDescription" className="block text-gray-700 font-medium mb-2">
            Course Description
          </label>
          <textarea
            id="courseDescription"
            className="form-textarea w-full rounded-md border-gray-300"
            rows="4"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="courseFees" className="block text-gray-700 font-medium mb-2">
            Course Fees
          </label>
          <input
            type="number"
            id="courseFees"
            className="form-input w-full rounded-md border-gray-300"
            value={courseFees}
            onChange={(e) => setCourseFees(e.target.value)}
            required
          />
        </div>

        <button
          type="button"
          onClick={handleEnroll}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Enroll
        </button>
      </form>
    </div>
    </div>
  );
}

export default Enrollment;
