import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './components/Auth/AuthContext';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Home from './components/Home/Home';
import About from './components/About/About';
import Admission from './components/Admission/Admission';
import Fees from './components/Fees/Fees';
import AdminLogin from './components/admin/AdminLogin';
import StudentLogin from './components/Auth/StudentLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import NewEnrollments from './components/admin/NewEnrollments';
import ConfirmedStudents from './components/admin/ConfirmedStudents';
import FeesDetails from './components/Fees/FeesDetails';
import Courses from './components/Courses/Courses';
import PaidStudentsPage from './components/admin/PaidStudentsPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/new-enrollments" element={<NewEnrollments />} />
            <Route path="/confirmed-students" element={<ConfirmedStudents />} />
            <Route path="/fees-details" element={<FeesDetails />} />
            <Route path="/Paid-students" element={<PaidStudentsPage />} />
            <Route path="/adminp" element={<Courses />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
