// src/pages/Signup.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from './Firebase';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [animate, setAnimate] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Call the signUp function from firebase.js
      await signUp(email, password);
      alert("Registration successful!");
      navigate('/post-register'); 
    } catch (error) {
      alert(error.message); 
    }
  };

  return (
    <div className="signuppage">
      <div className={`sign ${animate ? 'bounce' : ''}`}>
        <div className="signup-container">
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
                <center>
                  <button type="submit" className="cta-button">Sign Up</button>
                </center>
              </ul>
            </form>
            <p className='p'>
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
