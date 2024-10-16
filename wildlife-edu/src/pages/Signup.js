// src/pages/Signup.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Signup.css';
import './Home.css';
import './PostRegister.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [animate, setAnimate] = useState(false); // State for animation

  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    // Set the animation to true when the component mounts
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false); // Reset animation state after 3 seconds
    }, 3000); // Duration of the animation

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();
    
    // Validate password match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    console.log('Signing up with:', name, email, password);
    
    // After handling the signup logic (e.g., API call), redirect to Post Register page
    navigate('/post-register'); // Programmatically navigate after signup
  };

  return (
    <div className="signuppage">
    <div className={`sign ${animate ? 'bounce' : ''}`}>
      <div className="signup">
        <h2>Register Here!</h2>
        <form onSubmit={handleSignup}>
          <div className="form">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="form">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Create a password"
            />
          </div>
          <div className="form">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm your password"
            />
          </div>
          <ul>
            <center><Link to="/post-register" className="cta-button">Sign Up</Link></center>
          </ul>
        </form>
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
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

export default Signup;
