import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import PieChart from './PieChart';
import AdminHeader from './AdminHeader';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [totalCourses, setTotalCourses] = useState(120); 
  const navigate = useNavigate(); // Define navigate

  useEffect(() => {
    fetch('http://localhost:8080/admission')
      .then(response => response.json())
      .then(data => setApplications(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="dashboard-container">
      <AdminHeader />
      <h1>Admin Dashboard</h1>
      <div className="dashboard-content">
        <div className="chart-section">
          <PieChart />
        </div>
        <div className="info-section">
          <div className="info-card">
            <h3>Total Courses</h3>
            <p>{totalCourses}</p>
          </div>
          <div className="info-card">
            <h3>Active Students</h3>
            <p>{applications.length}</p>
          </div>
          <div className="info-card" onClick={() => navigate('/new-enrollments')}>
            <h3>New Enrollments</h3>
            <p>{applications.length} (Assuming each application is a new enrollment)</p>
          </div>
          <div className="info-card">
            <h3>Upcoming Events</h3>
            <p>5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
