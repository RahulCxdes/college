import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Main Links</h3>
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/admission">Admission</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/alumni">Alumni</Link></li>
          <li><Link to="/placement">Placement</Link></li>
          <li><Link to="/student-life">Student Life</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/fees">Fees</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Accreditations</h3>
        <ul>
          <li>NAAC</li>
          <li>NBA</li>
          <li>ISO 9001:2015</li>
          <li>AICTE</li>
          <li>NAAC</li>
          <li>NBA</li>
          <li>ISO 9001:2015</li>
          <li>AICTE</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/annual-report">Annual Report</Link></li>
          <li><Link to="/alumni-success-stories">Alumni Success Stories</Link></li>
          <li><Link to="/campus-tour">Campus Tour</Link></li>
          <li><Link to="/research-publications">Research Publications</Link></li>
          <li><Link to="/grievance-redressal">Grievance Redressal</Link></li>
          <li><Link to="/media-gallery">Media Gallery</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;