import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminHeader.css';
import { Link } from 'react-router-dom';
function AdminHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout functionality here
    navigate('/login');
  };

  return (
    <div className="admin-header">
      <div className="title">
      <Link to="/admin-dashboard" style={{ color: 'white', textDecoration: 'none' }}>
          NRK College of Engineering and Technology
        </Link>
      </div>
      <div className="header-buttons">
        <button onClick={() => navigate('/confirmed-students')} className="header-button">
          Confirmed Students
        </button>
        <button onClick={() => navigate('/paid-students')} className="header-button">
          Paid Students
        </button>
        <button onClick={handleLogout} className="header-button" style={{marginRight:30}}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminHeader;
