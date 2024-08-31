import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminHeader from './AdminHeader';
import './PaidStudentsPage.css'; // Import the custom CSS

function PaidStudentsPage() {
  const [paidStudents, setPaidStudents] = useState([]);

  useEffect(() => {
    fetchPaidStudents();
  }, []);

  const fetchPaidStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/payment/paid-students');
      setPaidStudents(response.data);
    } catch (error) {
      console.error('Error fetching paid students:', error);
      alert('Error fetching paid students');
    }
  };

  return (
    <div className="paid-students-page">
      <AdminHeader />
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1>Paid Students</h1>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Register Number</th>
                  <th>Residence Type</th>
                  <th>Fees</th>
                  <th>Payment Method</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {paidStudents.map((student) => (
                  <tr key={student.id}>
                    <td>{student.studentName}</td>
                    <td>{student.registerNumber}</td>
                    <td>{student.residenceType}</td>
                    <td>{student.fees}</td>
                    <td>{student.paymentMethod}</td>
                    <td className="status">{student.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaidStudentsPage;
