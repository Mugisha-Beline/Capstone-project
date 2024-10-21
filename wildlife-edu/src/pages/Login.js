// src/pages/Login.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { login } from './Firebase'; 
import './Home.css'; 
import './Login.css'; 


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Call the login function from firebase.js
      await login(email, password);
      alert("Login successful!");
      navigate('/post-register');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert("User not found. Please register before logging in.");
      } else {
        alert(error.message); 
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.login, .form-group, .login-button');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('show'); 
        } else {
          el.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="loginpage">
      <div className="login-container">
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
            <center><button type="submit" className="cta-button">Login</button></center>
          </form>
          <p>
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </p>
        </div>
      </div>
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
