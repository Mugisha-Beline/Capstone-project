// src/pages/Donate.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './Payment.css'; // Import the CSS for styling



const Donate = () => {
  const [customAmount, setCustomAmount] = useState('');

  const donationOptions = [
    { id: 1, amount: 10, description: "Support Wildlife Rescue" },
    { id: 2, amount: 25, description: "Contribute to Conservation Efforts" },
    { id: 3, amount: 50, description: "Sponsor a Wildlife Education Program" },
    { id: 4, amount: 100, description: "Become a Wildlife Advocate" },
  ];

  return (
    <div className="paymentpage">
      <div className="donate">
        <h2>Support Wildlife Conservation</h2>
        <p>Your contributions help us protect wildlife and their habitats. Choose a donation option below:</p>

        <div className="donation-cards">
          {donationOptions.map((option) => (
            <div key={option.id} className="donation-card">
              <h3>{option.amount ? `$${option.amount}` : 'Custom Amount'}</h3>
              <p>{option.description}</p>
              <Link to="/Pay" className="donate-button">Donate Now</Link>
            </div>
          ))}
        </div>

        {/* Custom Donation Input */}
        <div className="custom-donation">
          <input
            type="number"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            placeholder="Enter your preferred amount"
            min="1" // Minimum amount can be set
          />
          <Link to="/Pay" className="donate-button">Donate Now</Link>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-logo">
          <img src="/WildlifeEduLogo.jpg" alt="Wildlife EDU Logo" className="footer-logo-image" />
        </div>
        <div className="footer-links">
          <Link to="/Donate">Do you want to support us?</Link>
          <Link to="/Privacy">Privacy Policy</Link>
          <Link to="/Terms">Terms of Service</Link>
        </div>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.jpg" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/twitter.jpg" alt="Twitter" className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.jpg" alt="Instagram" className="social-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Donate;
