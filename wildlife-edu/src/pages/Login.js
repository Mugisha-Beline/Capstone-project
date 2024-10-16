// src/pages/Login.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Add this import for Link
import './Home.css'; // Import your CSS file for Home styling
import './Login.css'; // Import the CSS file for Login styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic (authentication)
    console.log('Logging in with:', email, password);
    // Here you would typically call your authentication API
  };

  // Function to handle scroll-triggered animations
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.login, .form-group, .login-button');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('show'); // Add 'show' class when the element is in view
        } else {
          el.classList.remove('show'); // Remove 'show' class when out of view
        }
      });
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Trigger the scroll event on component mount to catch elements already in view
    handleScroll();

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="loginpage">
    <div className="login-container"> {/* Added a container for better structure */}
      <div className="login fade-in-up">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group fade-in-up">
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
          <div className="form-group fade-in-up">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <center><Link to="/courses" className="cta-button">Login</Link></center>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up here</Link>
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

export default Login;
