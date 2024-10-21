// src/pages/Payment.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import './About.css';
import './Donate.css';

const Payment = () => {
  const paymentOptions = [
    { id: 1, name: "Credit Card", description: "Visa, MasterCard, Discover", icon: "/creditcard.png" },
    { id: 2, name: "PayPal", description: "Secure payments with PayPal", icon: "/paypal.png" },
    { id: 3, name: "Google Pay", description: "Pay easily with Google Pay", icon: "/googlepay.png" },
    { id: 4, name: "Apple Pay", description: "Fast and easy payments with Apple Pay", icon: "/applepay.png" },
    { id: 5, name: "Bank Transfer", description: "Direct transfer from your bank", icon: "/banktransfer.jpg" },
    { id: 6, name: "Venmo", description: "Send money using Venmo", icon: "/venmo.png" },
    { id: 7, name: "Zelle", description: "Quick payments with Zelle", icon: "/zelle.jpg" },
    { id: 8, name: "Cash App", description: "Send money easily with Cash App", icon: "/cashapp.png" },
    { id: 9, name: "Cryptocurrency", description: "Bitcoin, Ethereum, and more", icon: "/cryptocurrency.jpg" },
    { id: 10, name: "Gift Card", description: "Use gift cards for your donation", icon: "/giftcard.jpg" },
  ];

  return (
    <div className="paymentpage">
    <div>
    <div className="payment">
      <h2>Select Your Payment Method</h2>
      <p>Choose one of the following options to complete your donation:</p>

      <div className="payment-cards">
        {paymentOptions.map((option) => (
          <div key={option.id} className="payment-card">
            <img src={option.icon} alt={option.name} className="payment-icon" />
            <h3>{option.name}</h3>
            <p>{option.description}</p>
            <Link to="/Donate" className="pay-button">Choose</Link>
          </div>
        ))}
      </div>
      </div>
    </div>
    {/* Footer Section */}
    <footer className="footer about-fade-in-up">
        <div className="footer-logo">
          <img src="/WildlifeEduLogo.jpg" alt="Wildlife EDU Logo" className="footer-logo-image about-fade-in-up" />
        </div>
        <div className="footer-links about-fade-in-up">
          <Link to="/Donate">Do you want to support us?</Link>
          <Link to="/Privacy">Privacy Policy</Link>
          <Link to="/Terms">Terms of Service</Link>
        </div>
        <div className="social-media about-fade-in-up">
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

export default Payment;
