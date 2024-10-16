// src/pages/PostRegister.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './PostRegister.css'; // Import the CSS for styling

const PostRegister = () => {
  return (
    <div className="post-registerpage">
    <div className="registered">
    <div className="post-register-container">
      <h2>Welcome to Wildlife EDU!</h2>
      <p>Registered successfully!</p>
      <p>Congratulations <span role="img" aria-label="celebration">🎉</span></p>
      <div className="post-register-actions">
        <Link to="/courses" className="post-register-button">Explore Courses</Link>
        <Link to="/forum" className="post-register-button">Join Forum</Link>
      </div>
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

export default PostRegister;
