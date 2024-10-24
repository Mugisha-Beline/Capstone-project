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
          
          <form onSubmit={handleLogin} className="login-form">
          <h2>Login to Your Account</h2>
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
            <p className="p">
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
          </form>

          <div className="login-image">
            <img src="/giraffe.jpg" alt="Login Illustration" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
