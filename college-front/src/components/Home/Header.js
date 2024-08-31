import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';
import './Header.css';

const Header = () => {
  const { auth, logout } = useAuth(); // Access auth and logout

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://seeklogo.com/images/N/nrk-logo-FFB5710CB5-seeklogo.com.png"
          alt="NRK College Logo"
          className="logo"
        />
        <span className="nav-title">
          <Link to="/">NRK College of Engineering and Technology</Link>
        </span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/admission">Admission</Link>
        </li>
        <li>
          <Link to="/adminp">Courses</Link>
        </li>
        <li>
          <Link to="/fees">Fees</Link>
        </li>
        {/* Uncomment the line below if you want to include the Alumni link */}
        {/* <li><Link to="/alumni">Alumni</Link></li> */}
        {!auth ? (
          <li>
            <Link to="/login">
              <button className="login-button">Login</button>
            </Link>
          </li>
        ) : (
          <li>
            <button className="logout-button" onClick={logout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
