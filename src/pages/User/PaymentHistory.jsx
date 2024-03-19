import React from 'react';
import UserNavbar from '../../components/Public/UserNavbar';

// Sample data for payment history (replace with actual data)
const paymentHistory = [
  {
    id: 1,
    studentId: 'S008',
    courseId: 'C006',
    totalAmount: '₹1500',
    paymentMode: 'UPI',
    paymentDate: '2021-12-05',
  },
  {
    id: 2,
    studentId: 'S002',
    courseId: 'C002',
    totalAmount: '₹1500',
    paymentMode: 'Card',
    paymentDate: '2020-04-30',
  },
  // Add more payment history entries as needed
];

function PaymentHistory() {
  return (
    <div>
      <UserNavbar/>
    <div className="max-w-7xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Payment History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Amount
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Mode
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paymentHistory.map((payment) => (
              <tr key={payment.id}>
                <td className="px-6 py-4 whitespace-nowrap">{payment.studentId}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.courseId}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.totalAmount}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.paymentMode}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.paymentDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default PaymentHistory;
