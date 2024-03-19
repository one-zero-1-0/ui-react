import React, { useState } from 'react';
import UserNavbar from '../../components/Public/UserNavbar';

function Payment() {
  const [studentId, setStudentId] = useState('');
  const [courseId, setCourseId] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [paymentDate, setPaymentDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform payment submission logic here, e.g., sending payment data to a backend
    console.log('Payment details:', { studentId, courseId, totalAmount, paymentMode, paymentDate });
    // Reset form fields
    setStudentId('');
    setCourseId('');
    setTotalAmount('');
    setPaymentMode('');
    setPaymentDate('');
  };

  return (
    <div>
      <UserNavbar/>
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Make Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="studentId" className="block text-gray-700 font-medium mb-2">
            Student ID
          </label>
          <input
            type="number"
            id="studentId"
            className="form-input w-full rounded-md border-gray-300"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="courseId" className="block text-gray-700 font-medium mb-2">
            Course ID
          </label>
          <input
            type="number"
            id="courseId"
            className="form-input w-full rounded-md border-gray-300"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="totalAmount" className="block text-gray-700 font-medium mb-2">
            Total Amount
          </label>
          <input
            type="number"
            id="totalAmount"
            className="form-input w-full rounded-md border-gray-300"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="paymentMode" className="block text-gray-700 font-medium mb-2">
            Mode of Payment
          </label>
          <select
            id="paymentMode"
            className="form-select w-full rounded-md border-gray-300"
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
            required
          >
            <option value="">Select Payment Mode</option>
            <option value="gpay">Google Pay</option>
            <option value="card">Card</option>
            <option value="cash">Cash</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="paymentDate" className="block text-gray-700 font-medium mb-2">
            Payment Date
          </label>
          <input
            type="date"
            id="paymentDate"
            className="form-input w-full rounded-md border-gray-300"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit Payment
        </button>
      </form>
    </div>
    </div>
  );
}

export default Payment;
