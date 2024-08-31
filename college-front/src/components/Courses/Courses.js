import React from 'react';
import './Courses.css'; // Ensure this path is correct based on your project structure
import Header from '../Home/Header';
import Footer from '../Home/Footer';

function Courses() {
  return (
    <div>
      <Header/>
    
    <div className="courses-container">
      <div className="courses-content">
        <h1>Courses Offered</h1>
        <div className="courses-grid">
          <div className="course-card">
            <h3>Computer Science and Engineering (CSE)</h3>
            <p>Explore the fundamentals of computer science and technology, including programming, algorithms, and system design.</p>
          </div>
          <div className="course-card">
            <h3>Electronics and Communication Engineering (ECE)</h3>
            <p>Dive into the world of electronics and communication systems, focusing on circuit design, signal processing, and telecommunications.</p>
          </div>
          <div className="course-card">
            <h3>Electrical and Electronics Engineering (EEE)</h3>
            <p>Learn about electrical systems, power generation, electronics, and control systems.</p>
          </div>
          <div className="course-card">
            <h3>Mechatronics Engineering</h3>
            <p>Combine mechanical engineering with electronics and computer systems to design and build advanced automation systems.</p>
          </div>
          <div className="course-card">
            <h3>Bio-Technology</h3>
            <p>To understand the diversity of the surrounding and Help Students to understand the environment better. </p>
          </div>
          <div className="course-card">
            <h3>MTech Programs</h3>
            <p>Advance your knowledge with specialized MTech programs in various fields such as VLSI, Power Systems, and more.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Courses;