import React, { useEffect, useState, useRef } from 'react';
import AdminHeader from './AdminHeader'; // Import the header component
import './ConfirmedStudents.css';

const ConfirmedStudents = () => {
  const [confirmedApplications, setConfirmedApplications] = useState([]);
  const [rollNumbers, setRollNumbers] = useState({});
  const isMounted = useRef(true); // Ref to track if the component is mounted

  useEffect(() => {
    isMounted.current = true; // Set to true when component mounts

    const fetchApplications = async () => {
      try {
        const response = await fetch('http://localhost:8080/confirm');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        if (isMounted.current) {
          setConfirmedApplications(data);
        }
      } catch (err) {
        console.error(err);
        if (isMounted.current) {
          alert('Failed to fetch confirmed applications');
        }
      }
    };

    fetchApplications();

    return () => {
      isMounted.current = false; // Set to false when component unmounts
    };
  }, []);

  const handleRollNumberChange = (id, rollNumber) => {
    setRollNumbers({ ...rollNumbers, [id]: rollNumber.trim() }); // Ensure no extra spaces
  };

  const handleUpdateRollNumber = async (id) => {
    const rollNumber = rollNumbers[id];
    try {
      const response = await fetch(`http://localhost:8080/confirm/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rollNumber }), // Ensure this is a JSON object with rollNumber key
      });

      if (response.ok) {
        if (isMounted.current) {
          setConfirmedApplications(prevState =>
            prevState.map(app => (app.id === id ? { ...app, rollNumber } : app))
          );
          alert('Roll number successfully updated!');
        }
      } else {
        alert('Failed to update roll number');
      }
    } catch (err) {
      console.error(err);
      if (isMounted.current) {
        alert('An error occurred while updating roll number');
      }
    }
  };

  return (
    <div className="confirmed-students-container">
      <AdminHeader /> {/* Include the header */}
      <h1>Confirmed Students</h1>
      <table>
        <thead>
          <tr>
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
        
            <th>Roll Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {confirmedApplications.map((app) => (
            <tr key={app.id}>
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
                <input
                  type="text"
                  value={rollNumbers[app.id] || app.rollNumber || ''}
                  onChange={(e) => handleRollNumberChange(app.id, e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => handleUpdateRollNumber(app.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConfirmedStudents;
