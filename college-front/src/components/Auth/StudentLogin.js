import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';
import axios from 'axios';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Auth.css';
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
  const { auth, login, logout } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('http://localhost:8080/api/login', {
        params: { email, password }
      });

      // If login is successful
      login({ email: response.data.email, roles: 'USER' });
      navigate('/');
    } catch (error) {
      toast.error('Invalid email or password');
      console.error('Login error:', error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <Header />
      <div className="auth-container">
        <div className="auth-form">
          <h2>{auth ? 'Welcome Back' : 'Login'}</h2>
          {auth ? (
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          ) : (
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Login</button>
            </form>
          )}
          {!auth && (
            <p className="signup-link">
              Don't have an account? <Link to="/signup">Sign up here</Link>
            </p>
          )}
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default Login;
