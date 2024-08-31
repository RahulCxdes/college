import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import './AdminLogin.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      toast.error('Please enter both email and password');
      return;
    }

    axios.get('http://localhost:8080/api/login', {
      params: {
        email,
        password
      }
    })
    .then(res => {
      console.log(res.data);
      if(res.data.roles === "ADMIN") {
        toast.success('Logged In');
        navigate('/admin-dashboard');
      } else {
        toast.error('Login unsuccessful');
      }
    })
    .catch(err => {
      toast.error('Invalid username or password');
      console.error(err);
    });
  };

  return (
    <>
      <Header />
      <div className="admin-login-container">
        <div className="admin-login-form">
          <h2>Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default AdminLogin;
