import React, { useState } from 'react';
import Navbar from '../../components/Public/Navbar';

function AddInstitute() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [courses, setNoOfCourses] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., sending data to backend
    console.log('Form submitted:', { name, location, description,email,courses });
    // Reset form fields
    setName('');
    setLocation('');
    setContact('');
    setDescription('');
    setEmail('');
    setNoOfCourses('');
  };

  return (
    <div>
      <Navbar/>
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Institute</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name Of Institute
          </label>
          <input
            type="text"
            id="name"
            className="form-input w-full rounded-md border-gray-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
            Location 
          </label>
          <input
            type="text"
            id="location"
            className="form-input w-full rounded-md border-gray-300"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Contact" className="block text-gray-700 font-medium mb-2">
            Contact
          </label>
          <input
            type="text"
            id="contact"
            className="form-input w-full rounded-md border-gray-300"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            className="form-textarea w-full rounded-md border-gray-300"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
            Email id
          </label>
          <input
          type='email'
            id="email"
            className="form-textarea w-full rounded-md border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="courses" className="block text-gray-700 font-medium mb-2">
           Number of Courses Available
          </label>
          <input
          type='number'
            id='courses'
            className="form-textarea w-full rounded-md border-gray-300"
            value={courses}
            onChange={(e) => setNoOfCourses(e.target.value)}
          required
          />
        </div>
       

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Institute
        </button>
      </form>
    </div>
    </div>
  );
}

export default AddInstitute;
