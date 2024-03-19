
import React, { useState } from 'react';
import UserNavbar from '../../components/Public/UserNavbar';
function UserProfile() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [nationality, setNationality] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [sslcMarks, setSslcMarks] = useState('');
  const [hscMarks, setHscMarks] = useState('');
  const [eligibility, setEligibility] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., sending data to backend
    console.log('Form submitted:', { name, gender, age, nationality, dob, address, mobile, sslcMarks, hscMarks, eligibility });
    // Reset form fields
    setName('');
    setGender('');
    setAge('');
    setNationality('');
    setDob('');
    setAddress('');
    setMobile('');
    setSslcMarks('');
    setHscMarks('');
    setEligibility('');
  };

  return (
    <div>
      <UserNavbar/>
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Student Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
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
          <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">
            Gender
          </label>
          <input
            type="text"
            id="gender"
            className="form-input w-full rounded-md border-gray-300"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
            Age
          </label>
          <input
            type="number"
            id="age"
            className="form-input w-full rounded-md border-gray-300"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="nationality" className="block text-gray-700 font-medium mb-2">
            Nationality
          </label>
          <input
            type="text"
            id="nationality"
            className="form-input w-full rounded-md border-gray-300"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="dob" className="block text-gray-700 font-medium mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="form-input w-full rounded-md border-gray-300"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="form-input w-full rounded-md border-gray-300"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2">
            Mobile No
          </label>
          <input
            type="number"
            id="mobile"
            className="form-input w-full rounded-md border-gray-300"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="sslcMarks" className="block text-gray-700 font-medium mb-2">
            SSLC Marks
          </label>
          <input
            type="number"
            id="sslcMarks"
            className="form-input w-full rounded-md border-gray-300"
            value={sslcMarks}
            onChange={(e) => setSslcMarks(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="hscMarks" className="block text-gray-700 font-medium mb-2">
            HSC Marks
          </label>
          <input
            type="number"
            id="hscMarks"
            className="form-input w-full rounded-md border-gray-300"
            value={hscMarks}
            onChange={(e) => setHscMarks(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="eligibility" className="block text-gray-700 font-medium mb-2">
            Eligibility
          </label>
          <input
            type="text"
            id="eligibility"
            className="form-input w-full rounded-md border-gray-300"
            value={eligibility}
            onChange={(e) => setEligibility(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}

export default UserProfile;
