import React from 'react';

import './About.css'; // Ensure this path is correct based on your project structure
import Header from '../Home/Header';
import Footer from '../Home/Footer';

function About() {
  return (
    <div>

    <Header/>
    <div className="about-container">
     
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to NRK, a place of excellence in education and innovation. We are committed to providing a nurturing environment that fosters academic and personal growth.
        </p>
        <div className="achievements">
          <h2>Our Achievements</h2>
          <div className="achievement-card">
            <h3>Top 5th NIRF Rank</h3>
            <p>We are proud to be ranked 5th in the National Institutional Ranking Framework (NIRF). This achievement reflects our dedication to providing top-notch education and facilities.</p>
          </div>
          <div className="achievement-card">
            <h3>98% Placement Rate</h3>
            <p>Our college boasts an impressive 98% placement rate, showcasing our commitment to ensuring that our graduates are well-prepared for successful careers in their chosen fields.</p>
          </div>
          <div className="achievement-card">
            <h3>Leadership Roles</h3>
            <p>Our college boasts an impressive 98% placement rate, showcasing our commitment to ensuring that our graduates are well-prepared for successful careers in their chosen fields.</p>
          </div>
          <div className="achievement-card">
            <h3>Research and Publications</h3>
            <p>Our college boasts an impressive 98% placement rate, showcasing our commitment to ensuring that our graduates are well-prepared for successful careers in their chosen fields.</p>
          </div>
          <div className="achievement-card">
            <h3>Internships and Work Experience</h3>
            <p>Our college boasts an impressive 98% placement rate, showcasing our commitment to ensuring that our graduates are well-prepared for successful careers in their chosen fields.</p>
          </div>
          <div className="achievement-card">
            <h3>Extracurricular Activities</h3>
            <p>Our college boasts an impressive 98% placement rate, showcasing our commitment to ensuring that our graduates are well-prepared for successful careers in their chosen fields.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default About;