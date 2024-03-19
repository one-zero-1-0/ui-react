import React,{useState} from 'react';
import Navbar from '../../components/Public/Navbar'

function AddCourse() {
const[courseName,setCourseName]= useState('');
const[description,setDescription]=useState('');
const[duration,setDuration]=useState('');
const[fees,setFees]=useState('');
const[seats,setNoOfSeats]=useState('');
const[institute,setInstitute]=useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted:',{courseName,description,duration,fees,seats,institute});
  setCourseName('');
  setDescription('');
  setDuration('');
  setFees('');
  setNoOfSeats('');
  setInstitute('');
};

return(
<div>
  <Navbar/>
  <div className='max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
    <h2 className='text-2xl font-semibold mb-4'>Add Course</h2>
    <form onSubmit={handleSubmit}>
      <div className='mb-4'>
        <label htmlFor='courseName' className='block text-gray-700 font medium mb-2'>
          Name of Course
        </label>
        <input
        type='text'
        id='courseName'
        className='form-input w-full rounded-md border-gray-300'
        value={courseName}
        onChange={(e)=> setCourseName(e.target.value)}
        required
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='description' className='block text-gray-700 font-medium mb-2'>
          Description
        </label>
        <input
        type='text'
        id='description'
        className='form-input w-full rounded-md border-gray-300'
        value={description}
        onChange={(e)=> setDescription(e.target.value)}
        required
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='duration' className='block text-gray-700 font-medium mb-2'>
          Duration
        </label>
        <input
        type='text'
        id='duration'
        className='form-input w-full rounded-md border-gray-300'
        value={duration}
        onChange={(e)=> setDuration(e.target.value)}
        required
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='fees' className='block text-gray-700 font-medium mb-2'>
          Fees
        </label>
        <input
        type='number'
        id='fees'
        className='form-input w-full rounded-md border-gray-300'
        value={fees}
        onChange={(e)=> setFees(e.target.value)}
        required
        />
      </div>


      <div className='mb-4'>
        <label htmlFor='seats' className='block text-gray-700 font-medium mb-2'>
          Number Of Seats Available 
        </label>
        <input
        type='number'
        id='seats'
        className='form-input w-full rounded-md border-gray-300'
        value={seats}
        onChange={(e)=> setNoOfSeats(e.target.value)}
        required
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='courseName' className='block text-gray-700 font-medium mb-2'>
         Institute
        </label>
        <input
        type='text'
        id='institute'
        className='form-input w-full rounded-md border-gray-300'
        value={institute}
        onChange={(e)=> setInstitute(e.target.value)}
        required
        />
        
      </div>
      <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Course
        </button>
      </form>
  </div>
</div>
);
}


export default AddCourse