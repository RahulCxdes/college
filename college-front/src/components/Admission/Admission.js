import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import { useAuth } from '../Auth/AuthContext'; // Import useAuth for authentication
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Admission.css';

function Admission() {
  const { auth } = useAuth(); // Get authentication status
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    motherName: '',
    email: '',
    phone: '',
    address: '',
    achievements: '',
    tenthPercent: '',
    twelfthPercent: '',
    course: '',
    residenceType: '' // New field for Hosteller or Day Scholar
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!auth) {
      toast.error('You must be logged in to submit the application.');
      return;
    }

    axios.post('http://localhost:8080/admission', formData)
      .then(res => {
        toast.success('Application submitted successfully!');
        setFormData({
          name: '',
          fatherName: '',
          motherName: '',
          email: '',
          phone: '',
          address: '',
          achievements: '',
          tenthPercent: '',
          twelfthPercent: '',
          course: '',
          residenceType: '' // Reset the new field
        });
      })
      .catch(err => {
        toast.error('An error occurred while submitting the application.');
        console.log(err);
      });
  };

  if (!auth) {
    // Redirect to login page if not authenticated
    return (
      <div>
        <Header />
        <div className="page-background">
          <div className="container">
            <h2>You need to be logged in to access the admission form</h2>
            <button onClick={() => navigate('/login')}>Go to Login</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="page-background">
        <div className="container">
          <h2>Admission Form</h2>
          <form onSubmit={handleSubmit}>
            {/* Existing form fields */}
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="fatherName">Father's Name</label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="motherName">Mother's Name</label>
              <input
                type="text"
                id="motherName"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="achievements">Achievements</label>
              <textarea
                id="achievements"
                name="achievements"
                value={formData.achievements}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="tenthPercent">10th Mark Percent</label>
              <input
                type="number"
                id="tenthPercent"
                name="tenthPercent"
                value={formData.tenthPercent}
                onChange={handleChange}
                step="0.1"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="twelfthPercent">12th Mark Percent</label>
              <input
                type="number"
                id="twelfthPercent"
                name="twelfthPercent"
                value={formData.twelfthPercent}
                onChange={handleChange}
                step="0.1"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="course">Course</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">Select Course</option>
                <option value="Computer Science">Computer Science</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="Mechanical">Mechanical</option>
              </select>
            </div>
            
            {/* New form field for Residence Type */}
            <div className="form-group">
              <label htmlFor="residenceType">Residence Type</label>
              <select
                id="residenceType"
                name="residenceType"
                value={formData.residenceType}
                onChange={handleChange}
                required
              >
                <option value="">Select Residence Type</option>
                <option value="Hosteller">Hosteller</option>
                <option value="Day Scholar">Day Scholar</option>
              </select>
            </div>

            <button type="submit">Submit Application</button>
          </form>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Admission;
