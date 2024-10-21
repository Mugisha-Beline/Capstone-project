// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/WildlifeEduLogo.jpg" alt="Wildlife EDU Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/login">Login/Signup</Link></li>
        <li><Link to="/forum-events">Forum + Events</Link></li>
        <li><Link to="/payment">Donate</Link></li>
        <li>
          <input type="text" placeholder="Search..." className="search-box" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
