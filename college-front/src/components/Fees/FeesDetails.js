import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './FeesDetails.css';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

function FeesDetails() {
  const { state } = useLocation();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({});

  if (!state || !state.student) {
    return <div>No student data found. Please go back and check your register number.</div>;
  }

  const { student } = state;
  const fees = student.residenceType === 'Hosteller' ? 300000 : 150000;

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setPaymentDetails({}); // Clear payment details on method change
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const paymentData = {
      rollNumber: student.rollNumber,
      paymentMethod,
      fees,
      ...paymentDetails,
    };

    console.log('Submitting payment data:', paymentData); // Log payment data

    try {
      await axios.post('http://localhost:8080/payment', paymentData);
      
      // Update payment status in the backend
      await axios.put(`http://localhost:8080/confirm/payment/${student.id}`, { feesPaid: true });

      alert('Payment successful!'); // Show success message
    } catch (error) {
      console.error('Error processing payment:', error); // Log error
      alert('Payment failed. Please try again.'); // Show error message
    }
  };

  return (
    <>
      <Header />
      <div className="page-background">
        <div className="container">
          <h2>Fees Payment</h2>
          <p><strong>Student Name:</strong> {student.name}</p>
          <p><strong>Register Number:</strong> {student.rollNumber}</p>
          <p><strong>Residence Type:</strong> {student.residenceType}</p>
          <p><strong>Fees:</strong> ₹{fees}</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="payment-method">Payment Method</label>
              <select
                id="payment-method"
                name="payment-method"
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
                required
              >
                <option value="">Select Payment Method</option>
                <option value="credit-card">Credit Card</option>
                <option value="bank-transfer">Bank Transfer</option>
              </select>
            </div>
            {paymentMethod === 'credit-card' && (
              <>
                <div className="form-group">
                  <label htmlFor="card-number">Card Number</label>
                  <input
                    type="text"
                    id="card-number"
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="expiry-date">Expiry Date</label>
                  <input
                    type="text"
                    id="expiry-date"
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                    required
                  />
                </div>
              </>
            )}
            {paymentMethod === 'bank-transfer' && (
              <>
                <div className="form-group">
                  <label htmlFor="bank-name">Bank Name</label>
                  <input
                    type="text"
                    id="bank-name"
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, bankName: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="account-number">Account Number</label>
                  <input
                    type="text"
                    id="account-number"
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, accountNumber: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ifsc-code">IFSC Code</label>
                  <input
                    type="text"
                    id="ifsc-code"
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, ifscCode: e.target.value })}
                    required
                  />
                </div>
              </>
            )}
            <button type="submit">Submit Payment</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FeesDetails;
