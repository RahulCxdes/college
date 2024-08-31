import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewEnrollments.css';
import AdminHeader from './AdminHeader';

const NewEnrollments = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = () => {
    axios.get('http://localhost:8080/admission')
      .then(response => {
        setApplications(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Error fetching applications');
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/admission/${id}`)
      .then(() => {
        fetchApplications(); // Refresh the list after deletion
      })
      .catch(err => {
        console.error(err);
        alert('Error deleting application. Please try again.');
      });
  };

  const handleConfirm = (application) => {
    console.log("Sending application data:", application); // Log data
    axios.post('http://localhost:8080/confirm', application)
      .then(response => {
        console.log("Confirm response:", response); // Log response
        alert("Application confirmed successfully!"); // Add user feedback
        handleDelete(application.id); // Optionally delete the application after confirmation
      })
      .catch(err => {
        console.error("Error confirming application:", err); // Log error
        alert("Error confirming application. Please try again."); // Add user feedback
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
    <AdminHeader/>
    <div className="new-enrollments-container">
      <h2>New Enrollments</h2>
      <table className="new-enrollments-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Father's Name</th>
            <th>Mother's Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Achievements</th>
            <th>10th Percent</th>
            <th>12th Percent</th>
            <th>Course</th>
            <th>Residence Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr key={app.id}>
              <td>{app.id}</td>
              <td>{app.name}</td>
              <td>{app.fatherName}</td>
              <td>{app.motherName}</td>
              <td>{app.email}</td>
              <td>{app.phone}</td>
              <td>{app.address}</td>
              <td>{app.achievements}</td>
              <td>{app.tenthPercent}</td>
              <td>{app.twelfthPercent}</td>
              <td>{app.course}</td>
              <td>{app.residenceType}</td>
              <td>
                <button onClick={() => handleConfirm(app)}>Confirm</button>
                <button onClick={() => handleDelete(app.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default NewEnrollments;
